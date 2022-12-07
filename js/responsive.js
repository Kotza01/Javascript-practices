let d = document;

export default function responsiveMq(resizeParameter) {
    let breackpoint = window.matchMedia(resizeParameter.query);

    breackpoint.addEventListener('change', (e)=> {render(e, resizeParameter)});

    render(breackpoint, resizeParameter);

}

function render(e, resizeParameter){
    if(e.matches) {
        d.getElementById(resizeParameter.renderMovil.section).innerHTML = resizeParameter.renderMovil.content;
        d.getElementById(resizeParameter.renderDesktop.section).innerHTML = '';
    } else {
        d.getElementById(resizeParameter.renderMovil.section).innerHTML = '';
        d.getElementById(resizeParameter.renderDesktop.section).innerHTML = resizeParameter.renderDesktop.content;
    }
    
}

