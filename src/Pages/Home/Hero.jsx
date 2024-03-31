import heroImg from '../../assets/reading.png';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
	return (
		<div className="bg-base-300 px-2 md:px-10 md:flex justify-between items-center">
			<div>
				<h2 className="text-3xl md:text-6xl font-bold">
					Find Over 20 million
					<br />
					books in Novel Net
				</h2>
				<p className="my-5">
					Discover academic journals, articles,
					<br />& books on one seamless platform
				</p>
				<button className="btn bg-orange-600 rounded-3xl normal-case hover:bg-orange-300">
					Go To Collections <BsArrowRight />
				</button>
			</div>
			<div>
				<img src={heroImg} alt="" />
			</div>
		</div>
	);
};

export default Hero;
