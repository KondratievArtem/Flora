import '../scss/page/about.scss';
// components

import BlogInst from '../componans/blogInst';
import Title from '../componans/title';
// img
import video from '../source/img/full-goods/video/Rectangle.png';
import imgGroup4 from '../source/img/home/about/Group4.svg';
import ibg from '../source/img/about/48694031_fon.png';

const Club = () => {
	return (
		<article className="main__club club-page">
			<section>
				<div className="about-page__container container">
					<div className="about-page__header">
						<div className="about-page__header-video">
							<Title name={'КЛУБ FLORI'} goIn={'к копупкам'} linck={'/'} />

							<div className="about-page__content-video video">
								<div className="video__video-bg ibg">
									<img src={video} alt="video" />
								</div>
								<div className="video__body-text">
									<div className="video__title">
										<p>Клуб Flori</p>
									</div>
									<div className="video__text">
										Открытое сообщество людей, в котором основными ценностями являются: свобода, стремление к знаниям, здоровый образ жизни,
										самоорганизация, новые идеи, взаимопомощь и юмор. Каждый участник клуба открывает для себя двери к улучшению своего здоровья,
										внешнего вида и материального положения.
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
					<Title name={'Выгоды от участия в клубе «FLORI»:'} />
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
									Качественная натуральная и безопасная продукция.
								</li>
								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Решение вопроса «Что подарить другу / подруге».
								</li>

								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Саморазвитие.
								</li>
								<b>Как это работает?</b>
								<p>
									Для того, чтобы стать участником клуба и / или начать свой новый бизнес, необходимо сделать через сайт единоразовую покупку на 850
									грн.
								</p>
								<b>После чего Вы получаете:</b>
								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Потому что лечить всегда гораздо дороже, чем упредить, а вся наша продукция разработана с учетом основных принципов гармонизации
									функций организма человека.
								</li>
								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Заказ с бесплатной доставкой по Украине (опционально - курьер).
								</li>
								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Пластиковую карту с персональным номером.
								</li>
								<li>
									<img src={imgGroup4} alt="imgGroup4" />
									Постоянное скидку 20% на продукцию «FLORI».
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

export default Club;
