const imagecontainer = document.querySelector(".image-container")
const sliders = document.querySelectorAll(".slider")
//console.log(sliders)

let counter = 0

const next = () => {
    if(counter < sliders.length - 1){
        counter++
    }
    else{
        counter = 0
        //console.log('hiii')
    }
    // clearInterval(timeout)
    imgaeslider()
}

const prev = () => {
    counter--
    imgaeslider()
    // clearInterval(timeout)
}

sliders.forEach((slider, index) => {
   // console.log(image);
    slider.style.left = `${index * 100}%`
    
})

const imgaeslider = () => {
    sliders.forEach((slider) => {
        slider.style.transform = `translateX(-${counter * 100}%)`
    })
    
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(next, 2000)
   // console.log(setInterval(next, 2000))
})

 