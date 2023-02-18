import '../scss/page/full-goods.scss';
// component
import Title from '../componans/title';
// img
import fon from '../source/img/full-goods/fon.png';
import mass from '../source/img/full-goods/massege.svg';
import g1 from '../source/img/full-goods/Mask Group1.svg';
import g from '../source/img/full-goods/Mask Group.svg';
import imge from '../source/img/full-goods/kremdeo-beefresh.png';
import video from '../source/img/full-goods/video/Rectangle.png';

const FullGoods = () => {
	return (
		<div className="main__full-goods full-goods">
			<div className="full-goods__container container">
				<Title name={'КремДео "BeeFresh" (18 мл)'} goIn={'в магазин'} linck={'/'} />
				<section className="full-goods__inf-goods ">
					<div>
						<div className="full-goods__slider">
							<div className="full-goods__slider-imgs">
								<div className="full-goods__slider-img ibg">
									<img src={imge} alt="" />
								</div>
								<div className="full-goods__slider-img ibg">
									<img src={imge} alt="" />
								</div>
							</div>
							<div className="full-goods__slider-big-img">
								<img src={imge} alt="" />
							</div>
						</div>
						<div className="full-goods__inf-goods-body">
							<div className="full-goods__inf-goods-body__title">
								<h4>КремДео "BeeFresh" (18 мл)</h4>
							</div>
							<div className="full-goods__inf-goods-body__summ">
								<div className="add-goods__content-conclusion-body">
									<div>
										<p>180</p>
										<div className="cart-catalog__sell cart-catalog__sell_add-goods">
											<span>20%</span>
										</div>
									</div>
									<div>
										<p>160 грн</p>
									</div>
								</div>
							</div>
							<div className="full-goods__inf-goods-body__button">
								<button>додати в кошик</button>
							</div>
							<div className="full-goods__inf-goods-body__tab tab">
								<div className="tab__titles">
									<p className="activ">Описание</p>
									<p>Ингридиенты</p>
									<p>Применение</p>
								</div>
								<div className="tab__body activ">
									<p>
										Увлажняющий крем "Moisturizing" восстанавливает баланс влаги для сухой, комбинированной и обезвоженной жирной кожи. Содержит
										физиологический увлажнитель кожи (натуральный увлажняющий фактор), который возвращает клеткам естественную влагоудерживающую
										способность и восстанавливает защитный барьер. Фитостеролы абиссинской горчицы содержат редкую эруковую кислоту и увеличивают
										степень гидратации кожи более чем на 60%. Масло муса из мякоти и кожуры бананов интенсивно питает и смягчает кожу, уменьшает
										выраженность пигментных пятен. Экстракты овса, льна и пажитника обладают мощными омолаживающими, питательными и регенерирующими
										действиями.
									</p>
								</div>
								<div className="tab__body">
									<p>
										Увлажняющий крем "Moisturizing" восстанавливает баланс влаги для сухой, комбинированной и обезвоженной жирной кожи. Содержит
										физиологический увлажнитель кожи (натуральный увлажняющий фактор), который возвращает клеткам естественную влагоудерживающую
										способность и восстанавливает защитный барьер. Фитостеролы абиссинской горчицы содержат редкую эруковую кислоту и увеличивают
										степень гидратации кожи более чем на 60%. Масло муса из мякоти и кожуры бананов интенсивно питает и смягчает кожу, уменьшает
										выраженность пигментных пятен. Экстракты овса, льна и пажитника обладают мощными омолаживающими, питательными и регенерирующими
										действиями.
									</p>
								</div>
								<div className="tab__body">
									<p>
										Увлажняющий крем "Moisturizing" восстанавливает баланс влаги для сухой, комбинированной и обезвоженной жирной кожи. Содержит
										физиологический увлажнитель кожи (натуральный увлажняющий фактор), который возвращает клеткам естественную влагоудерживающую
										способность и восстанавливает защитный барьер. Фитостеролы абиссинской горчицы содержат редкую эруковую кислоту и увеличивают
										степень гидратации кожи более чем на 60%. Масло муса из мякоти и кожуры бананов интенсивно питает и смягчает кожу, уменьшает
										выраженность пигментных пятен. Экстракты овса, льна и пажитника обладают мощными омолаживающими, питательными и регенерирующими
										действиями.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="full-goods__item">
							<div className="full-goods__ibg">
								<div className="full-goods__bac-icon">
									<img src={g} alt="youtoube" />
								</div>
								<div className="full-goods__bac-fon">
									<img src={fon} alt="fon" />
								</div>
							</div>
							<div className="full-goods__text">
								<span>відео</span>
							</div>
						</div>
						<div className="full-goods__item">
							<div className="full-goods__ibg">
								<div className="full-goods__bac-icon full-goods__bac-icon_mod">
									<img src={mass} alt="massege" />
								</div>
								<div className="full-goods__bac-fon">
									<img src={fon} alt="fon" />
								</div>
							</div>
							<div className="full-goods__text">
								<span>відгуки</span>
							</div>
						</div>
						<div className="full-goods__item">
							<div className="full-goods__ibg">
								<div className="full-goods__bac-icon">
									<img src={g1} alt="deliveri" />
								</div>
								<div className="full-goods__bac-fon">
									<img src={fon} alt="fon" />
								</div>
							</div>
							<div className="full-goods__text">
								<span>доставка</span>
							</div>
						</div>
					</div>
				</section>
				<section className="full-goods__video">
					<div className="full-goods__container container">
						<Title name={'відео'} goIn={'перейти в youtube'} linck={'/'} />

						<div className="full-goods__content-video video">
							<div className="video__video-bg ibg">
								<img src={video} alt="video" />
							</div>
							<div className="video__body-text">
								<div className="video__title">
									<p>Описание</p>
								</div>
								<div className="video__text">
									Увлажняющий крем "Moisturizing" восстанавливает баланс влаги для сухой, комбинированной и обезвоженной жирной кожи. Содержит
									физиологический увлажнитель кожи (натуральный увлажняющий фактор), который возвращает клеткам естественную влагоудерживающую
									способность и восстанавливает защитный барьер. Фитостеролы абиссинской горчицы содержат редкую эруковую кислоту и увеличивают
									степень гидратации кожи более чем на 60%. Гликосфинголипидный комплекс провоцирует синтез собственных церамидов. Масло муса из
									мякоти и кожуры бананов интенсивно питает и смягчает кожу, уменьшает выраженность пигментных пятен. Экстракты овса, льна и пажитника
									обладают мощными омолаживающими, питательными и регенерирующими действиями.
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="full-goods__coments">
					<div className="full-goods__container container">
						<Title name={'коментарі'} goIn={'залишить коментар'} linck={'/'} />

						<div className="full-goods__content"></div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default FullGoods;
