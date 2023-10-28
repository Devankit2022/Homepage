import { Logo } from "@/components"
import "./Navbar.scss"

const Navbar = () => {
	return (
		<>
			<div className="nav">
				<Logo />
				<div className="nav-div">
					<ul>
						<li>About</li>
						<li>Services</li>
						<li>Process</li>
						<li>Clients</li>
						<li>
							<button>Let’s Build</button>
						</li>
					</ul>
				</div>
			</div>
			<div className="nav_rectangle nav-rectangle__left"></div>
			<div className="nav_rectangle nav-rectangle__right"></div>
		</>
	)
}
export default Navbar
