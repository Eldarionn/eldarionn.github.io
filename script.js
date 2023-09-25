// JavaScript code
window.onload = () => {
    const myInput = document.getElementById("dummyKeyboard");
    myInput.onpaste = (e) => e.preventDefault();
  };
  
  const COMMANDS = {
    help: "Command matrix initialized. Accessible commands: <span class='code'>about</span>, <span class='code'>experience</span>, <span class='code'>education</span>, <span class='code'>skills</span>, <span class='code'>acknowledges</span>, <span class='code'>contact</span>, <span class='code'>resume</span>",
    about: "Initializing personal profile...<br> Welcome to my digital lair! I am <b>Kaushal Raj</b>, a <b>Certified Ethical Hacker</b> and a digital sentinel.<br>Currently stationed in the vast cyber frontier, I lead the charge in securing digital domains. My mission: protect and fortify the digital world against threats from the shadows.",
    skills: '<span class="code">Proficiencies:</span> Cybersecurity, Penetration Testing, Network Defense, Encryption, Digital Espionage, and more.<br>',
    education: "Cyber Academy, Uttrakhand India<br> Pursuing Bachelor of Technology (BTech) - Second Year<br>",
    experience: "Cyber Sentinel Apprentice<br> Currently honing my skills and defending the digital frontier against emerging threats.<br>",
    acknowledges: "Security Achievements: Breached firewalls, uncovered vulnerabilities, outsmarted intrusion systems, cracked codes, explored the deep web, remained anonymous.",
    contact: "For encrypted communications and collaboration, reach out through these secure channels:<br> <a href='https://telegram.org/eldariion' class='success link'>Telegram</a> - Secure Messaging<br><a href='https://www.instagram.com/kushh_14' class='success link'>Instagram</a> - Covert Visuals<br><a href='https://www.twitter.com/eldariion' class='success link'>Twitter</a> - Digital Signals<br>",
  };
  
  const userInput = document.getElementById("userInput");
  const terminalOutput = document.getElementById("terminalOutput");
  const inputfield = document.getElementById("dummyKeyboard");
  
  inputfield.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      let input = e.target.value;
      input = input.toLowerCase();
      if (input.length === 0) {
        return;
      }
      let output;
      output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
      if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">Unauthorized access attempt detected: <span class="code">${input}</span></div>`;
        console.log("Intrusion detected: Unauthorized command access");
      } else {
        output += COMMANDS[input];
      }
      terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
      e.target.value = "";
    }
  });
