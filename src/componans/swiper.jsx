// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Thumbs } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import '../scss/components/swiper.scss';
// img
import imgItem from '../source/img/home/slider1.png';

export default () => {
	return (
		<Swiper
			modules={[Navigation, Thumbs, Pagination, A11y]}
			navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
			pagination={{ clickable: true }}
			spaceBetween={50}
			slidesPerView={1}
			// onSwiper={(swiper) => console.log(swiper)}
			// onSlideChange={() => console.log('slide change')}
		>
			<SwiperSlide>
				<div className="swiper-slide__body">
					<div className="swiper-slide__body-title">
						<h1>
							безкоштовна <br /> доставка
						</h1>
						<p>при заказі на 700грн</p>
					</div>
					<div className="swiper-slide__body-button">
						<a href="/">до покупок</a>
					</div>
				</div>
				<div className="swiper-slide__img bg">
					<img src={imgItem} alt="item" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-slide__body">
					<div className="swiper-slide__body-title">
						<h1>
							безкоштовна <br /> доставка
						</h1>
						<p>при заказі на 700грн</p>
					</div>
					<div className="swiper-slide__body-button">
						<a href="/">до покупок</a>
					</div>
				</div>
				<div className="swiper-slide__img bg">
					<img src={imgItem} alt="item" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-slide__body">
					<div className="swiper-slide__body-title">
						<h1>
							безкоштовна <br /> доставка
						</h1>
						<p>при заказі на 700грн</p>
					</div>
					<div className="swiper-slide__body-button">
						<a href="/">до покупок</a>
					</div>
				</div>
				<div className="swiper-slide__img bg">
					<img src={imgItem} alt="item" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-slide__body">
					<div className="swiper-slide__body-title">
						<h1>
							безкоштовна <br /> доставка
						</h1>
						<p>при заказі на 700грн</p>
					</div>
					<div className="swiper-slide__body-button">
						<a href="/">до покупок</a>
					</div>
				</div>
				<div className="swiper-slide__img bg">
					<img src={imgItem} alt="item" />
				</div>
			</SwiperSlide>

			<div className="swiper-button-prev"></div>
			<div className="swiper-button-next"></div>
			<div className="swiper-pagination"></div>
		</Swiper>
	);
};
