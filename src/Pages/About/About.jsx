import aboutImg from '../../assets/aboutImg.jpg';
import askLogo from '../../assets/askLogo.png';
import teachingExcellenceLogo from '../../assets/teachingExcellenceLogo.png';
import darwinEdtechLogo from '../../assets/darwinEdtechLogo.png';
import opalLogo from '../../assets/opalLogo.png';
import mcadLogo from '../../assets/mcadLogo.png';
import educationusaLogo from '../../assets/educationusaLogo.png';
import pc from '../../assets/pc.jpeg';
const About = () => {
	return (
		<div className="bg-base-300">
			<div className="px-2 md:px-10 py-5 md:flex justify-between items-center">
				<div className="md:pr-2">
					<h2 className="font-bold text-4xl text-left">
						About Novel Net
					</h2>
					<hr className="border-gray-800 border-2 w-48 mb-5" />
					<p className="my-5 text-lg font-medium">
						Novel Net was born from a simple vision: to make
						academic content more affordable and accessible for
						everyone.
					</p>
					<p className="text-lg font-medium">
						And we mean everyone. No matter where you&apos;re from
						or what you&apos;re interested in, Novel Net&apos;s
						Online Library helps you discover more about our world.
					</p>
					<button className="btn bg-orange-600 px-10 rounded-3xl text-lg normal-case hover:bg-orange-300 mt-5">
						Sign Up
					</button>
				</div>
				<div>
					<img
						className="w-full mt-5 md:mt-0 rounded-md"
						src={aboutImg}
						alt=""
					/>
				</div>
			</div>
			<div className="bg-white py-10 px-2 md:px-10 md:flex justify-between items-center gap-10">
				<div className="border border-gray-100 shadow-xl shadow-gray-200 p-5 rounded-xl text-center">
					<h2 className="mb-5 text-4xl font-bold">
						Where can you find Novel Net?
					</h2>
					<p className="text-xl text-center">
						Novel Net Open, an online library providing Open Access
						content is available worldwide.
						<br /> Novel Net Plus is available in UAE, Saudi Arabia,
						Bahrain, Jordan, Algeria, Morocco, and Nigeria (more
						regions launching soon)!
					</p>
				</div>
				<div className="text-xl space-y-2 mt-10 md:mt-0 text-center md:text-left">
					<p>
						With library budgets shrinking & journal subscription
						costs increasing, individuals who require access to
						research are left with limited options.
					</p>
					<p>
						So, our founders created Novel Net - an easy-to-use
						platform where you can find research across all major
						disciplines.
					</p>
					<p>
						Novel Net is developed by Knowledge E in a growing
						collaboration with researchers, students, institutions,
						& publishers to facilitate the democratisation of
						knowledge.
					</p>
				</div>
			</div>
			<div className="bg-white py-5">
				<div className="bg-base-300 md:flex justify-between items-center px-2 md:px-10">
					<p>Featured On</p>
					<img className="w-28" src={askLogo} alt="" />
					<img className="w-28" src={teachingExcellenceLogo} alt="" />
					<img className="w-28" src={darwinEdtechLogo} alt="" />
					<img className="w-28" src={opalLogo} alt="" />
					<img className="w-28" src={mcadLogo} alt="" />
					<img className="w-28" src={educationusaLogo} alt="" />
				</div>
			</div>
			<div className="bg-white px-2 md:px-10 py-5 md:flex justify-between items-center">
				<div className="md:pr-2">
					<h2 className="font-bold text-4xl text-left">
						Why use Novel Net?
					</h2>

					<p className="my-5 text-lg font-medium">
						We make accessing research simple. Our powerful online
						library features millions of articles, journals,
						e-books, and more - all on a seamless platform.
					</p>
					<p className="text-lg font-medium">
						You can use comprehensive filters to narrow down your
						research and then read, cite, and download content with
						ease.
					</p>
				</div>
				<div>
					<img
						className="w-full mt-5 md:mt-0 rounded-md"
						src={pc}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
