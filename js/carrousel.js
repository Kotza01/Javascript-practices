export default function carrousel($btnCarrouselPrev, $btnCarrouselNext, $sliderCarrousel) {
    let d = document;

    d.addEventListener("click", (e) => {

        if(e.target === $btnCarrouselNext) {
            let itemActive = getActiveElement($sliderCarrousel);
            $sliderCarrousel.children[itemActive].classList.remove("active");
            
            if(itemActive===($sliderCarrousel.children.length-1)){
                $sliderCarrousel.children[0].classList.add("active");
            } else {
                $sliderCarrousel.children[itemActive+1].classList.add("active");
            }
        }

        if(e.target === $btnCarrouselPrev) {
            let itemActive = getActiveElement($sliderCarrousel);
            $sliderCarrousel.children[itemActive].classList.remove("active");
            if(itemActive===(0)){
                $sliderCarrousel.children[$sliderCarrousel.children.length-1].classList.add("active");
            } else {
                $sliderCarrousel.children[itemActive-1].classList.add("active");
            }
        }
    })
}

function getActiveElement($slider) {

    for(let i=0; i<$slider.children.length; i++){
        let item = $slider.children[i];
        
        if(item.classList.contains("active")){
            return i;
        }
    }
}