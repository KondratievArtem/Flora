import '../scss/page/full-goods.scss';
// component
import Title from '../componans/title';
import Item from '../componans/item';
import AddComent from '../componans/addComent';
// img
import fon from '../source/img/full-goods/fon.png';
import mass from '../source/img/full-goods/massege.svg';
import g1 from '../source/img/full-goods/Mask Group1.svg';
import g from '../source/img/full-goods/Mask Group.svg';
import imge from '../source/img/full-goods/kremdeo-beefresh.png';
import video from '../source/img/full-goods/video/Rectangle.png';
import imgBG from '../source/img/home/about/Vector.png';
import imgGroup1 from '../source/img/full-goods/payment/Maskgroup.svg';
import imgGroup2 from '../source/img/full-goods/payment/OBJECTS.svg';
import imgGroup3 from '../source/img/full-goods/payment/Maskgroup2.svg';

const FullGoods = () => {
	return (
		<article className="main__full-goods full-goods">
			<section className="full-goods__container container">
				<Title name={'КремДео "BeeFresh" (18 мл)'} goIn={'в магазин'} linck={'/'} />
				<div className="full-goods__inf-goods ">
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
										<s>180</s>
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
								способность и восстанавливает защитный барьер. Фитостеролы абиссинской горчицы содержат редкую эруковую кислоту и увеличивают степень
								гидратации кожи более чем на 60%. Гликосфинголипидный комплекс провоцирует синтез собственных церамидов. Масло муса из мякоти и кожуры
								бананов интенсивно питает и смягчает кожу, уменьшает выраженность пигментных пятен. Экстракты овса, льна и пажитника обладают мощными
								омолаживающими, питательными и регенерирующими действиями.
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="full-goods__coments">
				<div className="full-goods__container container">
					<Title name={'коментарі'} goIn={'залишить коментар'} linck={'/'} />

					<div className="full-goods__content">
						<div className="full-goods__coment">
							<div>
								<p>user</p>
								<p>25 червня 2023</p>
								<div className="full-goods__coment-rating">
									<div className="full-goods__coment-items">
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item activ">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
									</div>
								</div>
							</div>
							<div>
								<div className="full-goods__coment-name-goods">
									<p>Оценка продукта : Маска "Ефект" (150 г) </p>
								</div>
								<div className="full-goods__coment-body">
									Экстракты овса, льна и пажитника обладают мощными омолаживающими, питательными и регенерирующими действиями.
								</div>
							</div>
						</div>
						<div className="full-goods__coment">
							<div>
								<p>user</p>
								<p>25 червня 2023</p>
								<div className="full-goods__coment-rating">
									<div className="full-goods__coment-items">
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item activ">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
									</div>
								</div>
							</div>
							<div>
								<div className="full-goods__coment-name-goods">
									<p>Оценка продукта : Маска "Ефект" (150 г) </p>
								</div>
								<div className="full-goods__coment-body">
									Экстракты овса, льна и пажитника обладают мощными омолаживающими, питательными и регенерирующими действиями.
								</div>
							</div>
						</div>
						<div className="full-goods__coment">
							<div>
								<p>user</p>
								<p>25 червня 2023</p>
								<div className="full-goods__coment-rating">
									<div className="full-goods__coment-items">
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item activ">★</div>
										<div className="full-goods__coment-item">★</div>
									</div>
								</div>
							</div>
							<div>
								<div className="full-goods__coment-name-goods">
									<p>Оценка продукта : Маска "Ефект" (150 г) </p>
								</div>
								<div className="full-goods__coment-body">
									Экстракты овса, льна и пажитника обладают мощными омолаживающими, питательными и регенерирующими действиями.
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="full-goods__peyment">
				<div className="full-goods__container container">
					<Title name={'оплата и доставка'} goIn={'все условия'} linck={'/'} />
				</div>
				<div className="full-goods__peyment-content">
					<div className="full-goods__container container">
						<div className="full-goods__peyment-icons">
							<div className="full-goods__peyment-icon">
								<img src={imgGroup3} alt="" />

								<p>Оплата при получении</p>
							</div>
							<div className="full-goods__peyment-icon">
								<img src={imgGroup1} alt="" />

								<p>быстрая доставка</p>
							</div>
							<div className="full-goods__peyment-icon">
								<img src={imgGroup2} alt="" />

								<p>деревянная упаковка</p>
							</div>
						</div>
					</div>
					<div className="full-goods__peyment-content_bg">
						<img src={imgBG} alt="ibg" />
					</div>
				</div>
			</section>
			<section className="full-goods__related">
				<div className="full-goods__container container">
					<Title name={'сопутствующие товары '} goIn={'показать ещё'} linck={'/'} />

					<div className="full-goods__content-related">
						<Item />
						<Item />
						<Item />
						<Item />
					</div>
				</div>
			</section>

			{/* <div className=" full-goods__add-coment">
				<AddComent />
			</div> */}
		</article>
	);
};

export default FullGoods;
