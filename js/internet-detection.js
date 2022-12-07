export default function internetDetection($div) {
    let n = navigator,
    w = window;

    const connected = ()=> {
        $div.innerHTML = `<h3>Internet connection recovered</h3>`;
        $div.classList.add('connected');

        const interval = setInterval(()=>{
            $div.style = 'opacity : 0';
            clearInterval(interval);
        }, 5000);

    }

    const disconnected = ()=> {
        $div.innerHTML = `<h3>Internet connection missed</h3>`;
        $div.classList.remove('connected');
        $div.style = 'opacity : 1';
    }

    w.addEventListener("online", connected);
    w.addEventListener("offline",disconnected );
}