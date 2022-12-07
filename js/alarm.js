export default function alarm(alarmId, btnStartAlarm, btnStopAlarm){

    let d = document;
    
    const element = d.querySelector(alarmId);
    d.addEventListener("click", (e) => {
       
        
        if(e.target.getAttribute("data-name") ===btnStartAlarm){
           
           e.target.disabled =true;
           element.play();
        }

        if(e.target.getAttribute("data-name") ===btnStopAlarm){
            element.pause();
            element.currentTime = 0;
            d.querySelector(`[data-name= ${btnStartAlarm}]`).removeAttribute("disabled");    
        }
    });
}