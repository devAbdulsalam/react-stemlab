import Actions from '../components/Actions';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
			easing: 'ease-in-out', // default easing for AOS animations
		});
		AOS.refresh();
	}, []);

	return (
		<>
			<section className="text-gray-700 body-font ">
				<div className="w-full md:container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full">
						<h2 className="text-xs text-secondary tracking-widest font-medium title-font mb-1">
							STEM INNOVATORS LAB
						</h2>
						<h1 className="sm:text-3xl text-2xl font-semibold title-font text-gray-900">
							ABOUT US
						</h1>
					</div>
					<div className="w-full md:container px-0.5 md:px-5 pt-24 mx-auto flex flex-wrap">
						<div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
							<img
								alt="feature"
								className="object-fit object-center h-full w-full"
								src="/images/idea.png"
							/>
						</div>
						<div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
							<div className="flex flex-col mb-10 lg:items-start items-center px-1">
								<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary mb-5">
									<svg
										fill="none"
										stroke="white"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-6 h-6"
										viewBox="0 0 24 24"
									>
										<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
									</svg>
								</div>
								<div className="flex-grow text-base leading-relaxed text-left px-1">
									<h2 className="text-secondary text-lg title-font font-medium mb-3">
										STEM LAB
									</h2>
									<p className="mb-2 pb-2 lg:pb-0 ">
										Stem Lab is an ecosystem designed to support young
										innovators and tech entrepreneurs, providing them with the
										tools they need to launch, scale, and amplify their impact.
									</p>
									<p>
										We have built a framework for innovative minds create great
										solutions, enterprises and companies to solve most of the
										biggest challenge in the society. We created a company
										focused in creating an enabling environment for most
										startups.
									</p>
									<p className="mt-2 leading-relaxed">
										STEMLAB was established to empower, promote and position
										Africa especially Nigeria in technology and startup
										ecosystem with a vision of using technology as a strategy to
										combat unemployment.
									</p>
									<button className="mt-4 learn-more-link blue inline-flex items-center bg-bg font-bold md:text-base text-sm py-2 px-10 text-center text-primary bg-secondary hover:bg-primary hover:text-secondary cursor-pointer uppercase opacity-90 hover">
										{' '}
										Learn More
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-4 h-4 ml-2"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Actions />
		</>
	);
}

export default About;
