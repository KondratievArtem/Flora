import '../scss/page/home.scss';

import Swiper from '../componans/swiper';

const Home = () => {
	return (
		<section className="mein__home home home-header">
			<div className="home-header__container container">
				<div className="home-header__content">
					<div className="home-header__column">
						<Swiper />
					</div>
					<div className="home-header__column home-header__column_mod">
						<div className="home-header__column-ikon">
							<span>знижка</span>
							<span>-20%</span>
							<span>для постійних клієнтів</span>
						</div>
						<div className="home-header__column-ikon">
							<span>без коштовна</span>
							<span>доставка</span>
							<span>при купівлі на 700грн</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
