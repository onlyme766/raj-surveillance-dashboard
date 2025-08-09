<<<<<<< HEAD
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
=======
// Voice narration
const msg = new SpeechSynthesisUtterance("RAJ Surveillance Activated. You are being watched.");
speechSynthesis.speak(msg);

// Camera feed
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => document.getElementById('cam').srcObject = stream)
  .catch(err => console.log("Camera access denied"));

// ASCII logs
const terminal = document.getElementById('terminal');
setInterval(() => {
  terminal.textContent += "[+] Scanning ports...\n[+] Injecting payload...\n";
}, 3000);

>>>>>>> 6b0edac (Initial commit: RAJ Surveillance Dashboard)
