import dogs from './data.js';
import Dog from './Dog.js'


// buttons 
const likeBtn = document.getElementById('likeBtn')
const rejectBtn = document.getElementById('rejectBtn')

// add event listeners to buttons
likeBtn.addEventListener('click', like)
rejectBtn.addEventListener('click', reject)

// on screen touch swipe left or right
document.addEventListener('touchstart', (e) => {
    if (e.target.classList.contains('swipe-left')) {
        like()
    } else if (e.target.classList.contains('swipe-right')) {
        reject()
    }
} )



// create an array of dogs from the data.js file
const dogsArray = dogs.map(dog => new Dog(dog))
let dog = getNewDog()

function getNewDog() {
    // get next dog in the array
    const nextDog = dogsArray.shift()
    return nextDog ? new Dog(nextDog) : {}
}

// gets next dog in the array and renders it, if no more dogs, end
function nextDog() {
    setTimeout(() => {
        if (dogsArray.length > 0) {
            dog = getNewDog()
            render()
        } else {
            end()
        }
    }, 1000)
}

// like = swipe left
function like() {
    dog.hasBeenLiked = true
    dog.hasBeenSwiped = true
    swipeAnimation('left')
    nextDog()
}

// reject = swipe right
function reject() {
    dog.hasBeenSwiped = true
    swipeAnimation('right')
    nextDog()
}

function swipeAnimation(direction) {
    const profileContainer = document.getElementById('profileContainer')
    const stamp = document.getElementById('stamp')
    stamp.classList.add(`stamp-${direction}`)
    setTimeout(() => {
        profileContainer.classList.add(`swipe-${direction}`)
        setTimeout(() => {
            profileContainer.classList.remove(`swipe-${direction}`)
        }, 800)
    }, 500)
}

function end() {
    console.log('end')
    document.getElementById('mainContainer').innerHTML = 
        `<p class="end-message">No more dogs in your area</p>`
}

function render() {
    document.getElementById('profileContainer').innerHTML = dog.getProfileHtml()
}

render()

