import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { Row, Col } from 'react-bootstrap';
import Profile from '../assets/Profile.jpg';
import linkedIn from '../assets/Linkedin.png';
import facebook from '../assets/fb.png';
import instagram from '../assets/insta.png'
import github from '../assets/github.png'

export default function Landing() {

	const el = useRef(null);

	useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "I.T. Professional",
        "Licensed Professional Teacher"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

	return (

		<section id="landing" className="row d-flex justify-content-center align-items-center mb-3 mb-md-0 mt-5 mt-md-0">
			<figure className="col-12 col-sm-12 col-md-6 col-lg-5 text-center">
				<img src={Profile} alt="Luis Paulo San Gabriel" id="profile" className="img-fluid rounded-circle" />
			</figure>
			<figcaption className="col-12 col-sm-12 col-md-6 col-lg-7 text-center text-md-start text-lg-start pb-5 pt-md-5 pt-0">
				<h3 className="landing-info d-none d-md-none d-lg-block">Hi! I am</h3>
				<h1 className="landing-info">Luis Paulo San Gabriel</h1>
				<h2 id="position" className="landing-info">
					<span ref={el}></span>
				</h2>
				<p className="pt-3">Web Developer specializing in the MERN and MEVN stacks, with experience designing and delivering responsive applications. Licensed Professional Teacher with a strong background in IT instruction and mentorship, guiding students and junior developers in full-stack web development. Skilled in both technical problem-solving and collaborative teamwork, with a passion for building practical solutions and helping others succeed in tech.<a href="#" className="d-none"><i class="bi bi-arrow-right-circle ms-2"></i></a></p>
				
				<div id="socials" className="mt-5 d-flex flex-column flex-md-column flex-lg-row gap-3">
					<a className="custom-btn-primary text-white text-center shadow p-2 px-4 mx-auto mx-md-auto mx-lg-0 justify-content-center align-items-center hover-pop" href="https://drive.google.com/file/d/12zMIjdS5iZJyAycMmr44xE0V3EhqK5jL/view?usp=sharing">Download CV<i className="bi bi-file-earmark-arrow-down ms-2"></i></a>
					<div className="d-flex flex-row justify-content-center align-items-center ">
						<a href="https://github.com/LuisPauloSanGabriel" target="_blank"><img className="socmed me-3 mb-3 hover-pop" src={github} alt="Github" /></a>
						<a href="https://www.linkedin.com/in/luis-paulo-san-gabriel-4a0978318/" target="_blank"><img className="socmed me-3 mb-3 hover-pop" src={linkedIn} alt="LinkedIn" /></a>
						<a href="https://www.facebook.com/luis.paulo.san.gabriel.2024/" target="_blank"><img className="socmed me-3 mb-3 hover-pop" src={facebook} alt="Facebook" /></a>
						<a href=""><img className="socmed me-3 mb-3 hover-pop" src={instagram} alt="Instagram" /></a>
					</div>
				</div>
			</figcaption>
		</section>
	)
}