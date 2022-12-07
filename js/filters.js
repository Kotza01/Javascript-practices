export default function filters($cards, $inputSearch) {
    let d = document;

    d.addEventListener('keyup', (e)=>{
        
        if(e.target === $inputSearch) {
            for(let i =0; i<$cards.children.length; i++) {
                let figcaption = $cards.children[i].children[1].textContent;
                figcaption.toLowerCase().includes(e.target.value.toLowerCase()) ? $cards.children[i].classList.remove("filter") : $cards.children[i].classList.add("filter")
            }
        }
    })
}