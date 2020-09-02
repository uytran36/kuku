function SearchByVoice() {
  startDictation();
  var popup = document.getElementById("popupContent");
  var temp = document.getElementById("temp");
  if (temp.style.visibility == "visible") {
    temp.style.visibility = "hidden";
  } else {
    temp.style.visibility = "visible";
    temp.style.position = "fixed";
    temp.style.background = "black";
    temp.style.opacity = 0.6;
    temp.style.width = "100%";
    temp.style.height = "100%";
    temp.style.top = 0;
    temp.style.left = 0;
  }
  popup.classList.toggle("show");
}

function startDictation() {
  if (window.hasOwnProperty("webkitSpeechRecognition")) {
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function (e) {
      document.getElementById("transcript").value = e.results[0][0].transcript;
      recognition.stop();
      document.getElementById("labnol").submit();
      document.getElementById("transcript").value = e.results[0][0].transcript;
    };

    recognition.onerror = function (e) {
      recognition.stop();
    };
  }
}
