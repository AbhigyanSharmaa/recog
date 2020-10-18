const btn= document.querySelector('.talk');
const content= document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.onstart = function () {
    console.log('speech recognition is ready to hear you');

};

recognition.onresult = function(event)
{
    
    const current= event.resultIndex;

    var transcript= event.results[current][0].transcript;
     
    content.textContent=transcript;
    document.getElementById("e").value= transcript;
    
};

btn.addEventListener('click', () => {
    recognition.start();


});

