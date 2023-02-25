// stayil
import '../scss/page/quick-order.scss';
// components
import Title from '../componans/title';
// img
import img from '../source/quick-ofert/kremdeo.png';
import imgN from '../source/quick-ofert/147.png';
import imgO from '../source/quick-ofert/1473.png';
const QuickOrder = () => {
	return (
		<article className="quick-order">
			<div className="quick-order__container container">
				<div className="quick-order__title">
					<Title name={'Быстрое Оформление'} goIn={'назад в корзину'} linck={'/'} />
				</div>
				<div className="quick-order__body">
					<div className="quick-order__body-title">
						<h2>Заполните данные о себе, а также выберите способ и адрес доставки</h2>
					</div>
					<div className="quick-order__body-columns column">
						<div className="column__body">
							<form className="column__form">
								<div>
									<div className="column-body__title">
										<h6>Мой заказ</h6>
									</div>
									<div className="column-body__goods">
										<div className="column-body__goods-img">
											<img src={img} alt="goods" />
										</div>
										<div className="column-body__goods-img">
											<img src={img} alt="goods" />
										</div>
										<div className="column-body__goods-img">
											<img src={img} alt="goods" />
										</div>
									</div>
								</div>
								<div>
									<div className="column__form-title">
										<h6>Личные данные</h6>
									</div>
									<div className="column-body__form-input-body">
										<div className="column-body__form-input">
											<input type="text" name="first-name" placeholder="Имя" />
											<input type="phone" name="phone" placeholder="Телефон" />
										</div>
										<div className="column-body__form-input">
											<input type="text" name="last-name" placeholder="Фамилия" />
											<input type="meile" name="maile" placeholder="Электронный адрес" />
										</div>
									</div>
								</div>
								<div>
									<div className="column__form-title">
										<h6>Авторизация</h6>
									</div>
									<div className="column-body__form-input-body">
										<div className="column-body__form-input">
											<input type="password" name="first-password" placeholder="Пароль" />
										</div>
										<div className="column-body__form-input">
											<input type="password" name="last-password" placeholder="Подтвердите пароль" />
										</div>
									</div>
								</div>
								<div>
									<div className="column__form-title">
										<h6>Адрес доставки</h6>
									</div>
									<div className="column-body__form-input-body">
										<div className="column-body__form-input">
											<input type="text" name="index" placeholder="Индекс" />
											<input type="text" name="house" placeholder="Дом/Корпус" />
										</div>
										<div className="column-body__form-input">
											<input type="text" name="strit" placeholder="Улица" />
											<input type="text" name="partament" placeholder="Квартира" />
										</div>
									</div>
									<div className="column-body__form-input column-body__form-input_mod">
										<input type="text" name="coments" placeholder="Комментарий к заказу" />
									</div>
								</div>
								<div>
									<div className="column__form-title">
										<h6>Способ доставки</h6>
										<h6>Способ оплаты</h6>
									</div>
									<div className="column-body__form-input_tabl">
										<div>
											<input type="radio" id="delExp" name="deliveri" value="Нова пошта 1-2 дня, стоимость от 50 грн." />
											<label htmlFor="delExp">
												<img src={imgN} alt="deliveri" />
											</label>
										</div>

										<div className="column-body__form-description">
											<em>Нова пошта</em>
											<p>1-2 дня, стоимость от 50 грн.</p>
										</div>
										<div className="column-body__form-sum">
											<em>50 грн</em>
										</div>
									</div>
									<div className="column-body__form-input_tabl activ">
										<div>
											<input type="radio" defaultChecked id="delExp2" name="deliveri" value="Нова пошта 1-2 дня, стоимость от 50 грн." />
											<label htmlFor="delExp2">
												<img src={imgN} alt="deliveri" />
											</label>
										</div>

										<div className="column-body__form-description">
											<em>(післяплата)</em>
											<p>1-2 дня, стоимость от 50 грн + наложенный платёж</p>
										</div>
										<div className="column-body__form-sum">
											<em>50 грн</em>
										</div>
									</div>
									<div className="column-body__form-input_tabl">
										<div>
											<input type="radio" id="del" name="deliveri" value="Нова пошта 1-2 дня, стоимость от 50 грн." />
											<label htmlFor="del">
												<img src={imgO} alt="deliveri" />
											</label>
										</div>

										<div className="column-body__form-description">
											<em>Нова пошта</em>
											<p>1-2 дня, стоимость от 50 грн.</p>
										</div>
										<div className="column-body__form-sum">
											<em>50 грн</em>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="column__body">
							<div className="column__title">
								<h3>Итого: 160 ГРН</h3>
							</div>
							<form className="column__body-form-body">
								<div>
									<span>Количество товаров</span>
									<span>1</span>
								</div>
								<div>
									<span>На сумму</span>
									<span>160 грн</span>
								</div>
								<div>
									<span>Доставка</span>
									<span>0 грн</span>
								</div>
								<div>
									<label htmlFor="vaucher">Код для скидки</label>
									<input id="vaucher" type="text" name="promo-code" placeholder="Код ваучера" />
								</div>
								<div className="column__body-form-body-sell">
									<span>Скидка</span>
									<span>0 грн</span>
								</div>
								<div className="column__body-form-body-info">
									<em>Сумма недостающая для бесплатной доставки: 580 грн</em>
								</div>
								<div>
									<input type="checkbox" id="ofert" name="conditions" />
									<label className="checkbox" htmlFor="ofert">
										Я соглашаюсь с договором публичной оферты (читать)
									</label>
								</div>
								<div>
									<button type="submit">ПОДТВЕРДИТЬ ЗАКАЗ</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default QuickOrder;
