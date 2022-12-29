// javascript
import dogs from `/data.js`
import DogProfile from `/Dog.js`
                                                   
let dog = getNewDog()

function getNewDog() {
    const nextDog = dogs.shift()
    return nextDog ? new DogProfile(nextDog) : {}
}

function render() {
    document.querySelector("main").innerHTML = dog.dogProfileHtml()
}

document.addEventListener("click", function(e) {
    if (!dog.hasBeenLiked || !dog.hasBeenSwiped) {
        if (e.target.id === "reject-btn") {
            document.getElementById("badge-nope").style.display = "block"
            dog.hasBeenSwiped = true
            dog.hasBeenLiked = true
            setTimeout(()=>{
                dog = getNewDog()
                render()
                dog.hasBeenSwiped = false
                dog.hasBeenLiked = false
            }, 1500)
        }
        else if (e.target.id === "accept-btn") {
            document.getElementById("badge-like").style.display = "block"
            dog.hasBeenLiked = true
            dog.hasBeenSwiped = true
            setTimeout(()=>{
                dog = getNewDog()
                render()
                dog.hasBeenLiked = false
                dog.hasBeenSwiped = false
            }, 1500)
        } 
    } 
})

render()