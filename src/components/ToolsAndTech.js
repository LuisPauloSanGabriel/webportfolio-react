import mongoDB from "../assets/mongo.png";
import express from "../assets/express.png";
import react from "../assets/React.png";
import nodeJS from "../assets/node.png";
import javaScript from "../assets/JavaScript.png";
import html from "../assets/HTML.png";
import css from "../assets/CSS.png";
import bootstrap from "../assets/Bootstrap.png";
import git from "../assets/Git.png";
import figma from "../assets/Figma.png";
import vsCode from "../assets/vs.png";
import sublime from "../assets/sublime.png";

export default function ToolsAndTech() {

	return (
	<>
		<section id="ToolsAndTechStack">
			<h1 id="TechStack" className="my-5 text-center">Tech Stack and Tools</h1>
			<div className="marquee-container">
				<div className="marquee">
					<div className="marquee-group">
						<img src={mongoDB} alt="MongoDB" />
						<img src={express} alt="Express" />
						<img src={react} alt="React JS" />
						<img src={nodeJS} alt="Node JS" />
						<img src={javaScript} alt="JavaScript" />
						<img src={html} alt="HTML" />
						<img src={css} alt="CSS" />
						<img src={bootstrap} alt="Boostrap" />
						<img src={git} alt="Git" />
						<img src={figma} alt="Figma"  />
						<img src={vsCode} alt="VS" />
						<img src={sublime} alt="Sublime" />
					</div>

					<div className="marquee-group">
						<img src={mongoDB} alt="MongoDB" />
						<img src={express} alt="Express" />
						<img src={react} alt="React JS" />
						<img src={nodeJS} alt="Node JS" />
						<img src={javaScript} alt="JavaScript" />
						<img src={html} alt="HTML" />
						<img src={css} alt="CSS" />
						<img src={bootstrap} alt="Boostrap" />
						<img src={git} alt="Git" />
						<img src={figma} alt="Figma"  />
						<img src={vsCode} alt="VS"/>
						<img src={sublime} alt="Sublime" />
					</div>
				</div>
			</div>
		</section>
	</>
		
	)
}