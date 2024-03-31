import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import img1 from '../../assets/categoryImg1.jpg';
import img2 from '../../assets/categoryImg2.jpg';
import img3 from '../../assets/categoryImg3.jpg';
import img4 from '../../assets/categoryImg4.jpg';
import img5 from '../../assets/categoryImg5.jpg';
import img6 from '../../assets/categoryImg6.jpg';
import img7 from '../../assets/categoryImg7.jpg';
import img8 from '../../assets/categoryImg8.jpg';
import img9 from '../../assets/categoryImg9.jpg';

const Categories = () => {
	return (
		<div className="px-10 my-10">
			<h2 className="font-bold text-4xl mb-12">Categories</h2>

			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
					dynamicBullets: true,
				}}
				breakpoints={{
					'@0.00': {
						slidesPerView: 1,
						spaceBetween: 5,
					},
					'@0.75': {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					'@1.00': {
						slidesPerView: 4,
						spaceBetween: 15,
					},
					'@1.50': {
						slidesPerView: 6,
						spaceBetween: 20,
					},
				}}
				modules={[Pagination]}
				className="mySwiper text-white cursor-move"
			>
				<SwiperSlide
					className="bg-cover rounded-2xl my-5"
					style={{ backgroundImage: `url(${img1})` }}
				>
					<div className="hero-overlay py-10 pl-3 rounded-2xl">
						<h2>Art & Photography</h2>
						<p>231+ Item</p>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className="bg-cover rounded-2xl my-5"
					style={{ backgroundImage: `url(${img2})` }}
				>
					<div className="hero-overlay py-10 pl-3 rounded-2xl">
						<h2>Biographies and Memory</h2>
						<p>124+ Item</p>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className="bg-cover  rounded-2xl my-5"
					style={{ backgroundImage: `url(${img3})` }}
				>
					<div className="hero-overlay py-10 pl-3 rounded-2xl">
						<h2>Children&apos;s book</h2>
						<p>432+ Item</p>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className="bg-cover  rounded-2xl my-5"
					style={{ backgroundImage: `url(${img4})` }}
				>
					<div className="hero-overlay py-10 pl-3 rounded-2xl">
						<h2>CookBook</h2>
						<p>241+ Item</p>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className="bg-cover  rounded-2xl my-5"
					style={{ backgroundImage: `url(${img5})` }}
				>
					<div className="hero-overlay py-10 pl-3 rounded-2xl">
						<h2>History</h2>
						<p>51+ Item</p>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className="bg-cover rounded-2xl my-5"
					style={{ backgroundImage: `url(${img6})` }}
				>
					<div className="hero-overlay py-10 pl-3 rounded-2xl">
						<h2>Literature</h2>
						<p>219+ Item</p>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className="bg-cover  rounded-2xl my-5"
					style={{ backgroundImage: `url(${img7})` }}
				>
					<div className="hero-overlay py-10 pl-3 rounded-2xl">
						<h2>Cultures</h2>
						<p>73+ Item</p>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className="bg-cover  rounded-2xl my-5"
					style={{ backgroundImage: `url(${img8})` }}
				>
					<div className="hero-overlay py-10 pl-3 rounded-2xl">
						<h2>Science & Technology</h2>
						<p>530+ Item</p>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className="bg-cover rounded-2xl my-5"
					style={{ backgroundImage: `url(${img9})` }}
				>
					<div className="hero-overlay py-10 pl-3 rounded-2xl">
						<h2>Fiction</h2>
						<p>212+ Item</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Categories;
