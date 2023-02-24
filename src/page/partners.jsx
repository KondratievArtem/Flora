import '../scss/page/about.scss';
// components

import BlogInst from '../componans/blogInst';
import Title from '../componans/title';
// img
import video from '../source/img/full-goods/video/Rectangle.png';
import imgGroup1 from '../source/img/home/about/Group1.png';
import imgGroup2 from '../source/img/home/about/Group2.png';
import imgGroup3 from '../source/img/home/about/Group3.png';
import imgGroup4 from '../source/img/home/about/Group4.svg';
import imgBG from '../source/img/home/about/Vector.png';
import ibg from '../source/img/about/48694031_fon.png';

const Partners = () => {
	return (
		<article className="main__about about-page">
			<section>
				<div className="about-page__container container">
					<div className="about-page__header">
						<div className="about-page__header-video">
							<Title name={'Партнерам'} goIn={'перейти в youtube'} linck={'/'} />

							<div className="about-page__content-video video">
								<div className="video__video-bg ibg">
									<img src={video} alt="video" />
								</div>
								<div className="video__body-text">
									<div className="video__title">
										<p>Дорогие партнёры!</p>
									</div>
									<div className="video__text">
										Мы бренд натуральной косметики, российский, локальный, родом из г. Магнитогорска. Основан в 2017 году человеком по имени Анастасия
										(мной), я химик-технолог по образованию. В команде сейчас работает 16 человек и все они трудятся для создания идеальных и полезных
										продуктов для женской красоты. Вдохновения и идеи мы черпаем на европейских выставках, разрабатываем рецептуры, изучая последние
										ноу-хау в производстве ингредиентов для натуральной косметики. Растём и становимся лучше благодаря нашим клиентам, с которыми
										выстраиваем честные и открытые отношения.
										<address>
											Представитель в США <br />
											Лолут Владислава,
											<br />
											тел.440-212-5376 <br />
											місто Парма, <br />
											штат Огайо.
										</address>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="about-page__bg ibg">
						<img src={ibg} alt="" />
					</div>
				</div>
			</section>
			<section className="about-page__about about">
				<div className="about__container container">
					<Title name={'про нас'} goIn={'узнать больше'} linck={'/'} />
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
		</article>
	);
};

export default Partners;
