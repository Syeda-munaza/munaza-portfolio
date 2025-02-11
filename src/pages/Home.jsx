import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Typed from "typed.js";
import { IoMdDownload } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { FaWordpress } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState({});

  const handleShow = (index) => {
    setShow((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const projects = [
    { id: 1, img: "img-1.jpg", title: "Project # 1",Link:"E-commerce-Website/E-com.html "},
    { id: 2, img: "img-2.jpg", title: "Project # 2",Link:"E-learning/E-learning.html "},
    { id: 3, img: "img-3.jpg", title: "Project # 3",Link:"Calculator/calculator.html" },
    { id: 4, img: "img-4.jpg", title: "Project # 4",Link:"filter table/filter-table/Filter.html" },
    { id: 5, img: "img-5.jpg", title: "Project # 5",Link:"game-app/Game-app/Game.html" },
    { id: 6, img: "img-6.jpg", title: "Project # 6",Link:"login page/office.html" },
    { id: 7, img: "img-7.jpg", title: "Project # 7",Link:"password project/password-project/project.html" },
    { id: 8, img: "img-8.jpg", title: "Project # 8",Link:"chatgpt/chatgpt.html" },
  ];

  useEffect(() => {
    const typed = new Typed("#element", {
      strings: ["Web Developer", "FrontEnd Developer."],
      typeSpeed: 40,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="header-cont">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand logo" href="#">
              <img src="searching logo.jpg" alt="" />
              <span>Personal Portfolio</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 left">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#first-section"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#second-section">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#third-section">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#forth-section">
                    Testimonals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#fifth-section">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sixth-section">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#seventh-section">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="first-section" id="first-section">
        <div className="text">
          <h1>Munaza Izhar</h1>
          <p>
            I am a good <span style={{ color: "#e8f988" }} id="element"></span>
          </p>
          <a href="public/Syeda Munaza Frontend-Developer - Resume.pdf" className="resume" target="_blank">
            <IoMdDownload /> Download Resume
          </a>
          <div className="btn-container">

          <a
              href="https://www.linkedin.com/in/munaza-connect/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Syeda-munaza"
              target="_blank"
            >
              <BsGithub />
            </a>
            <a href="https://www.instagram.com/syeda_munaza123" target="_blank">
              <FaInstagram />
            </a>
            
            
            
           
          </div>
        </div>
        <div className="img">
          <img src="skills.jpeg" alt="" />
        </div>
      </div>
      <div className="second-section" id="second-section">
        <h1 style={{ color: "#e8f988", fontWeight: "500" }}>ABOUT ME</h1>
        <div className="main">
          <div className="img">
            <img src="skills.jpeg" alt="" />
          </div>
          <div className="text">
            <h3>
              My Name Is <span style={{ color: "#e8f988" }}>Munaza Izhar</span>
            </h3>
            <p>
            I am a passionate Front-End Developer with almost 7 Months of Experience. I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to implementation
            </p>
            <a href="#seventh-section">Contact Me</a>
          </div>
        </div>
      </div>
      <div className="third-section" id="third-section">
        <h1 style={{ color: "#e8f988", fontWeight: "500" }}>MY SKILLS</h1>
        <div className="main">
          <div className="container1">
            <div className="cont">
              <img src="html-5.png" alt="" />
            </div>
            <div className="cont">
              <img src="css-3.png" alt="" />
            </div>
            <div className="cont">
              <img src="js.png" alt="" />
            </div>
            <div className="cont">
              <img src="library.png" alt="" />
            </div>
            <div className="cont">
              <img src="nodejs.png" alt="" />
            </div>
            <div className="cont">
              <img src="leaf.png" alt="" />
            </div>
          </div>
          <div className="container2">
            <h1>7</h1>
            <h3>Months</h3>
            <h3>Experience</h3>
            <h3>Working</h3>
            <a href="public/Syeda Munaza Frontend-Developer - Resume.pdf" target="_blank">
              Download My Resume
            </a>
          </div>
        </div>
      </div>
      <div className="forth-section" id="forth-section">
        <h1 style={{ color: "#e8f988", fontWeight: "500" }}>TESTIMONALS</h1>
        <div className="testimonal-cont">
          <MDBContainer fluid className="py-5">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="10" xl="8" className="text-center">
                <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  veritatis totam voluptas nostrum quisquam eum porro a pariatur
                  veniam.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
              <MDBCol md="4" className="mb-4 mb-md-0">
                <MDBCard
                  className="test1"
                  style={{
                    backgroundColor: "#0b1023",
                    color: "#fff",
                    border: "2px solid #e8f988",
                  }}
                >
                  <MDBCardBody className="py-4 mt-2">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                        className="rounded-circle shadow-1-strong"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h5
                      className="font-weight-bold"
                      style={{ color: "#e8f988" }}
                    >
                      Teresa May
                    </h5>
                    <h6 className="font-weight-bold my-3">
                      Founder at ET Company
                    </h6>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center"
                    >
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon
                          fas
                          icon="star-half-alt"
                          size="sm"
                          color="info"
                        />
                      </li>
                    </MDBTypography>
                    <p className="mb-2" style={{ color: "#a7a6a6" }}>
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="mb-4 mb-md-0">
                <MDBCard
                  style={{
                    backgroundColor: "#0b1023",
                    color: "#fff",
                    border: "2px solid #e8f988",
                  }}
                >
                  <MDBCardBody className="py-4 mt-2">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                        className="rounded-circle shadow-1-strong"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h5
                      className="font-weight-bold"
                      style={{ color: "#e8f988" }}
                    >
                      Maggie McLoan
                    </h5>
                    <h6 className="font-weight-bold my-3">
                      Photographer at Studio LA
                    </h6>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center"
                    >
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                    </MDBTypography>
                    <p className="mb-2" style={{ color: "#a7a6a6" }}>
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Autem, totam debitis suscipit saepe sapiente magnam
                      officiis quaerat necessitatibus odio assumenda perferendis
                      labore laboriosam.
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="mb-4 mb-md-0">
                <MDBCard
                  style={{
                    backgroundColor: "#0b1023",
                    color: "#fff",
                    border: "2px solid #e8f988",
                  }}
                >
                  <MDBCardBody className="py-4 mt-2">
                    <div className="d-flex justify-content-center mb-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                        className="rounded-circle shadow-1-strong"
                        width="100"
                        height="100"
                      />
                    </div>
                    <h5
                      className="font-weight-bold"
                      style={{ color: "#e8f988" }}
                    >
                      Alexa Horwitz
                    </h5>
                    <h6 className="font-weight-bold my-3">
                      Front-end Developer in NY
                    </h6>
                    <MDBTypography
                      listUnStyled
                      className="d-flex justify-content-center"
                    >
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon fas icon="star" size="sm" color="info" />
                      </li>
                      <li>
                        <MDBIcon far icon="star" size="sm" color="info" />
                      </li>
                    </MDBTypography>
                    <p className="mb-2" style={{ color: "#a7a6a6" }}>
                      <MDBIcon fas icon="quote-left" className="pe-2" />
                      Cras sit amet nibh libero, in gravida nulla metus
                      scelerisque ante sollicitudin commodo cras purus odio,
                      vestibulum in tempus viverra turpis.
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
      <div className="fifth-section" id="fifth-section">
        <h1 style={{ color: "#e8f988", fontWeight: "500" }}>MY PROJECTS</h1>
        <div className="container1" style={{ width: "100%" }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="cont"
              onMouseEnter={() => handleShow(index)}
              onMouseLeave={() => handleShow(index)}
            >
              <img src={project.img} alt={project.title} />
              <div
                className="text"
                style={{ display: show[index] ? "block" : "none" }}
              >
                <h3>{project.title}</h3>
                <p>You can click the button below and open the project.</p>
                <a href={project.Link} target="blank">
                  <FaSquareArrowUpRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sixth-section" id="sixth-section">
        <h1 style={{ color: "#e8f988", fontWeight: "500" }}>MY SERVICES</h1>
        <div className="container1">
          <div className="cont">
            <span>
              <FontAwesomeIcon icon={faCode} />
            </span>
            <h3>Web Design</h3>
            <p>
            I specialize in creating responsive, user-friendly web designs using tools like Figma, Adobe XD, and front-end technologies such as HTML, CSS, JavaScript, ReactJS, and TailwindCSS. 
            </p>
          </div>
          <div className="cont">
            <span>
              <FontAwesomeIcon icon={faMobileScreen} />
            </span>
            <h3>Responsive Design</h3>
            <p>
            My designs focus on modern trends, accessibility, and SEO, ensuring fast loading times and an intuitive user experience. I work closely with clients and developers to create visually appealing and functional websites.
            </p>
          </div>
          <div className="cont">
            <span>
              <FaWordpress />
            </span>
            <h3>WordPress</h3>
            <p>
            I have experience working with WordPress, creating and customizing websites using its powerful features and plugins. I am proficient in using WordPress themes and page builders like Elementor to design responsive
            </p>
          </div>
        </div>
      </div>
      <div className="seventh-section" id="seventh-section">
        <h1 style={{ color: "#e8f988", fontWeight: "500" }}>CONTACT ME</h1>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="Your Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
