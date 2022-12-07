let d = document,
    w = window;

export default function autoPlayVideo($videoPreview, $allVideos) {


    const cb = (entries) => {
        
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
            d.addEventListener("visibilitychange", () => {
                if (d.visibilityState === 'visible') {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
              });

        });
    }
    let observer = new IntersectionObserver(cb, {thresholds: .5})

    for(let i =0 ; i<$allVideos.length ; i++){
        $allVideos[i].addEventListener("mouseenter", (e) => {
            e.target.classList.add("play-video");
            e.target.play();
        })
        $allVideos[i].addEventListener("mouseleave", (e) => {
            e.target.classList.remove("play-video");
            e.target.pause();
        })
    }
    

    observer.observe($videoPreview);
}