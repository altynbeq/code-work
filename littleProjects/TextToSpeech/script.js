const wrapper = document.querySelector('.wrapper'),
    section = wrapper.querySelector('section'),
    textInput = wrapper.querySelector('textarea'),
    voiceList = section.querySelector('select'),
    btnSpeech = wrapper.querySelector('button');


let synth = speechSynthesis;


function voices() {
    for (let voice of synth.getVoices()) {
        let option = `<option value="${voice.name}">${voice.name}</option>`
        voiceList.insertAdjacentHTML('beforeend', option);
    }
};


synth.addEventListener('voiceschanged', voices);


function speechToVoice(text) {
    let utternance = new SpeechSynthesisUtterance(text);
    synth.speak(utternance);
};

btnSpeech.addEventListener('click', e => {
    e.preventDefault();
    if (textInput.value !== "") {
        speechToVoice(textInput.value);
    }
});