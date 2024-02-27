import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Maha Vishnu </a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/maha-vishnu-s-4a2760268" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/vishnu-del" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Footer