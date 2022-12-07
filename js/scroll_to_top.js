export default function toTopListen($toTopButton) {
    document.addEventListener("scroll", (e) => {
        /**Se verifica que el scroll esté por debajo de 400px y no tenga la clase active */
        if(window.scrollY > 400 && !$toTopButton.classList.contains("to-top-active")) {
            /**en caso positivo se le agrega la clase para que aparezca */
            $toTopButton.classList.toggle("to-top-active");
        } else if (window.scrollY < 400 && $toTopButton.classList.contains("to-top-active")){
            /**En caso negativo se le quita la clase para que desaparezca */
            $toTopButton.classList.toggle("to-top-active");
        }
    });

    $toTopButton.addEventListener("click", (e)=> {
        window.scrollTo(0,0);
    })
}