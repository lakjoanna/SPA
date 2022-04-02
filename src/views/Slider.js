
const images = []
images[0] = require("../assets/spa.jpg")
images[1] = require("../assets/spa2.jpg")
images[2] = require("../assets/spa3.jpg")
images[3] = require("../assets/spa4.jpg")

function slide() {
    const img = document.getElementById("sliderImg")
    if(img)
    {
        let x = images.indexOf(img.getAttribute("src"))
        if(x == images.length - 1)
            x = 0
        else 
            x = x + 1
        img.src = images[x]
    }
}

function Slider(){
    const div = `
        <div class="slider">
            <div id="silder-container">
                <img id="sliderImg" class="slide" src="src/assets/spa.jpg" />
            </div>
        </div>
    `
    
    setInterval(slide, 3000);
    return div
}

export default Slider