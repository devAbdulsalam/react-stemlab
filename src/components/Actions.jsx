import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Actions() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
			easing: 'ease-in-out', // default easing for AOS animations
		});
		AOS.refresh();
	}, []);
	return (
		<section className="text-gray-600 body-font border-t border-secondary">
			<div className="sm:container md:px-5 py-24 mx-auto">
				<div className="flex flex-wrap w-full mb-20">
					<div className="lg:w-1/2 w-full mb-6 lg:mb-0">
						<h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-primary">
							What we do
						</h1>
						<div className="h-1 w-20 bg-secondary rounded"></div>
					</div>
					<div className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-base">
						<p className="">
							Stem Innovations Lab (Stem Lab) play a crucial role in
							accelerating and nurturing startups. By providing access to
							resources, expertise, and networks, technology hubs help young
							companies navigate the challenges of starting and growing a
							business. As key players in the global startup ecosystem, these
							hubs are essential for the growth and success of new businesses.
						</p>
						<p className="mt-3">
							Stem Innovations Lab offers a unique environment that fosters
							innovation, experimentation, and risk-taking—critical components
							of startup growth. By creating a supportive and collaborative
							culture, we help startups overcome obstacles and achieve their
							goals faster than they would on their own. Our services include
							access to funding, mentorship, training, and opportunities for
							collaboration and partnerships, enabling startups to secure
							investment and grow sustainably.
						</p>
					</div>
				</div>
				<div className="flex flex-wrap -m-4">
					<div className="xl:w-1/4 md:w-1/2 p-2" data-aos="fade-left">
						<div className="bg-gray-100 p-4 rounded-lg">
							<img
								className="h-40 rounded w-full object-cover object-center mb-6"
								src="/images/womennn.jpeg"
								alt="content"
							/>
							<h3 className="tracking-widest text-primary text-xs font-semibold title-font">
								Capacity
							</h3>
							<h2 className="text-lg text-secondary font-semibold title-font mb-4">
								Building
							</h2>
							<p className="leading-relaxed text-base">
								We conducted workshops focusing on digital skills,
								entrepreneurship, and MSME development specifically for women in
								Northern Nigeria to empowered women with the skills needed to
								start and grow their businesses
							</p>
						</div>
					</div>
					<div className="xl:w-1/4 md:w-1/2 p-2" data-aos="fade-up">
						<div className="bg-gray-100 p-4 rounded-lg">
							<img
								className="h-40 rounded w-full object-cover object-center mb-6"
								src="/images/press.jpg"
								alt="content"
							/>
							<h3 className="tracking-widest text-primary text-xs font-semibold title-font">
								Startup
							</h3>
							<h2 className="text-lg text-secondary font-semibold title-font mb-4">
								Incubation
							</h2>
							<p className="leading-relaxed text-base">
								STEMLAB tech boot camps will be in several northern states,
								ranging from 1-2 days hackathon, women in tech and leadership
								and leadership skills for young entrepreneurs and those in
								startup space.
							</p>
						</div>
					</div>
					<div className="xl:w-1/4 md:w-1/2 p-2" data-aos="fade-up">
						<div className="bg-gray-100 p-4 rounded-lg">
							<img
								className="h-40 rounded w-full object-cover object-center mb-6"
								src="./gallery/landscape/2.jpeg"
								alt="content"
							/>
							<h3 className="tracking-widest text-primary text-xs font-semibold title-font">
								Young
							</h3>
							<h2 className="text-lg text-secondary font-semibold title-font mb-4">
								Innovators
							</h2>
							<p className="leading-relaxed text-base">
								The young innovators club is a community and a tech ecosystem
								built to identify young innovators minds from public schools,
								mentors and provide them platform to scale their talents. It’s a
								bi-weekly outreach to public school to identify talents in
								disadvantaged communities.
							</p>
						</div>
					</div>
					<div className="xl:w-1/4 md:w-1/2 p-2" data-aos="fade-right">
						<div className="bg-gray-100 p-4 rounded-lg">
							<img
								className="h-40 rounded w-full object-cover object-center mb-6"
								src="/gallery/landscape/5.jpeg"
								alt="content"
							/>
							<h3 className="tracking-widest text-primary text-xs font-semibold title-font">
								Tech
							</h3>
							<h2 className="text-lg text-secondary font-semibold title-font mb-4">
								Community
							</h2>
							<p className="leading-relaxed text-base">
								We have built a community for the indigenous Hausa tech
								innovators that allows talented Hausa women in tech to get to
								know and experience innovations first hand. Above all we
								understand that building network will support each lady to grow,
								integrate and become part of the tech world.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Actions;
