import '../scss/page/home.scss';

import Swiper from '../componans/swiper';
import imgSell from '../source/img/home/DSC09632 3.png';
import imgSell_2 from '../source/img/home/DSC09632 5.png';
import imgMaskgroup from '../source/img/home/Maskgroup.png';
import imgKremdeo from '../source/img/home/kremdeo-beefresh.png';
import Item from '../componans/item';
import Blog from '../componans/blog';

const Home = () => {
	return (
		<>
			<section className="mein__home home home-header">
				<div className="home-header__container container">
					<div className="home-header__content">
						<div className="home-header__column">
							<Swiper />
						</div>
						<div className="home-header__column home-header__column_mod">
							<div className="home-header__column-ikon">
								<b>знижка</b>
								<div className="home-header__column-ikon_bg">
									<span>-20%</span>
									<div className="home-header__column-ikon_bg-img">
										<img src={imgMaskgroup} alt="imgMaskgroup" />
									</div>
								</div>
								<span>для постійних клієнтів</span>

								<div className="home-header__column-ikon-sell ibg">
									<img src={imgSell} alt="sell" />
								</div>
							</div>
							<div className="home-header__column-ikon">
								<p>
									без коштовна доставка <span>при купівлі на 700грн</span>
								</p>

								<div className="home-header__column-ikon-sell home-header__column-ikon-sell_mod ibg">
									<img src={imgSell_2} alt="sell" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mein__top-sell top-sell">
				<div className="top-sell__container container">
					<div className="top-sell__title">
						<h3>лідер продажу</h3>
						<a href="/">
							показать щє{' '}
							<svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM1 4.5L31 4.5L31 3.5L1 3.5L1 4.5Z"
									fill="#365C00"
								/>
							</svg>
						</a>
					</div>
					<div className="top-sell__body">
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
					</div>
				</div>
			</section>
			<section className="mein__new new">
				<div className="new__container container">
					<div className="new__title">
						<h3>новинки</h3>
						<a href="/">
							показать щє{' '}
							<svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM1 4.5L31 4.5L31 3.5L1 3.5L1 4.5Z"
									fill="#365C00"
								/>
							</svg>
						</a>
					</div>
					<div className="new__body">
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
					</div>
				</div>
			</section>
			<section className="mein__blog blog">
				<div className="blog__container container">
					<div className="blog__title">
						<h3>блог</h3>
						<a href="/">
							показать щє{' '}
							<svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM1 4.5L31 4.5L31 3.5L1 3.5L1 4.5Z"
									fill="#365C00"
								/>
							</svg>
						</a>
					</div>
					<div className="blog__content">
						<a href="/">
							<Blog />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
