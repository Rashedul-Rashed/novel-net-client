import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import footerBg from '../../../assets/footer-bg.jpg';
const Footer = () => {
	return (
		<footer
			className="footer footer-center p-10 rounded text-white"
			style={{ backgroundImage: `url(${footerBg})` }}
		>
			<div className="grid grid-cols-1 md:grid-cols-3 w-full">
				<div className="flex flex-col items-center md:items-start">
					<h3 className="text-3xl">Novel Net</h3>
					<p className="my-5">
						MeritCrowd AB,
						<br />
						Uppsala, Sweden
					</p>
					<p>
						© 2023 Novel Net <br />
						All right reserved.
					</p>
				</div>
				<div className="flex flex-col space-y-3 items-start">
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Contact</a>
					<a className="link link-hover">Partners</a>
					<a className="link link-hover">Press kit</a>
				</div>
				<div className="flex flex-col items-center md:items-start space-y-3">
					<h3 className="text-xl font-bold">Contact Us : </h3>
					<p className="underline text-orange-400">
						info@novelnet.com
					</p>
					<div className="flex space-x-3">
						<a className="border-2 border-blue-400 p-2 rounded-full hover:bg-blue-400 duration-500">
							<FaTwitter className="w-6 h-6" />
						</a>
						<a className="border-2 border-blue-700 p-2 rounded-full hover:bg-blue-700 duration-500">
							<FaFacebook className="w-6 h-6" />
						</a>
						<a className="border-2 border-red-600 p-2 rounded-full hover:bg-red-600 duration-500">
							<FaYoutube className="w-6 h-6" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
