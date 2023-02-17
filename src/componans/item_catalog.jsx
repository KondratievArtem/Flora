import imgBasket from '../source/img/ikon/basket-w.svg';
import imgKremdeo from '../source/img/home/kremdeo-beefresh.png';
import ok from '../source/img/ikon/ok.svg';
import plus from '../source/img/ikon/plus.svg';
import minus from '../source/img/ikon/minus.svg';
import '../scss/components/item_catalog.scss';

const Item = () => {
	return (
		<div className="cart-catalog">
			<div className="cart-catalog__sell">
				<span>20%</span>
			</div>
			<div className="cart-catalog__body">
				<div className="cart-catalog__img ibg">
					<img src={imgKremdeo} alt="cart-catalog-img" />
				</div>
				<div className="cart-catalog__name">
					<span>КремДео "BeeFresh" (18 мл)</span>
				</div>
				<div className="cart-catalog__price">
					<p>160 грн</p>
					<div className="cart-catalog__in-basket">
						<button> в кошик</button>
					</div>
					{/* <div className="cart-catalog__add-basket">
						<div className="cart-catalog__counter">
							<div className="cart-catalog__plus">
								<img src={plus} alt="+" />
							</div>
							<div className="cart-catalog__all">1</div>
							<div className="cart-catalog__minus">
								<img src={minus} alt="" />
							</div>
						</div>
						<div className="cart-catalog__add-basket-img">
							<img src={imgBasket} alt="basket" />
						</div>
					</div> */}
					{/* <div className="cart-catalog__ok-basket">
						<img src={ok} alt="ok" />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Item;
