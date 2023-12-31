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
			<div className="nav2">
				<Logo />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="25"
					viewBox="0 0 24 25"
					fill="none"
				>
					<path
						d="M21.9998 10.9386V4.13857C21.9998 2.63857 21.3598 2.03857 19.7698 2.03857H15.7298C14.1398 2.03857 13.4998 2.63857 13.4998 4.13857V10.9386C13.4998 12.4386 14.1398 13.0386 15.7298 13.0386H19.7698C21.3598 13.0386 21.9998 12.4386 21.9998 10.9386Z"
						stroke="#2F80ED"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M21.9998 19.9386V18.1386C21.9998 16.6386 21.3598 16.0386 19.7698 16.0386H15.7298C14.1398 16.0386 13.4998 16.6386 13.4998 18.1386V19.9386C13.4998 21.4386 14.1398 22.0386 15.7298 22.0386H19.7698C21.3598 22.0386 21.9998 21.4386 21.9998 19.9386Z"
						stroke="#2F80ED"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M10.4998 13.1386V19.9386C10.4998 21.4386 9.85976 22.0386 8.26976 22.0386H4.22976C2.63976 22.0386 1.99976 21.4386 1.99976 19.9386V13.1386C1.99976 11.6386 2.63976 11.0386 4.22976 11.0386H8.26976C9.85976 11.0386 10.4998 11.6386 10.4998 13.1386Z"
						stroke="#2F80ED"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M10.4998 4.13857V5.93857C10.4998 7.43857 9.85976 8.03857 8.26976 8.03857H4.22976C2.63976 8.03857 1.99976 7.43857 1.99976 5.93857V4.13857C1.99976 2.63857 2.63976 2.03857 4.22976 2.03857H8.26976C9.85976 2.03857 10.4998 2.63857 10.4998 4.13857Z"
						stroke="#2F80ED"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</>
	)
}
export default Navbar
