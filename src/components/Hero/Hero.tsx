import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
import { ImPointRight } from "react-icons/im";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        {/* Greeting */}
        <ScrollAnimation animateIn="fadeInUp">
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>

        {/* Name */}
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Suhail Ahmad</h1>
        </ScrollAnimation>

        <br />

        {/* Interests */}
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <b className="purple ab">My field of Interest's are:&nbsp;</b>
          <br />
          <br />
          <ul>
            <li className="about-activity">
              <ImPointRight />
              Full stack development
              <br />
              <ImPointRight />
              DevOps
              <br />
              <ImPointRight />
              Problem Solving
              <br />
              <ImPointRight />
              Android Development
              <br />
              <ImPointRight />
              SQL and NoSQL databases
              <br />
              <ImPointRight />
              Data analysis
            </li>
          </ul>
        </ScrollAnimation>

        <br />
        <br />
        <br />

        {/* Contact Button */}
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>

        {/* Social Media Links */}
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/suhailahmad786/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/suhail22a/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B918707219308&text=Hello+Suhail"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a
              href="https://t.me/tech_sam_223"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>

      {/* Hero Image */}
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
