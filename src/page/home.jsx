import '../scss/page/home.scss';

import Swiper from '../componans/swiper';
import imgSell from '../source/img/home/DSC09632 3.png';
import imgSell_2 from '../source/img/home/DSC09632 5.png';
import imgMaskgroup from '../source/img/home/Maskgroup.png';
import imgKremdeo from '../source/img/home/kremdeo-beefresh.png';
import imgGroup1 from '../source/img/home/about/Group1.png';
import imgGroup2 from '../source/img/home/about/Group2.png';
import imgGroup3 from '../source/img/home/about/Group3.png';
import imgGroup4 from '../source/img/home/about/Group4.svg';
import imgBG from '../source/img/home/about/Vector.png';
import Item from '../componans/item';
import Blog from '../componans/blog';
import BlogInst from '../componans/blogInst';

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
			<section className="mein__about about">
				<div className="about__container container">
					<div className="about__title">
						<h3>про нас</h3>
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
				</div>
				<div className="about__garant">
					<div className="about__container container">
						<div className="about__garant-icons">
							<div className="about__garant-icon">
								<img src={imgGroup1} alt="" />

								<p>гарантія якості</p>
							</div>
							<div className="about__garant-icon">
								<img src={imgGroup2} alt="" />

								<p>результат з перших днів викиристовування</p>
							</div>
							<div className="about__garant-icon">
								<img src={imgGroup3} alt="" />

								<p>100% натурально</p>
							</div>
						</div>
					</div>
					<div className="about__garant_bg">
						<img src={imgBG} alt="ibg" />
					</div>
				</div>
				<div className="about__why-us">
					<div className="about__container container">
						<div className="about__why-us-title">
							<h4>Чому варто використовувать продукцію української торгової марки FLORI.</h4>
						</div>
						<div className="about__why-us-content">
							<ul>
								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Потому что наша философия - создавать самый качественный продукт. Мы настолько уверены в нем, что готовы вернуть деньги, если
									продукция Вам не понравится.
								</li>
								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Потому что природные и гармоничные результаты действия нашей продукции Вы сможете увидеть уже после первых дней использования.
								</li>

								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Потому что весь современный мир начал понимать, насколько вредят организму привычные нам химические средства ухода за телом. Сегодня
									во всех развитых странах стало "трендом" пользования натуральной косметикой. Это не только полезно, но и модно.
								</li>
								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Потому что лечить всегда гораздо дороже, чем упредить, а вся наша продукция разработана с учетом основных принципов гармонизации
									функций организма человека.
								</li>
								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Сначала может показаться, что цены на товар несколько высоки. Но если принять во внимание, что мы используем только 100% натуральное
									сырье самого высокого качества, и весь процесс производства включает в себя ручную работу, Вы поймете, что стоимость товара
									достаточно демократична по сравнению с европейскими аналогами.
								</li>
								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Легко сделать вывод, что используя нашу продукцию, Вы: сохраняете свое здоровье, красивее и моложе выглядите, остаетесь в
									современном тренде. А также экономите на лечении, и застрахованы от пустой траты денег!
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="mein__inst inst">
				<div className="inst__container container">
					<div className="inst__title">
						<h3>instagram</h3>
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
					<div className="inst__content">
						<a href="/">
							<BlogInst />
						</a>
						<a href="/">
							<BlogInst />
						</a>
						<a href="/">
							<BlogInst />
						</a>
						<a href="/">
							<BlogInst />
						</a>
						<a href="/">
							<BlogInst />
						</a>
						<a href="/">
							<BlogInst />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
