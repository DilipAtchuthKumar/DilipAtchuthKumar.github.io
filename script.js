const terminalBody = document.getElementById("terminalBody");
const terminalInput = document.getElementById("terminalInput");

function loadHomeScreen() {
  terminalBody.innerHTML = `
    <pre class="banner">
██████╗ ██╗██╗     ██╗██████╗     ██╗  ██╗██╗   ██╗███╗   ███╗ █████╗ ██████╗ 
██╔══██╗██║██║     ██║██╔══██╗    ██║ ██╔╝██║   ██║████╗ ████║██╔══██╗██╔══██╗
██║  ██║██║██║     ██║██████╔╝    █████╔╝ ██║   ██║██╔████╔██║███████║██████╔╝
██║  ██║██║██║     ██║██╔═══╝     ██╔═██╗ ██║   ██║██║╚██╔╝██║██╔══██║██╔══██╗
██████╔╝██║███████╗██║██║         ██║  ██╗╚██████╔╝██║ ╚═╝ ██║██║  ██║██║  ██║
╚═════╝ ╚═╝╚══════╝╚═╝╚═╝         ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
          Securing the Future by Uncovering Vulnerabilities Today
</pre>
    <p class="banner1">
      <span class="prompt-symbol">┌──(</span>
      <span class="user">Dilip_Kumar</span>
      <span class="at-symbol">㉿</span>
      <span class="system">Anonymous</span>
      <span class="prompt-symbol">)-[~/</span>
      <span class="directory">Portfolio</span>
      <span class="prompt-symbol">]</span>
    </p>
    <p class="banner1">
      <span class="prompt-symbol">└─$</span>
      <span class="cursor">█</span> 
      <span class="dev-message">Developed by <a href="https://www.linkedin.com/in/dilip-atchuth-kumar-pulamarasetty/" target="_blank">Dilip Atchuth Kumar Pulamarasetty</a>🧑🏼‍💻</span> 
    </p>

    <p>Connect with me:</p>
<p>
  <img src="/src/logos/linkedinn.png" alt="LinkedIn" width="16" style="vertical-align: middle;"> 
  <a href="https://www.linkedin.com/in/dilip-atchuth-kumar-pulamarasetty/" target="_blank">LinkedIn</a>
</p>
<p>
  <img src="/src/logos/githubb.png" alt="GitHub" width="16" style="vertical-align: middle;"> 
  <a href="https://github.com/DilipAtchuthKumar" target="_blank">GitHub</a>
</p>
<p>
  <img src="/src/logos/Xx.png" alt="X" width="16" style="vertical-align: middle;"> 
  <a href="https://x.com/Dilip_InfoSec" target="_blank">X</a>
</p>
<p>
  <img src="/src/logos/instagramm.png" alt="Instagram" width="16" style="vertical-align: middle;"> 
  <a href="https://www.instagram.com/dilipkumarpulamarasetty/" target="_blank">Instagram</a>
</p>
<p>
  <img src="/src/logos/mediumm.png" alt="Medium" width="16" style="vertical-align: middle;"> 
  <a href="https://medium.com/@dilipatchuthkumarpulamarasetty" target="_blank">Medium</a>
</p>


    <p>Type <span class="command"><strong>help</strong></span> to see available commands.</p>
  `;
}

