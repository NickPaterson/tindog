// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getProfileHtml () {
        // decontruct the data object
        const { name, age, image, bio } = this
        return `
        <div class="profile flex direction-col">
            <div class="profile-info flex direction-col">
                <div class="flex">
                    <h2 class="name">${name}</h2>
                    <p class="age">${age}</p>
                </div>
                <p class="bio">${bio}</p>
            </div>
            <img class="profile-img" src="${image}" alt="image of ${name}">
            <div id="stamp"></div>
        </div>
        `
    }
    
}

export default Dog;