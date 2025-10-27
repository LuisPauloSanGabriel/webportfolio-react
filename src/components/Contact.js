import React from 'react';
import {useState, useEffect} from 'react';

import { Container, Row, Col } from 'react-bootstrap'
import emailjs from "emailjs-com";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Swal from 'sweetalert2'
import emailIcon from '../assets/email.png';
import linkedIn from '../assets/Linkedin.png';
import facebook from '../assets/fb.png';
import instagram from '../assets/insta.png'

export default function Contact() {

	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const [isActive, setIsActive] = useState(false);

	const [isLoading, setIsLoading] = useState(false);



	useEffect(() => {
		if((fullName !== "" && email !=="" && subject !== "" && message !== "") && (email.includes("@"))) {


			setIsActive(true)
		} else {

			setIsActive(false)
		}
	}, [fullName, email, subject, message]);

	const handleSubmit = (e) => {
		  e.preventDefault();
		  setIsLoading(true);

		  const templateParams = {
		    fullName,
		    email,
		    subject,
		    message,
		  };

		  emailjs.send(
		    "service_iwy326b",
		    "template_sgvip6r",
		    templateParams,
		    "fndAP33y_oWx6EmqN"
		  )
		  .then(() => {
		    Swal.fire({
		      title: "Message Sent!",
		      text: "Thank you for reaching out. I'll get back to you soon!",
		      icon: "success",
		      confirmButtonText: "OK",
		    });

		    setIsLoading(false);
		    setFullName("");
		    setEmail("");
		    setSubject("");
		    setMessage("");
		  })
		  .catch((error) => {
		    console.error("Error sending message:", error);
		    setIsLoading(false);

		    Swal.fire({
		      title: "Oops!",
		      text: "Something went wrong. Please try again.",
		      icon: "error",
		      confirmButtonText: "OK",
		    });
		  });
	};
	



	return(
	<>
		<section id="contact" className="Row d-flex flex-column flex-md-row justify-content-center align-items-center py-5 px-md-5 px-5 gap-5">
			<div id="contact-details" className="col-12 col-sm-12 col-md-6 col-lg-5 mb-5 mb-md-0">
				<h1 className="text-white">Let's Work <span className="highlight">Together</span></h1>
				<p className="text-white">I'm a Web Developer eager to learn, grow, and build real-world solutions. Whether you have an idea, need a collaborator, or just want to connect — I'd love to hear from you.
				</p>

				<div id="contact-information" className="d-none d-sm-flex d-md-flex mt-2 mt-md-5">
					<img className="contact-icons me-2" src={emailIcon} alt="email" />
					<div>
						<h5 className="m-0 highlight">Email</h5>
						<p className="m-0 text-white">lp.sangabriel@gmail.com</p>
					</div>
				</div>

				<div id="socials" className="pt-5">
						<h5 className="mb-3 highlight">Social Media Accounts</h5>
						<a href="https://www.linkedin.com/in/luis-paulo-san-gabriel-4a0978318/" target="_blank"><img className="socmed me-3 mb-3" src={linkedIn} alt="LinkedIn" /></a>
						<a href="https://www.facebook.com/luis.paulo.san.gabriel.2024/" target="_blank"><img className="socmed me-3 mb-3" src={facebook} alt="Facebook" /></a>
						<a href="" target="_blank"><img className="socmed me-3 mb-3" src={instagram} alt="Instagram" /></a>
				</div>
			</div>

			<div id="contact-form" className="col-12 col-sm-12 col-md-6 col-lg-5 mt-5 mt-md-0">

			<div id="form-container">
				 <h1 className="text-center text-white pb-3 pb-md-4">Contact <span className="highlight">Me!</span></h1>
				 <Form onSubmit={handleSubmit}>
				 	<div className="d-flex flex-column flex-md-row gap-3">
				 	  <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
				        <Form.Label className="text-white">Name</Form.Label>
				        <Form.Control
				        type="text"
				        placeholder="Enter your name"
				        required
				        value={fullName}
				        onChange={e => {setFullName(e.target.value)} }/>
				      </Form.Group>

				      <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
				        <Form.Label className="text-white">Email address</Form.Label>
				        <Form.Control
				        type="email"
				        placeholder="Enter email"
				        required
				        value={email}
				        onChange={e => {setEmail(e.target.value)} }/>
				      </Form.Group>
				    </div>

				    <Form.Group className="mb-3 w-100" controlId="formBasicSubject">
				        <Form.Label className="text-white">Subject</Form.Label>
				        <Form.Control
				        type="text"
				        placeholder="Enter Email Subject"
				        required
				        value={subject}
				        onChange={e => {setSubject(e.target.value)}}/>
				      </Form.Group>

				      <FloatingLabel
				        controlId="floatingTextarea"
				        label="Your message"
				        className="mb-3"
				      >
				        <Form.Control
				        as="textarea"
				        placeholder="Leave a message here"
				        className="custom-textarea"
				        required
				        value={message}
				        onChange={e => {setMessage(e.target.value)} } />
				      </FloatingLabel>

				      <Button id="submit" type="submit" disabled={isLoading || !isActive}>  
  						{isLoading ? "Sending..." : "Send Message"}  
  						<i class="bi bi-send-check-fill ms-2"></i>
					  </Button>

				  </Form>
				</div>
			</div>
		</section>
	</>
	)
}