// components
import Title from '../componans/title';
import Item from '../componans/item';
// stayl
import '../scss/page/basket.scss';
// img
import img from '../source/img/goods/kremdeo.png';
import minus from '../source/img/ikon/minus.svg';
import imgKremdeo from '../source/img/home/kremdeo-beefresh.png';

const BasketPage = () => {
	return (
		<article className="basket-page">
			<div className="basket-page__container container">
				<div className="basket-page__title">
					<Title name={'моя корзина'} goIn={'В МАГАЗИН'} linck={'/'} />
				</div>
				<div className="basket-page__body">
					<div className="basket-page__column">
						<div className="basket-page__all-sum">
							<h4>ЗАКАЗ НА СУММУ 160 грн</h4>
						</div>
						<div className="basket-page__cart-goods cart-goods">
							<div className="cart-goods__img">
								<img src={img} alt="goods" />
							</div>
							<div className="cart-goods__body">
								<div className="cart-goods__body-header">
									<div className="cart-goods__body-title">
										<h6>КремДео "BeeFresh" (18 мл)</h6>
									</div>
									<div className="cart-goods__body-close">
										<div></div>
									</div>
								</div>
								<div className="cart-goods__body-count">
									<p>Количество 1</p>
								</div>
								<div className="cart-goods__body-button">
									<div className="cart-goods__body-button-plus">+</div>
									<div className="cart-goods__body-button-count">1</div>
									<div className="cart-goods__body-button-minus"> −</div>
								</div>
								<div className="cart-goods__body-payable">
									<div>
										<b>Итого к оплате:</b>
									</div>
									<div className="cart-goods__body-payable-sum body-payable-sum">
										<div className="body-payable-sum__old">
											<s>180</s>
											<span>-20%</span>
										</div>
										<div className="body-payable-sum__new">
											<b>160 грн</b>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="basket-page__cart-goods cart-goods">
							<div className="cart-goods__img">
								<img src={img} alt="goods" />
							</div>
							<div className="cart-goods__body">
								<div className="cart-goods__body-header">
									<div className="cart-goods__body-title">
										<h6>КремДео "BeeFresh" (18 мл)</h6>
									</div>
									<div className="cart-goods__body-close">
										<div></div>
									</div>
								</div>
								<div className="cart-goods__body-count">
									<p>Количество 1</p>
								</div>
								<div className="cart-goods__body-button">
									<div className="cart-goods__body-button-plus">+</div>
									<div className="cart-goods__body-button-count">1</div>
									<div className="cart-goods__body-button-minus"> −</div>
								</div>
								<div className="cart-goods__body-payable">
									<div>
										<b>Итого к оплате:</b>
									</div>
									<div className="cart-goods__body-payable-sum body-payable-sum">
										<div className="body-payable-sum__old">
											<s>180</s>
											<span>-20%</span>
										</div>
										<div className="body-payable-sum__new">
											<b>160 грн</b>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="basket-page__cart-goods cart-goods">
							<div className="cart-goods__img">
								<img src={img} alt="goods" />
							</div>
							<div className="cart-goods__body">
								<div className="cart-goods__body-header">
									<div className="cart-goods__body-title">
										<h6>КремДео "BeeFresh" (18 мл)</h6>
									</div>
									<div className="cart-goods__body-close">
										<div></div>
									</div>
								</div>
								<div className="cart-goods__body-count">
									<p>Количество 1</p>
								</div>
								<div className="cart-goods__body-button">
									<div className="cart-goods__body-button-plus">+</div>
									<div className="cart-goods__body-button-count">1</div>
									<div className="cart-goods__body-button-minus"> −</div>
								</div>
								<div className="cart-goods__body-payable">
									<div>
										<b>Итого к оплате:</b>
									</div>
									<div className="cart-goods__body-payable-sum body-payable-sum">
										<div className="body-payable-sum__old">
											<s>180</s>
											<span>-20%</span>
										</div>
										<div className="body-payable-sum__new">
											<b>160 грн</b>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="basket-page__cart-goods cart-goods">
							<div className="cart-goods__img">
								<img src={img} alt="goods" />
							</div>
							<div className="cart-goods__body">
								<div className="cart-goods__body-header">
									<div className="cart-goods__body-title">
										<h6>КремДео "BeeFresh" (18 мл)</h6>
									</div>
									<div className="cart-goods__body-close">
										<div></div>
									</div>
								</div>
								<div className="cart-goods__body-count">
									<p>Количество 1</p>
								</div>
								<div className="cart-goods__body-button">
									<div className="cart-goods__body-button-plus">+</div>
									<div className="cart-goods__body-button-count">1</div>
									<div className="cart-goods__body-button-minus"> −</div>
								</div>
								<div className="cart-goods__body-payable">
									<div>
										<b>Итого к оплате:</b>
									</div>
									<div className="cart-goods__body-payable-sum body-payable-sum">
										<div className="body-payable-sum__old">
											<s>180</s>
											<span>-20%</span>
										</div>
										<div className="body-payable-sum__new">
											<b>160 грн</b>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="basket-page__column">
						<div className="basket-page__button">
							<a href="/">ПЕРЕЙТИК ОФОРМЛЕНИЮ ЗАКАЗА</a>
						</div>
					</div>
				</div>
				<div className="basket-page__footer">
					<div className="basket-page__footer-title">
						<Title name={'вам может понравиться'} goIn={'показать ещё '} linck={'/'} />
					</div>
					<div className="basket-page__footer-body">
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
						<Item img={imgKremdeo} link={'/'} price={160} name={'КремДео "BeeFresh" (18 мл)'} />
					</div>
				</div>
			</div>
		</article>
	);
};

export default BasketPage;
