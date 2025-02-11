import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="first">
        <h3>Personal Portfolio</h3>
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
      <div className="second">
        <h3>Quick Links</h3>
        <div className="links">
          <a href="#first-section">
            &rarr; <span>Home</span>
          </a>
          <a href="#second-section">
            &rarr; <span>About Me</span>
          </a>
          <a href="#third-section">
            &rarr; <span>Skills</span>
          </a>
          <a href="#forth-section">
            &rarr; <span>Testimonals</span>
          </a>
          <a href="#fifth-section">
            &rarr; <span>Projects</span>
          </a>
          <a href="#sixth-section">
            &rarr; <span>Services</span>
          </a>
          <a href="#seventh-section">
            &rarr; <span>Contact</span>
          </a>
        </div>
      </div>
      <div className="third">
        <h3>Get In Touch</h3>
        <div className="links">
          <a href="">
            <div>
              <FaPhoneAlt />
            </div>
            <div>
              0310-1459167 <br /> <span>Call us</span>
            </div>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            target="_blank"
          >
            <div>
              <FaEnvelope />
            </div>
            <div>
              Email Address <br />
              <span>imunazaizhar@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
