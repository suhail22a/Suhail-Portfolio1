import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import { Flip } from "react-awesome-reveal";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* Web-Editor Project */}
        <Flip triggerOnce>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/suhail22a/Web-Editor" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://web-editor-a1zz.vercel.app/web" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Web-Editor</h3>
              <p>
              Web-Editor is an advanced, cloud-based platform that streamlines content creation and editing, providing a user-friendly interface and real-time collaboration features. Designed for seamless web-based workflows, it empowers teams to collaborate efficiently, edit content effortlessly, and enhance productivity across various digital projects.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Vite</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </Flip>

        {/* Invoice Generator */}
        <Flip triggerOnce>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/suhail22a/Invoice-Generator" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Invoice Generator</h3>
              <p>
              Invoice Generator is an intuitive, automated platform that simplifies the creation and management of professional invoices. With customizable templates and real-time calculations, it ensures accuracy and efficiency, allowing businesses to generate, track, and manage invoices seamlessly, all within a user-friendly interface.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </Flip>

        {/* Text 2 Handwriting */}
        <Flip triggerOnce>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/suhail22a/HandWritting" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://hand-writting-three.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Text 2 Handwriting</h3>
              <p>
              Text to Handwriting is an innovative tool that effortlessly transforms typed text into realistic, personalized handwritten content. By mimicking natural cursive writing styles, it adds a personal and creative touch to digital text, making it perfect for crafting custom notes, messages, or even professional documents with the authenticity of handwritten communication.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Three.js</li>
                <li>Node.js</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </Flip>

        {/* HealthHaven */}
        <Flip triggerOnce>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/suhail22a/HealthHaven" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>HealthHaven</h3>
              <p>
              HealthHaven is an intuitive medical appointment scheduling platform designed to simplify healthcare management. It allows patients to easily book, reschedule, and track appointments with their healthcare providers, while offering seamless integration for doctors and clinics to manage their schedules efficiently, ensuring a hassle-free experience for both patients and medical professionals
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </Flip>

        {/* SMS-Bomber */}
        <Flip triggerOnce>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/suhail22a/SMS-Bomber" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://sms-bomber-gamma.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SMS-Bomber</h3>
              <p>
              SMS-Bomber is a tool designed to automate the process of sending multiple SMS messages in a short period. While it showcases the power of bulk messaging, it is important to note that such tools should be used responsibly and in compliance with applicable regulations to prevent misuse or spamming.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>API Integration</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </Flip>

        {/* LMS */}
        <Flip triggerOnce>
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/suhail22a/LMS" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>LMS</h3>
              <p>
              SMS-Bomber is a tool designed to automate the process of sending multiple SMS messages in a short period. While it showcases the power of bulk messaging, it is important to note that such tools should be used responsibly and in compliance with applicable regulations to prevent misuse or spamming.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </Flip>
      </div>
      <br />
      <br />
      <br />
    </Container>
  );
}
