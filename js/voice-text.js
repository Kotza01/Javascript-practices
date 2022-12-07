let w = window,
    d = document;
const synth = w.speechSynthesis;
export default function voiceText($voiceText, $voiceOption, $voiceButton) {     
    
    let speakerUth = new SpeechSynthesisUtterance();
    
    let voice = [];
    w.addEventListener("DOMContentLoaded", (e) => {
        
        
        synth.addEventListener("voiceschanged", (e)=>{
            voice =  synth.getVoices();
            
            voice.forEach((el, i) => {
                let option = d.createElement("option");
                option.value = i;
                option.textContent = el.name;
                $voiceOption.appendChild(option);
            });
        });
    });

    $voiceOption.addEventListener("change", (e)=> {
        speakerUth.voice = voice[$voiceOption.value]; 
    });

    $voiceButton.addEventListener("click", (e) => {
        speakerUth.text = $voiceText.value;
        synth.speak(speakerUth);
    });
}