// Command responses
function processCommand(command) {
  switch (command.toLowerCase()) {
    case "help":
      terminalBody.innerHTML += `
<p>Available commands:</p>
<ul class="command-list">
  <li><span class="command">about</span> or <span class="command">abt</span> — About me</li>
  <li><span class="command">skills</span> or <span class="command">sk</span> — My skills</li>
  <li><span class="command">experience</span> or <span class="command">exp</span> — My work experience</li>
  <li><span class="command">certifications</span> or <span class="command">cert</span> — My certifications</li>
  <li><span class="command">education</span> or <span class="command">edu</span> — My education background</li>
  <li><span class="command">projects</span> or <span class="command">pr</span> — My Projects</li>
  <li><span class="command">resume</span> or <span class="command">re</span> — View my resume</li>
  <li><span class="command">clear</span> or <span class="command">cls</span> — Clear the terminal (go to home screen)</li>
</ul>
  `;
      break;

    case "about":
    case "abt":
      terminalBody.innerHTML += `
        <div class="about-output">
          <p>I’m a passionate and driven final-year Cybersecurity undergraduate, specializing in offensive security tactics to simulate real-world cyber threats and strengthen digital defenses. My expertise lies in penetration testing frameworks🔍, social engineering techniques🎭, and exploit development💻, which I’ve honed through consistent hands-on practice and real-world scenarios.</p>
          <p>Over the years, I’ve actively engaged with a wide range of operating systems💻, network infrastructures🌐, and adversarial simulation exercises🛡️, equipping myself with the versatility needed in today’s fast-evolving threat landscape.</p>
          <p>I regularly participate in Capture The Flag (CTF) competitions🚀, leveraging them as a platform to refine my attack methodologies, bypass security controls, and develop advanced evasion techniques.</p>
          <p>Currently, I’m seeking exciting opportunities to apply my skills in Red Teaming operations, where I can uncover critical vulnerabilities, simulate sophisticated attacks, and help organizations fortify their security posture🔒.</p>
          <p>Let’s connect, collaborate, and work together to build a safer digital world.🚀</p>
        </div>
      `;
      break;

    case "skills":
    case "sk":
      terminalBody.innerHTML += `
          <div class="experience-output">
            <p>💻 <strong>Programming Languages:</strong></p>
            <p>   🐍 Python, 💻 C, 🌐 HTML/CSS, 📄 JavaScript, ☕ Java, 🔐 Bash, ⚙️ PowerShell</p>
            <br>

            <p>🛠️ <strong>Tools & Frameworks:</strong></p>
            <p>   ⚙️ Burp Suite, ⚡ Metasploit, 🔍 Nmap, 🐙 Git & GitHub, 🖥️ Wireshark, 💻 SQLMap, 🎯 Hydra, 🦠 Mimikatz, 🔒 JohnTheRipper, 📜 Gobuster, 📦 Netcat, 🛠️ BloodHound, 📊 Maltego, 🐉 Dirb/Dirbuster, 📦 Impacket, 📟 Responder, 📈 Nessus</p>
            <br>

            <p>🛡️ <strong>Cybersecurity Domains:</strong></p>
            <p>   🛠️ Web Application Pentesting, 📡 Network Security, 🚀 Red Teaming, 🔓 Bug Bounty, 🕵️ Social Engineering, 📊 OSINT (Open-Source Intelligence), 🔄 Privilege Escalation, 📂 Active Directory Attacks, 🎭 Phishing Simulation, 🗝️ Password Cracking, 🔧 Post-Exploitation Techniques</p>
            <br>
          </div>
        `;
      break;

    case "experience":
    case "exp":
      terminalBody.innerHTML += `
        <p><span class="highlight">Cybersecurity Intern — GreyTheta Information Security Pvt Ltd</span></p>
        <p><span class="subtext">Role: Cybersecurity Intern</span></p>
        <p><span class="subtext">Time Period: Junuary 2025 - Present</span></p>
        <p><span class="subtext">Description:</span></p>
        <ul>
          <li>Currently undergoing intensive training in various areas of cybersecurity, including offensive and defensive security, GRC (Governance, Risk, and Compliance), and industry compliance standards such as SOC 2, PCI DSS, and HIPAA. 
          Gaining hands-on experience with Windows Registry tweaks, basic Linux commands, and real-world applications of cybersecurity frameworks. Actively learning about bug bounty programs, vulnerability disclosure practices (VDP/RVDP), and the operational workflows of both public and private security programs. 
          Exposure to audit processes, NDA-protected engagements, and the evolving landscape of Web 2.0 and Web 3.0 security.</li>
          <li>Network Penetration Testing and Red Teaming exercises for internal security improvements</li>
        </ul>
        
        <p><span class="highlight">Cybersecurity Intern(VAPT) — Supraja Technologies</span></p>
        <p><span class="subtext">Role: Cybersecurity Intern(VAPT)</span></p>
        <p><span class="subtext">Time Period: May 2024 - Aug 2024</span></p>
        <p><span class="subtext">Description:</span></p>
        <ul>
          <li> Conducted in-depth Web Application Vulnerability Assessment & Penetration Testing, focusing on identifying and mitigating security risks.</li>
          <li> Contributed to a project on USB Physical Security, employing advanced cybersecurity measures to protect systems from external threats.</li>
          <li> Acquired hands-on experience and sharpened practical skills in web application security, adapting to dynamic cybersecurity challenges.</li>
          <li>Explore the project in detail here: <a href="https://github.com/DilipAtchuthKumar/USB-Physical-Security" target="_blank" class="link">Check it out</a></li>
        </ul>
        <p><span class="subtext">Achievements:</span></p>
        <ul>
          <li>Received a <a href="https://drive.google.com/file/d/15z46ZDnetfU4QZotSYJ5yIRf4lYNix3s/view?usp=sharing" target="_blank" class="link">recommendation letter</a> for exceptional performance and dedication during the internship.</li>
        </ul>
        `;
      break;

    case "certifications":
    case "cert":
      terminalBody.innerHTML += `
          <table class="custom-table">
            <thead>
              <tr>
                <th>Certificate Name</th>
                <th>Company</th>
                <th>Issued Date</th>
                <th>Soft Copy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CEH - Certified Ethical Hacker</td>
                <td>EC-Council</td>
                <td>February 2025</td>
                <td><a href="https://drive.google.com/file/d/1TYo463cxkLg9cePSgMHMxU5c4FLlj_GQ/view?usp=sharing" target="_blank" class="table-link">View</a></td>
              </tr>
              <tr>
                <td>GCSP - Google Cybersecurity Professional</td>
                <td>Google</td>
                <td>May 2024</td>
                <td><a href="https://coursera.org/share/7d9aa1db541bdbb7bd2f7638aebaf730" target="_blank" class="table-link">View</a></td>
              </tr>
              <tr>
                <td>EH - Ethical Hacker</td>
                <td>Cisco Networking Academy</td>
                <td>March 2024</td>
                <td><a href="https://www.credly.com/badges/a08c7064-e3e4-40e1-816f-c0c57b8dffcd/public_url" target="_blank" class="table-link">View</a></td>
              </tr>
            </tbody>
          </table>
        `;
      break;

    case "education":
    case "edu":
      terminalBody.innerHTML += `
            <div class="experience-output">
              <h4>📚 <strong>Undergraduation:</strong></h4>
              <p>   📍 <strong>Institute:</strong> Raghu Engineering College</p>
              <p>   🏛️ <strong>University:</strong> Jawaharlal Nehru Technological University, Kakinada (JNTUK)</p>
              <p>   🎓 <strong>Degree:</strong> B.Tech in Computer Science and Engineering (Cyber Security)</p>
              <p>   📆 <strong>Timeline:</strong> 2023 - Pursuing</p>
              <br>
        
              <h4>📚 <strong>Higher Secondary:</strong></h4>
              <p>   📍 <strong>Institute:</strong> Behara Polytechnic College</p>
              <p>   🏛️ <strong>Board:</strong> State Board of Technical Education and Training, Andhra Pradesh</p>
              <p>   🎓 <strong>Degree:</strong> Diploma in Computer Engineering</p>
              <p>   📆 <strong>Timeline:</strong> 2020 - 2023</p>
              <br>
        
              <h4>📚 <strong>Secondary Education:</strong></h4>
              <p>   📍 <strong>Institute:</strong> Z P High School</p>
              <p>   🏛️ <strong>Board:</strong> Board of Secondary Education, Andhra Pradesh</p>
              <p>   🎓 <strong>Qualification:</strong> Secondary School Certificate (SSC)</p>
              <p>   📆 <strong>Timeline:</strong> 2019 - 2020</p>
              <br>
            </div>
          `;
      break;

    case "resume":
    case "re":
      terminalBody.innerHTML += `
          <div class="resume-output">
            <p>Hey there! 👋 You can download/view my latest resume from the link below:</p>
            <p>
              📄 <a href="https://drive.google.com/file/d/1kO-4RVGvqGupB-D9OLvrXByJMxak5ZeC/view?usp=sharing" target="_blank" class="resume-link">Click here to view my Resume</a>
            </p>
          </div>
        `;
      break;

    case "projects":
    case "pr":
      terminalBody.innerHTML += `
      <div class="command-output">
      <p><strong>📂 Projects:</strong></p>

      <div class="section-entry">
        <p>📌 <strong>Project Name:</strong> USB Physical Security</p>
        <p>🛠️ <strong>Tech Stack:</strong> Python, Tkinter, Windows Registry, HTML</p>
        <p>📝 <strong>Description:</strong> A user-friendly, GUI-based security tool designed to enhance system security by enabling or disabling USB ports with password-protected access. 
        The application features customizable background themes for an improved user experience and includes an integrated project information viewer for easy access to tool documentation and details. 
        Built with a focus on physical endpoint protection, this tool helps prevent unauthorized USB device usage, reducing risks like data theft and malware injection.</p>
        <p>🔗 <strong>GitHub:</strong> <a href="https://github.com/DilipAtchuthKumar/USB-Physical-Security" target="_blank">View Repository</a></p>
      </div>
      </div>`;
      break;

    case "clear":
    case "cls":
      loadHomeScreen();
      break;

    default:
      terminalBody.innerHTML += `
      <div class="about-output">
        <p>⚠️ Command not found: ${command} <br> Type <strong>'help'</strong> to see available commands.</p>
      </div>
      `;
  }

  terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Event listener
terminalInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = terminalInput.value.trim();
    if (command !== "") {
      terminalBody.innerHTML += `<p><span class="prompt-symbol">┌──(</span><span class="user">dilip</span><span class="at-symbol">㉿</span><span class="system">portfolio</span><span class="prompt-symbol">)-[~]</span></p><p><span class="prompt-symbol">└─$</span> ${command}</p>`;
      processCommand(command);
      terminalInput.value = "";
    }
  }
});

// Load initial home screen
loadHomeScreen();
