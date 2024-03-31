import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BooksCollection = () => {
	return (
		<div className="px-10 my-10">
			<h2 className="font-bold text-4xl">Books</h2>
			<Swiper
				spaceBetween={30}
				pagination={{
					clickable: true,
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
				className="mySwiper my-4 cursor-move"
			>
				<SwiperSlide className="py-10">
					<img
						className="w-full h-64"
						src="https://static01.nyt.com/images/2023/06/16/books/06s-a-cosby-cover/06s-a-cosby-cover-jumbo.jpg"
						alt=""
					/>

					<h3 className="font-bold text-xl text-center leading-6">
						All The Sinners Bleed
					</h3>
					<p className="text-gray-700 text-center italic">
						S.A Cosby
					</p>
				</SwiperSlide>
				<SwiperSlide className="py-10">
					<img
						className="w-full h-64"
						src="https://static01.nyt.com/images/2023/05/16/books/16kevin-powers-cover/16kevin-powers-cover-jumbo.jpg"
						alt=""
					/>

					<h3 className="font-bold text-xl text-center leading-6">
						A Line In The Sand
					</h3>
					<p className="text-gray-700 text-center italic">
						Kevin Powers{' '}
					</p>
				</SwiperSlide>
				<SwiperSlide className="py-10">
					<img
						className="w-full h-64"
						src="https://static01.nyt.com/images/2023/05/23/books/23jane-draycott-cover/23jane-draycott-cover-jumbo.jpg"
						alt=""
					/>

					<h3 className="font-bold text-xl text-center leading-6">
						Cleopatra&apos;s Daughter
					</h3>
					<p className="text-gray-700 text-center italic">
						Jane Draycott{' '}
					</p>
				</SwiperSlide>
				<SwiperSlide className="py-10">
					<img
						className="w-full h-64"
						src="https://static01.nyt.com/images/2023/05/16/books/16stephen-vladeck-cover/16stephen-vladeck-cover-jumbo.jpg"
						alt=""
					/>

					<h3 className="font-bold text-xl text-center leading-6">
						The Shadow Docket
					</h3>
					<p className="text-gray-700 text-center italic">
						Stephen Vladeck{' '}
					</p>
				</SwiperSlide>
				<SwiperSlide className="py-10">
					<img
						className="w-full h-64"
						src="https://static01.nyt.com/images/2023/04/30/books/30siddhartha-deb-cover/30siddhartha-deb-cover-jumbo.jpg"
						alt=""
					/>

					<h3 className="font-bold text-xl text-center leading-6">
						The Light At The End Of The World
					</h3>
					<p className="text-gray-700 text-center italic">
						Siddhartha Deb{' '}
					</p>
				</SwiperSlide>
				<SwiperSlide className="py-10">
					<img
						className="w-full h-64"
						src="https://static01.nyt.com/images/2023/05/23/books/23melissa-l-sevigny-cover/23melissa-l-sevigny-cover-jumbo.jpg"
						alt=""
					/>

					<h3 className="font-bold text-xl text-center leading-6">
						Brave The Wild River
					</h3>
					<p className="text-gray-700 text-center italic">
						Melissa L. Sevigny{' '}
					</p>
				</SwiperSlide>
				<SwiperSlide className="py-10">
					<img
						className="w-full h-64"
						src="https://static01.nyt.com/images/2023/05/06/books/06john-vaillant-cover/06john-vaillant-cover-jumbo.jpg"
						alt=""
					/>

					<h3 className="font-bold text-xl text-center leading-6">
						Fire Weather
					</h3>
					<p className="text-gray-700 text-center italic">
						John Vaillant{' '}
					</p>
				</SwiperSlide>
				<SwiperSlide className="py-10">
					<img
						className="w-full h-64"
						src="https://static01.nyt.com/images/2023/05/18/books/18james-wolff-cover/18james-wolff-cover-jumbo.jpg"
						alt=""
					/>

					<h3 className="font-bold text-xl text-center leading-6">
						The Man In The Corduroy Suit
					</h3>
					<p className="text-gray-700 text-center italic">
						James Wolff{' '}
					</p>
				</SwiperSlide>
				<SwiperSlide className="py-10">
					<img
						className="w-full h-64"
						src="https://static01.nyt.com/images/2023/05/16/books/16samara-breger-cover/16samara-breger-cover-jumbo.jpg"
						alt=""
					/>

					<h3 className="font-bold text-xl text-center leading-6">
						A Long Time Dead
					</h3>
					<p className="text-gray-700 text-center italic">
						Samara Breger{' '}
					</p>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default BooksCollection;
