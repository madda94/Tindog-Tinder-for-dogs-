import dogs from `/data.js`

class DogProfile {
    constructor(data) {
        Object.assign(this, data)
    }
    dogProfileHtml = () => {
        const {name, avatar, age, bio} = this
        return `<img src="${avatar}" />
                <img src="/images/badge-like.png" id="badge-like" />
                <img src="/images/badge-nope.png" id="badge-nope" />
                <h1>${name}, ${age}</h1>
                <p>${bio}</p>`}
}

export default DogProfile