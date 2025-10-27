import FeaturedWorksCard from "./FeaturedWorksCard";
import featuredData from "../FeaturedWorksData/featuredData";

export default function Featured() {

	
	return(
		<section id="works" className="container-fluid">
			<div id="works-container" className="row d-flex justify-content-center pt-0 pt-md-5 pt-lg-5 pb-5 mx-0 mx-md-0 mx-lg-3 text-center">
				<h1 id="works-title" className="mt-3 mt-md-0 py-3 py-md-0 ">PROJECTS</h1>
				<FeaturedWorksCard data={featuredData} />
			</div>
		</section>
	) 
}