import { NavLink } from 'react-router-dom';
import profile from '../../../assets/sampleProfile3.jpg';
import { MdLightMode, MdModeNight } from 'react-icons/md';
import { FaAlignRight, FaXmark } from 'react-icons/fa6';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => {
		const html = document.documentElement;

		if (html.getAttribute('data-theme') === 'dark') {
			html.removeAttribute('data-theme');
			setDarkMode(false);
		} else {
			html.setAttribute('data-theme', 'dark');
			setDarkMode(true);
		}
	};

	return (
		<div className="navbar bg-base-300 flex justify-between px-2 md:px-10">
			<a className="font-bold text-2xl">
				<span className="text-orange-600">Novel</span>Net
			</a>
			<ul className="ml-5 space-x-10 hidden md:flex items-center">
				<li>
					<NavLink>Home</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink>Products</NavLink>
				</li>
				<li>
					<NavLink>Contact</NavLink>
				</li>
			</ul>
			<div className="space-x-2">
				<button onClick={toggleTheme}>
					{darkMode ? <MdModeNight /> : <MdLightMode />}
				</button>
				<div className="avatar online">
					<div className="w-10 rounded-full">
						<img src={profile} />
					</div>
				</div>
				<div className="relative">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden"
					>
						{isOpen ? <FaXmark /> : <FaAlignRight />}
					</button>
					{isOpen && (
						<ul className="bg-slate-700 bg-opacity-60 space-y-5 absolute top-10 right-0 p-5 rounded-xl text-white">
							<li>
								<NavLink>Home</NavLink>
							</li>
							<li>
								<NavLink>About</NavLink>
							</li>
							<li>
								<NavLink>Products</NavLink>
							</li>
							<li>
								<NavLink>Contact</NavLink>
							</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
