import '../scss/page/account.scss';
// components
import Title from '../componans/title';
// img
import arrow from '../source/img/account/Vector 24.svg';

const Account = () => {
	return (
		<div className="account-page">
			<div className="account-page__container container">
				<div className="account-page__title">
					<Title name={'Моя учетная запись'} goIn={'выход  из аккаунта'} linck={'/'} />
				</div>

				<div className="account-page__data data-account">
					<div className="data-account__button">
						<button>
							<span>ДОБАВИТЬ МОЙ АДРЕС</span>

							<img src={arrow} alt="arrow" />
						</button>
					</div>
					<div className="data-account__body">
						<div className="data-account__body-title">
							<h3>Чтобы добавить адрес, заполните эту форму:</h3>
						</div>
						<form className="data-account__body-content">
							<input type="text" placeholder="Имя" />
							<input type="text" placeholder="Фамилия" />
							<input type="text" placeholder="Телефон" />
							<input type="text" placeholder="Электронный адрес" />
							<input type="text" placeholder="Адрес" />
							<input type="text" placeholder="Адрес" />
							<input type="text" placeholder="Страна" />
						</form>
					</div>
				</div>
				<div className="account-page__data data-account activ">
					<div className="data-account__button">
						<button>
							<span>МОИ ЗАКАЗЫ</span>

							<img src={arrow} alt="arrow" />
						</button>
					</div>
					<div className="data-account__body">
						<div className="data-account__body-title">
							<h3>История заказов:</h3>
						</div>
						<div className="data-account__body-content">
							<div>
								<p>в розробци</p>
							</div>
						</div>
					</div>
				</div>
				<div className="account-page__data data-account activ">
					<div className="data-account__button">
						<button>
							<span>МОИ ВОЗВРАТЫ</span>

							<img src={arrow} alt="arrow" />
						</button>
					</div>
					<div className="data-account__body">
						<div className="data-account__body-title">
							<h3>История возвратов:</h3>
						</div>
						<div className="data-account__body-content">
							<div>
								<p>в розробци</p>
							</div>
						</div>
					</div>
				</div>
				<div className="account-page__data data-account activ">
					<div className="data-account__button">
						<button>
							<span>Кредитные квитанции</span>

							<img src={arrow} alt="arrow" />
						</button>
					</div>
					<div className="data-account__body">
						<div className="data-account__body-title">
							<h3>Квитанции, полученные после отмены заказа:</h3>
						</div>
						<div className="data-account__body-content">
							<div>
								<p>в розробци</p>
							</div>
						</div>
					</div>
				</div>
				<div className="account-page__data data-account activ">
					<div className="data-account__button">
						<button>
							<span>персональная информация</span>

							<img src={arrow} alt="arrow" />
						</button>
					</div>
					<div className="data-account__body">
						<div className="data-account__body-title">
							<h3>Обращение</h3>
						</div>
						<div className="data-account__body-content">
							<div>
								<p>в розробци</p>
							</div>
						</div>
					</div>
				</div>
				<div className="account-page__data data-account activ">
					<div className="data-account__button">
						<button>
							<span>Мои купоны</span>

							<img src={arrow} alt="arrow" />
						</button>
					</div>
					<div className="data-account__body">
						<div className="data-account__body-title">
							<h3>Мои купоны:</h3>
						</div>
						<div className="data-account__body-content">
							<div>
								<p>в розробци</p>
							</div>
						</div>
					</div>
				</div>
				<div className="account-page__data data-account activ">
					<div className="data-account__button">
						<button>
							<span>Мой бонусный счет</span>

							<img src={arrow} alt="arrow" />
						</button>
					</div>
					<div className="data-account__body">
						<div className="data-account__body-content">
							<div>
								<p>в розробци</p>
							</div>
						</div>
					</div>
				</div>
				<div className="account-page__data data-account activ">
					<div className="data-account__button">
						<button>
							<span>Мой бонусный счет</span>

							<img src={arrow} alt="arrow" />
						</button>
					</div>
					<div className="data-account__body">
						<div className="data-account__body-content">
							<div>
								<p>в розробци</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Account;
