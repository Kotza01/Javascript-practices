export default function keyPressMovement($ball, container){
    let d = document;
    let x = 0;
    let y = 0;
    d.addEventListener("keydown", (e) => {
        let limitBall = d.querySelector($ball).getBoundingClientRect();
        let limitStage = d.querySelector(container).getBoundingClientRect();

        if(e.altKey && e.key==="a") {
            
            alert("Que la que hay mi herma, yayayayjuuuuuuu");
        }

        if(e.altKey && e.key==="p") {
            
            prompt("Que la que causa", "HOlis");
        }

        
        if(e.key ==="ArrowLeft"){
            if(limitBall.left >= limitStage.left){
                e.preventDefault();
                x--;
                d.querySelector($ball).style = `transform : translate(${x * 15}px, ${y * 15}px)`;
            } 
        }
        if(e.key ==="ArrowRight"){
            if(limitBall.right <= limitStage.right){
                e.preventDefault();
                x++;
                d.querySelector($ball).style = `transform : translate(${x * 15}px, ${y * 15}px)`;
            }
            
        }

        if(e.key ==="ArrowUp"){
            if(limitBall.top >= limitStage.top){
                e.preventDefault();
                y--;
                d.querySelector($ball).style = `transform : translate(${x * 15}px, ${y * 15}px)`;
            }
        }

        if(e.key ==="ArrowDown"){
            if(limitBall.bottom <= limitStage.bottom){
                y++;
                e.preventDefault();
                d.querySelector($ball).style = `transform : translate(${x * 15}px, ${y * 15}px)`;
            }
        }
        
    });
}