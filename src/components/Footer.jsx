import { Link } from 'react-router-dom';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<div className="content">
				<div className="top">
					<div className="logo-details">
						<a href="/">
							<img src="/sublogo.png" className="w-50px" alt="" />
						</a>
						<span className="logo_name">StemLab</span>
					</div>
					<div className="media-icons">
						<a href="#" target="blank">
							<img src="/facebook.svg" alt="F" />
						</a>
						<a href="#" target="blank">
							<img src="/twitter.svg" alt="T" />
						</a>
						<a href="https://www.instagram.com/stemlab_ng" target="blank">
							<img src="/instagram.svg" alt="I" />
						</a>
						<a href="#" target="blank">
							<img src="/whatsapp.svg" alt="I" />
						</a>
					</div>
				</div>
				<div className="link-boxes">
					<ul className="box">
						<li className="link_name">Quick Links</li>
						<li>
							<Link to="#">Home</Link>
						</li>

						<li>
							<Link to="./about">About us</Link>
						</li>
						<li>
							<Link to="#">Get started</Link>
						</li>
						<li>
							<Link to="./contact">Contact us</Link>
						</li>
					</ul>
					<ul className="box">
						<li className="link_name">Programs</li>
						<li>
							<a href="#">SIWES</a>
						</li>
						<li>
							<a href="#">Internship</a>
						</li>
						<li>
							<a href="#">Kids BootCamp</a>
						</li>
						<li>
							<a href="#">More</a>
						</li>
					</ul>
					<ul className="box">
						<li className="link_name">Contact Us</li>
						<li>
							<a href="#">
								60, Ahmadu Bello Way, Nassarawa GRA, Kano State, Nigeria
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/stemlab_ng/">stemlab_ng</a>
						</li>
						<li>
							<a href="tel:+2348162224407">08162224407</a>
						</li>
						<li>
							<a href="https://wa.link/xalr68">07014085472</a>
						</li>
					</ul>
					<ul className="box input-box">
						<div>
							<iframe
								src="https://maps.google.com/maps?q=Kano%20state%20library&t=k&z=17&ie=UTF8&iwloc=&output=embed"
								title="Google Map"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
							></iframe>
						</div>
					</ul>
				</div>
			</div>
			<div className="bottom-details">
				<div className="bottom_text">
					<span className="copyright_text">Copyright © {year} </span>
					<span className="policy_terms">
						<a href="#">StemLab Kano.</a>
						<a href="#">All rights reserved</a>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
