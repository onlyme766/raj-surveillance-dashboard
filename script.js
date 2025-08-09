navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => document.getElementById('camera').srcObject = stream);

function startVoice() {
  const recognition = new webkitSpeechRecognition();
  recognition.onresult = e => {
    const cmd = e.results[0][0].transcript.toLowerCase();
    alert("Voice Command: " + cmd);
  };
  recognition.start();
}

document.getElementById('ascii').innerText = `
  ██████╗  █████╗      ██╗
  ██╔══██╗██╔══██╗     ██║
  ██████╔╝███████║     ██║
  ██╔═══╝ ██╔══██║██   ██║
  ██║     ██║  ██║╚█████╔╝
  ╚═╝     ╚═╝  ╚═╝ ╚════╝
`;
