export default function hamburguerMenu(panelBtn, menuSection, menuSectionA){

    let d = document;

    d.addEventListener("click", (e) =>{
    
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panelBtn).classList.toggle("is-active");
            d.querySelector(menuSection).classList.toggle("active-hamburger");
        }
    
        if(e.target.matches(menuSectionA)){
            d.querySelector(panelBtn).classList.toggle("is-active");
            d.querySelector(menuSection).classList.toggle("active-hamburger");
        }
    });
}
