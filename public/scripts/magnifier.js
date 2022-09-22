// console.dir(document.querySelector(".main-image-container img"))

const imgContElm = document.querySelector(".main-image-container")
const imgElm = document.querySelector(".main-image-container img")
const productListElm = document.querySelector(".product-list")

{/* percentage of zoom */ }
const Zoom = 300

{/* Event Mouse enter */ }
imgContElm.addEventListener('mouseenter', () => {
    console.log("Mouse Enter")
    imgElm.style.width = Zoom + '%';
})

{/* Event Mouse leave */ }
imgContElm.addEventListener('mouseleave', () => {
    console.log("Mouse Leave")
    imgElm.style.width = '100%';
    imgElm.style.top = '0';
    imgElm.style.left = '0';
})

{/* Event mouse move */ }
{/* change position of the big image, depends on the position of the cursor in that image container */ }
imgContElm.addEventListener('mousemove', (mouseEvent) => {
    console.log("Mouse Move")
    let obj = imgContElm;
    let obj_left = 0;
    let obj_top = 0;
    let xpos;
    let ypos;

    while (obj.offsetParent) {
        obj_left += obj.offsetLeft;
        obj_top += obj.offsetTop;
        obj = obj.offsetParent;
    }

    if (mouseEvent) {
        // firefox
        xpos = mouseEvent.pageX;
        ypos = mouseEvent.pageY;
    } else {
        //IE
        xpos = window.event.x + document.body.scrollLeft - 2;
        ypos = window.event.y + document.body.scrollTop - 2;
    }

    xpos -= obj_left;
    ypos -= obj_top;

    const imgWidth = imgElm.clientWidth;
    const imgHeight = imgElm.clientHeight;

    imgElm.style.top = -(((imgHeight - this.clientHeight) * ypos) / this.clientHeight) + 'px';
    imgElm.style.left = -(((imgWidth - this.clientWidth) * xpos) / this.clientWidth) + 'px';
})

// Array.from(productListElm.childern).forEach((productElm, i, list) => {
//     productElm.addEbentListener('click', () => {
//         const newSrc = productElm.querySelector('Image').src
//         imgElm.src = newSrc
//         list.forEach(prod => prod.classList.remove('active'))
//         productElm.classList.add('acive')
//     })
// })

{/* change heigth of the image container */ }
function changeHeight() {
    imgContElm.style.height = imgContElm.clientWidth + 'px';
}
changeHeight()
// changeHeight
window.addEventListener('resize', changeHeight)