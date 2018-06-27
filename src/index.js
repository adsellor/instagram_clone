import { imageData } from './module.js'

const mappedImages = imageData.images.map((index) => index) // Google mdn Array.prototype.map
// Create a new <img> element for each member of array, return <img> element with the src="array[index]"
// Additional: change the html with the new <img src="array[index]"
//

function sortImages(array) {
    let newArray = array.map((element) => {
        let image = document.createElement("img")
        let attr = document.createAttribute('src')
        attr.value = element
        let wrapper = document.getElementById('image-wrapper')
        image.setAttributeNode(attr)
        //wrapper.appendChild(image)
        console.log(wrapper)
        return image
    })
}

console.log(sortImages(imageData.images))
