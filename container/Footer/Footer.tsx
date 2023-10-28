import "./Footer.scss"

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer_container">
					<div className="footer_frame1">
						<h3 className="footer_h3">Quick Links</h3>
						<div className="footer_frame--p">
							<p className="footer_p">Home</p>
							<p className="footer_p">About</p>
							<p className="footer_p">Services</p>
						</div>
					</div>
					<div className="footer_frame2">
						<div className="company_logo">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="31"
									viewBox="0 0 24 31"
									fill="none"
									className="logo_svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0.205438 20.5517C0.205438 20.5517 11.2045 4.85493 13.4961 1.99056C15.7877 -0.873818 18.9957 1.99054 18.9957 3.59461V19.062C19.686 20.0627 19.5686 20.5517 21.4018 20.5517C23.235 20.5517 24.037 23.645 21.4018 23.645C19.365 24.0272 18.6801 24.6298 18.9957 26.9677C18.9957 26.9677 19.6832 26.1657 18.9957 28.6863C18.3083 31.207 15.2148 30.7487 15.2148 28.6863V26.2803C14.4343 24.2976 13.5498 23.5853 10.5172 23.645H2.03864C0.663811 23.645 -0.481909 22.2701 0.205438 20.5517ZM8.07426 16.6561C8.07426 21.3537 15.2148 21.812 15.2148 16.6561C15.2148 11.5002 8.07426 11.9585 8.07426 16.6561Z"
										fill="#FEFEFE"
									/>
								</svg>
								<span className="company_logo--span">
									0
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="10"
										height="17"
										viewBox="0 0 10 17"
										fill="none"
									>
										<path
											d="M1.85449 14.6162L8.03013 2.27191"
											stroke="white"
											strokeWidth="3.09943"
											strokeLinecap="round"
										/>
									</svg>
								</span>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="31"
									viewBox="0 0 24 31"
									fill="none"
									className="logo_svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M1.11468 20.5517C1.11468 20.5517 12.1138 4.85493 14.4054 1.99056C16.697 -0.873818 19.905 1.99054 19.905 3.59461V19.062C20.5953 20.0627 20.4778 20.5517 22.3111 20.5517C24.1443 20.5517 24.9463 23.645 22.3111 23.645C20.2742 24.0272 19.5894 24.6298 19.905 26.9677C19.905 26.9677 20.5924 26.1657 19.905 28.6863C19.2175 31.207 16.124 30.7487 16.124 28.6863V26.2803C15.3435 24.2976 14.459 23.5853 11.4264 23.645H2.94788C1.57305 23.645 0.427332 22.2701 1.11468 20.5517ZM8.9835 16.6561C8.9835 21.3537 16.124 21.812 16.124 16.6561C16.124 11.5002 8.9835 11.9585 8.9835 16.6561Z"
										fill="#FEFEFE"
									/>
								</svg>
							</div>
							<span className="company_logo--span--1">Consultants</span>
						</div>
						<div className="footer_frame--logo">
							<div className="footer_logo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="33"
									viewBox="0 0 32 33"
									fill="none"
								>
									<path
										d="M2.66667 16.4082H12C14.2667 16.4082 16 18.1415 16 20.4082C16 22.6749 14.2667 24.4082 12 24.4082H4.00001C3.20001 24.4082 2.66667 23.8749 2.66667 23.0749V9.74154C2.66667 8.94154 3.20001 8.4082 4.00001 8.4082H10.6667C12.9333 8.4082 14.6667 10.1415 14.6667 12.4082C14.6667 14.6749 12.9333 16.4082 10.6667 16.4082H2.66667Z"
										stroke="#F5F5F5"
										strokeWidth="1.5"
										strokeMiterlimit="10"
									/>
									<path
										d="M18.6667 19.0748H29.3333C29.3333 16.1415 26.9333 13.7415 24 13.7415C21.0667 13.7415 18.6667 16.1415 18.6667 19.0748ZM18.6667 19.0748C18.6667 22.0081 21.0667 24.4081 24 24.4081H26.2667"
										stroke="#F5F5F5"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M26 10.4082H22"
										stroke="#F5F5F5"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="footer_logo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="33"
									viewBox="0 0 32 33"
									fill="none"
								>
									<path
										d="M18.6667 12.8082V16.6749H22.1333C22.4 16.6749 22.5333 16.9415 22.5333 17.2082L22 19.7415C22 19.8749 21.7333 20.0082 21.6 20.0082H18.6667V29.7415H14.6667V20.1415H12.4C12.1333 20.1415 12 20.0082 12 19.7415V17.2082C12 16.9415 12.1333 16.8082 12.4 16.8082H14.6667V12.4082C14.6667 10.1415 16.4 8.4082 18.6667 8.4082H22.2667C22.5333 8.4082 22.6667 8.54154 22.6667 8.8082V12.0082C22.6667 12.2749 22.5333 12.4082 22.2667 12.4082H19.0667C18.8 12.4082 18.6667 12.5415 18.6667 12.8082Z"
										stroke="#FEFEFE"
										strokeWidth="2"
										strokeMiterlimit="10"
										strokeLinecap="round"
									/>
									<path
										d="M20 29.7416H12C5.33333 29.7416 2.66667 27.075 2.66667 20.4083V12.4083C2.66667 5.74162 5.33333 3.07495 12 3.07495H20C26.6667 3.07495 29.3333 5.74162 29.3333 12.4083V20.4083C29.3333 27.075 26.6667 29.7416 20 29.7416Z"
										stroke="#FEFEFE"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="footer_logo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="33"
									viewBox="0 0 32 33"
									fill="none"
								>
									<path
										d="M24.6667 6.79492C21.2 12.8616 14.52 16.3416 7.56 15.7149L3.33333 15.3283"
										stroke="#F5F5F5"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M7.33333 26.2348C10.8 20.1682 17.48 16.6882 24.44 17.3148L28.6667 17.7015"
										stroke="#F5F5F5"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M16 29.7416C23.3638 29.7416 29.3333 23.7721 29.3333 16.4083C29.3333 9.04449 23.3638 3.07495 16 3.07495C8.6362 3.07495 2.66667 9.04449 2.66667 16.4083C2.66667 23.7721 8.6362 29.7416 16 29.7416Z"
										stroke="#F5F5F5"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M10.1733 4.4082L14.4133 9.67487C17.2533 13.1949 19.2667 17.2882 20.3333 21.6749L21.9467 28.3282"
										stroke="#F5F5F5"
										strokeWidth="1.5"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
							<div className="footer_logo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="32"
									height="33"
									viewBox="0 0 32 33"
									fill="none"
								>
									<path
										d="M12 29.7416H20C26.6667 29.7416 29.3333 27.075 29.3333 20.4083V12.4083C29.3333 5.74162 26.6667 3.07495 20 3.07495H12C5.33333 3.07495 2.66666 5.74162 2.66666 12.4083V20.4083C2.66666 27.075 5.33333 29.7416 12 29.7416Z"
										stroke="#FEFEFE"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M16 21.0748C18.5773 21.0748 20.6667 18.9855 20.6667 16.4081C20.6667 13.8308 18.5773 11.7415 16 11.7415C13.4227 11.7415 11.3333 13.8308 11.3333 16.4081C11.3333 18.9855 13.4227 21.0748 16 21.0748Z"
										stroke="#FEFEFE"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M23.5148 9.74162H23.5302"
										stroke="#FEFEFE"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
						<p className="footer_p">Let’s Build</p>
					</div>
					<div className="footer_frame1">
						<h3 className="footer_h3">More Links</h3>
						<div className="footer_frame--p">
							<p className="footer_p">Our Process</p>
							<p className="footer_p">Other Services</p>
							<p className="footer_p">Clients</p>
						</div>
					</div>
				</div>
				<div className="footer_line1"></div>
				<div className="footer_line2"></div>
			</div>
			<div className="footer2">
				<div className="footer_frame2">
					<div className="company_logo">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="31"
								viewBox="0 0 24 31"
								fill="none"
								className="logo_svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M0.205438 20.5517C0.205438 20.5517 11.2045 4.85493 13.4961 1.99056C15.7877 -0.873818 18.9957 1.99054 18.9957 3.59461V19.062C19.686 20.0627 19.5686 20.5517 21.4018 20.5517C23.235 20.5517 24.037 23.645 21.4018 23.645C19.365 24.0272 18.6801 24.6298 18.9957 26.9677C18.9957 26.9677 19.6832 26.1657 18.9957 28.6863C18.3083 31.207 15.2148 30.7487 15.2148 28.6863V26.2803C14.4343 24.2976 13.5498 23.5853 10.5172 23.645H2.03864C0.663811 23.645 -0.481909 22.2701 0.205438 20.5517ZM8.07426 16.6561C8.07426 21.3537 15.2148 21.812 15.2148 16.6561C15.2148 11.5002 8.07426 11.9585 8.07426 16.6561Z"
									fill="#FEFEFE"
								/>
							</svg>
							<span className="company_logo--span">
								0
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="10"
									height="17"
									viewBox="0 0 10 17"
									fill="none"
								>
									<path
										d="M1.85449 14.6162L8.03013 2.27191"
										stroke="white"
										strokeWidth="3.09943"
										strokeLinecap="round"
									/>
								</svg>
							</span>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="31"
								viewBox="0 0 24 31"
								fill="none"
								className="logo_svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M1.11468 20.5517C1.11468 20.5517 12.1138 4.85493 14.4054 1.99056C16.697 -0.873818 19.905 1.99054 19.905 3.59461V19.062C20.5953 20.0627 20.4778 20.5517 22.3111 20.5517C24.1443 20.5517 24.9463 23.645 22.3111 23.645C20.2742 24.0272 19.5894 24.6298 19.905 26.9677C19.905 26.9677 20.5924 26.1657 19.905 28.6863C19.2175 31.207 16.124 30.7487 16.124 28.6863V26.2803C15.3435 24.2976 14.459 23.5853 11.4264 23.645H2.94788C1.57305 23.645 0.427332 22.2701 1.11468 20.5517ZM8.9835 16.6561C8.9835 21.3537 16.124 21.812 16.124 16.6561C16.124 11.5002 8.9835 11.9585 8.9835 16.6561Z"
									fill="#FEFEFE"
								/>
							</svg>
						</div>
						<span className="company_logo--span--1">Consultants</span>
					</div>
					<div className="footer_frame--logo">
						<div className="footer_logo">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="33"
								viewBox="0 0 32 33"
								fill="none"
							>
								<path
									d="M2.66667 16.4082H12C14.2667 16.4082 16 18.1415 16 20.4082C16 22.6749 14.2667 24.4082 12 24.4082H4.00001C3.20001 24.4082 2.66667 23.8749 2.66667 23.0749V9.74154C2.66667 8.94154 3.20001 8.4082 4.00001 8.4082H10.6667C12.9333 8.4082 14.6667 10.1415 14.6667 12.4082C14.6667 14.6749 12.9333 16.4082 10.6667 16.4082H2.66667Z"
									stroke="#F5F5F5"
									strokeWidth="1.5"
									strokeMiterlimit="10"
								/>
								<path
									d="M18.6667 19.0748H29.3333C29.3333 16.1415 26.9333 13.7415 24 13.7415C21.0667 13.7415 18.6667 16.1415 18.6667 19.0748ZM18.6667 19.0748C18.6667 22.0081 21.0667 24.4081 24 24.4081H26.2667"
									stroke="#F5F5F5"
									strokeWidth="1.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M26 10.4082H22"
									stroke="#F5F5F5"
									strokeWidth="1.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className="footer_logo">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="33"
								viewBox="0 0 32 33"
								fill="none"
							>
								<path
									d="M18.6667 12.8082V16.6749H22.1333C22.4 16.6749 22.5333 16.9415 22.5333 17.2082L22 19.7415C22 19.8749 21.7333 20.0082 21.6 20.0082H18.6667V29.7415H14.6667V20.1415H12.4C12.1333 20.1415 12 20.0082 12 19.7415V17.2082C12 16.9415 12.1333 16.8082 12.4 16.8082H14.6667V12.4082C14.6667 10.1415 16.4 8.4082 18.6667 8.4082H22.2667C22.5333 8.4082 22.6667 8.54154 22.6667 8.8082V12.0082C22.6667 12.2749 22.5333 12.4082 22.2667 12.4082H19.0667C18.8 12.4082 18.6667 12.5415 18.6667 12.8082Z"
									stroke="#FEFEFE"
									strokeWidth="2"
									strokeMiterlimit="10"
									strokeLinecap="round"
								/>
								<path
									d="M20 29.7416H12C5.33333 29.7416 2.66667 27.075 2.66667 20.4083V12.4083C2.66667 5.74162 5.33333 3.07495 12 3.07495H20C26.6667 3.07495 29.3333 5.74162 29.3333 12.4083V20.4083C29.3333 27.075 26.6667 29.7416 20 29.7416Z"
									stroke="#FEFEFE"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className="footer_logo">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="33"
								viewBox="0 0 32 33"
								fill="none"
							>
								<path
									d="M24.6667 6.79492C21.2 12.8616 14.52 16.3416 7.56 15.7149L3.33333 15.3283"
									stroke="#F5F5F5"
									strokeWidth="1.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M7.33333 26.2348C10.8 20.1682 17.48 16.6882 24.44 17.3148L28.6667 17.7015"
									stroke="#F5F5F5"
									strokeWidth="1.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M16 29.7416C23.3638 29.7416 29.3333 23.7721 29.3333 16.4083C29.3333 9.04449 23.3638 3.07495 16 3.07495C8.6362 3.07495 2.66667 9.04449 2.66667 16.4083C2.66667 23.7721 8.6362 29.7416 16 29.7416Z"
									stroke="#F5F5F5"
									strokeWidth="1.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M10.1733 4.4082L14.4133 9.67487C17.2533 13.1949 19.2667 17.2882 20.3333 21.6749L21.9467 28.3282"
									stroke="#F5F5F5"
									strokeWidth="1.5"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className="footer_logo">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="33"
								viewBox="0 0 32 33"
								fill="none"
							>
								<path
									d="M12 29.7416H20C26.6667 29.7416 29.3333 27.075 29.3333 20.4083V12.4083C29.3333 5.74162 26.6667 3.07495 20 3.07495H12C5.33333 3.07495 2.66666 5.74162 2.66666 12.4083V20.4083C2.66666 27.075 5.33333 29.7416 12 29.7416Z"
									stroke="#FEFEFE"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M16 21.0748C18.5773 21.0748 20.6667 18.9855 20.6667 16.4081C20.6667 13.8308 18.5773 11.7415 16 11.7415C13.4227 11.7415 11.3333 13.8308 11.3333 16.4081C11.3333 18.9855 13.4227 21.0748 16 21.0748Z"
									stroke="#FEFEFE"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M23.5148 9.74162H23.5302"
									stroke="#FEFEFE"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
					<p className="footer_p">Let’s Build</p>
				</div>
				<div className="footer_frame1">
					<h3 className="footer_h3">Quick Links</h3>
					<div className="footer_frame--p">
						<p className="footer_p">Home</p>
						<p className="footer_p">About</p>
						<p className="footer_p">Services</p>
					</div>
				</div>
				<div className="footer_frame1">
					<h3 className="footer_h3">More Links</h3>
					<div className="footer_frame--p">
						<p className="footer_p">Our Process</p>
						<p className="footer_p">Other Services</p>
						<p className="footer_p">Clients</p>
					</div>
				</div>
			</div>
		</>
	)
}
export default Footer
