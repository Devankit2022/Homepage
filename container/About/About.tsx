import Image from "next/image"

import images from "@/constants"
import "./About.scss"

const About = () => {
	return (
		<div className="about">
			<div className="about_rectangle1">About</div>
			<p className="about_p1">
				We innovate, create, and elevate your digital presence.
			</p>
			<p className="about_p2">
				Growing your brand value is the goal, as we build new strategies for your
				business.
			</p>
			<div className="about_container about1">
				<Image className="about_image" src={images.about1} alt="about1" />
				<p className="about_container--p1">Design</p>
				<p className="about_container--p2">
					At 404, we believe that good design is the cornerstone of effective
					digital solutions.
				</p>
			</div>
			<div className="about_container about2">
				<Image className="about_image" src={images.about2} alt="about2" />
				<p className="about_container--p1">Marketing</p>
				<p className="about_container--p2">
					At 404, we believe that good design is the cornerstone of effective
					digital solutions.
				</p>
			</div>
			<div className="about_container about3">
				<Image className="about_image" src={images.about3} alt="about3" />
				<p className="about_container--p1">Development</p>
				<p className="about_container--p2">
					Our development approach is rooted in agility and adaptability. Using
					cutting-edge technologies, we transform our designs into robust,
					scalable, and efficient solutions and built to the highest standards
					of quality and security with custom precision.
				</p>
			</div>
			<div className="about_container about4">
				<Image className="about_image" src={images.about4} alt="about4" />
				<p className="about_container--p1">Promotion</p>
				<p className="about_container--p2">
					At 404, we believe that good design is the cornerstone of effective
					digital solutions.
				</p>
			</div>
			<div className="about_container about5">
				<Image className="about_image" src={images.about5} alt="about5" />
				<p className="about_container--p1">Bot Creation</p>
				<p className="about_container--p2">
					At 404, we believe that good design is the cornerstone of effective
					digital solutions.
				</p>
			</div>
			<div className="about_line1"></div>
			<div className="about_line2"></div>
			<div className="about_line3"></div>
		</div>
	)
}
export default About
