import imgBasket from '../source/img/ikon/basket-w.svg';
import ok from '../source/img/ikon/ok.svg';
import plus from '../source/img/ikon/plus.svg';
import minus from '../source/img/ikon/minus.svg';
import '../scss/components/item.scss';

const Item = ({ img, link, price, name }) => {
	return (
		<div className="cart">
			<div className="cart__body">
				<div className="cart__img">
					<img src={img} alt="cart-img" />
				</div>
				<div className="cart__name">
					<span>{name}</span>
				</div>
				<div className="cart__price">
					<p>{price}грн</p>
					{/* <div className="cart__in-basket">
						<button> в кошик</button>
					</div> */}
					<div className="cart__add-basket">
						<div className="cart__counter">
							<div className="cart__plus">
								<img src={plus} alt="+" />
							</div>
							<div className="cart__all">1</div>
							<div className="cart__minus">
								<img src={minus} alt="" />
							</div>
						</div>
						<div className="cart__add-basket-img">
							<img src={imgBasket} alt="basket" />
						</div>
					</div>
					{/* <div className="cart__ok-basket">
						<img src={ok} alt="ok" />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Item;
