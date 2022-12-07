export default function regressiveCount ($regressiveCount) {
    let $regressive = document.getElementById($regressiveCount);
    
    
    
    setInterval(()=> {
        let dateToNextYear = getDaysToNextYear();
        let days = Math.ceil(dateToNextYear/ (1000*60*60*24));
        let hours = Math.ceil(dateToNextYear % (1000*60*60*24) / (1000*60*60));
        let minute = Math.ceil(dateToNextYear % (1000*60*60) / (1000*60));
        let second = Math.ceil(dateToNextYear % (1000*60) / 1000);
        let dateInfo = `Days ${days} : Hours ${hours} : Minutes ${minute} : Seconds ${second} to Next Year`;
        $regressive.textContent = dateInfo;

    },1000);

}

function getDaysToNextYear() {
    let today = new Date();
    let nextYear = new Date(today.getFullYear()+1, 0,1);
    let daysToNextYear = Math.floor(nextYear.getTime() - today.getTime());
    let dateToNextYear = new Date(daysToNextYear);

    return dateToNextYear.getTime();
}
