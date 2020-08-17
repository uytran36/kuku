function SearchByVoice() {
    var popup = document.getElementById("popupContent");
    var backgr = document.getElementById("ResultFound");
    if (backgr.style.opacity == 0.2)
        backgr.style.opacity = 1;
    else
        backgr.style.opacity = 0.2;
    popup.classList.toggle("show");
}
function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function (e) {
            document.getElementById('transcript').value
                = e.results[0][0].transcript;
            recognition.stop();
            document.getElementById('labnol').submit();
        };

        recognition.onerror = function (e) {
            recognition.stop();
        }

    }
}

