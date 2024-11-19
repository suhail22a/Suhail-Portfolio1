import { Container } from "./styles";
import SuhailAhmad from "../../assets/SuhailAhmad.png";
import wordpress from "../../assets/wordpress.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Aboutcard from "../About/AboutCard";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        {/* Title: About Me */}
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>

        {/* Greeting Message */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there!<span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span> I'm Suhail Ahmad.
          </p>
        </ScrollAnimation>

        {/* Skills Overview */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I am a final year B.Tech Student skilled in MERN Development, Version Control, AWS Cloud, Java, and SQL.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            With a deep understanding of modern frameworks and tools, I excel in building responsive user interfaces, integrating APIs, managing databases, and deploying scalable applications.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <p>
            This portfolio reflects my journey, skills, and commitment to continuous learning. Whether you're here to explore my work or collaborate, I invite you to dive in and connect with me!
          </p>
        </ScrollAnimation>

        {/* Interests Section */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <br />
            My Area of <strong>Interest</strong>
          </h1>
          <Aboutcard />
        </ScrollAnimation>

        {/* Skills Overview */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <br />
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>

        {/* Icons of Skills */}
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={wordpress} alt="WordPress" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="TypeScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="HTML" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="CSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img
            src={SuhailAhmad}
            alt="Suhail Ahmad"
            style={{
              width: "400px", // Adjust width as needed
              height: "400px", // Adjust height as needed
              borderRadius: "50%",
              objectFit: "cover", // Ensures the image scales well inside the circle
            }}
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
