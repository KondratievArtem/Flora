import '../scss/components/card-add.scss';
import imCrem from '../source/img/home/kremdeo-beefresh.png';

const AddGoods = () => {
	return (
		<div className="add-goods">
			<div className="add-goods__wrapper">
				<div className="add-goods__title">
					<h3>товар добавлен в корзину</h3>
					<div className="add-goods__clouse"></div>
				</div>
				<div className="add-goods__body">
					<div className="add-goods__content">
						<div className="add-goods__content-img ibg">
							<img src={imCrem} alt="img-goods" />
						</div>
						<div className="add-goods__content-info">
							<div className="add-goods__content-name">КремДео "BeeFresh" (18 мл)</div>
							<div className="add-goods__content-number">Количество 1</div>
							<div className="add-goods__content-conclusion">
								<div className="add-goods__content-conclusion-inf">
									<p>Итого к оплате:</p>
								</div>
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
						</div>
					</div>

					<div className="add-goods__info">
						<p>
							Добавьте в корзину товаров еще на 580 грн и доставка будет Бесплатной! А при заказе на 850 грн в посылке Вы получите карточку на скидку
							20%.
						</p>
					</div>
					<div className="add-goods__buttons">
						<a href="/" className="add-goods__button">
							продовжить купівлю
						</a>
						<a href="/" className="add-goods__button add-goods__button_mod">
							оформить замовлення
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddGoods;
