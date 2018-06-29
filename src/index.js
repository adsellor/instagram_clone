import { imageData } from './module.js'

const mappedImages = imageData.images.map((index) => index) // Google mdn Array.prototype.map
// Create a new <img> element for each member of array, return <img> element with the src="array[index]"
// Additional: change the html with the new <img src="array[index]"
//
//

function cloneNode(node) {
    return node.cloneNode(true)
}

function sortImages(data) {
    let newArray = data.images.map((element) => {
        let image = document.createElement("img")
        let headerImage = document.createElement("img")
        let attr = document.createAttribute('src')
        let classAttr = document.createAttribute('class')
        classAttr.value = 'footerimage'
        attr.value = element
        image.setAttributeNode(attr)
        image.setAttributeNode(classAttr)

        //console.log(image)
        let root = document.getElementById('root')
        let clonedNode = cloneNode(root)
        for(let elem of clonedNode.children) {
            let attr = elem.getAttribute('id')
            if(attr == 'image-wrapper') {
                let imageElem = elem
                imageElem.appendChild(image)
                //console.log(imageElem)
            }
        }
        //console.log(clonedNode.children)
        document.body.appendChild(clonedNode)
    })
}

console.log(sortImages(imageData))

