import { BsStopwatchFill, BsShieldFillCheck } from 'react-icons/bs';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { FaAward } from 'react-icons/fa6';

const BusinessFeatures = () => {
	return (
		<div className="px-10 my-20">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-base-300 px-7 py-10 ">
				<div>
					<BsStopwatchFill className="w-10 h-10 text-orange-600" />
					<h3 className="font-bold text-2xl my-3">Quick Delivery</h3>
					<p>
						Rapid, reliable delivery service - your convenience, our
						priority. Get your orders faster with our Quick Delivery
						today!
					</p>
				</div>
				<div>
					<RiSecurePaymentFill className="w-10 h-10 text-orange-600" />
					<h3 className="font-bold text-2xl my-3">Secure Payment</h3>
					<p>
						Shop with confidence using our Secure Payment system.
						Your transactions are protected, ensuring a safe and
						worry-free shopping experience.
					</p>
				</div>
				<div>
					<FaAward className="w-10 h-10 text-orange-600" />
					<h3 className="font-bold text-2xl my-3">Best Quality</h3>
					<p>
						Discover the finest quality products with us. We&apos;re
						committed to delivering excellence in every purchase you
						make.
					</p>
				</div>
				<div>
					<BsShieldFillCheck className="w-10 h-10 text-orange-600" />
					<h3 className="font-bold text-2xl my-3">
						Return Guarantee
					</h3>
					<p>
						Shop stress-free with our Return Guarantee. If
						you&apos;re not satisfied, we&apos;ve got you covered -
						hassle-free returns for your peace of mind.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BusinessFeatures;
