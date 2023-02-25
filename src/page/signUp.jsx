// castom
import '../scss/page/sign-up.scss';
// components
import Title from '../componans/title';

const SignUp = () => {
	return (
		<article className="sign-up">
			<div className="sign-up__container container">
				<div className="sign-up__title">
					<Title name={'Создание учетной записи'} goIn={'назад'} linck={'/'} />
				</div>
				<div className="sign-up__text">
					<h2>Заполните данные о себе</h2>
				</div>
				<div className="sign-up__body">
					<form className="sign-up__body-form" action="#">
						<div>
							<div className="sign-up__body-form-title">
								<h3>Обращение</h3>
							</div>
							<div className="sign-up__body-form-inputs sign-up__body-form-inputs_gender">
								<div>
									<input className="check-fallov__input" type="radio" defaultChecked id="woman" name="gender" value="woman" />
									<label className="check-fallov__label" htmlFor="woman">
										Гражданинка
									</label>
								</div>
								<div>
									<input className="check-fallov__input" type="radio" id="man" name="gender" value="man" />
									<label className="check-fallov__label" htmlFor="man">
										Гражданин
									</label>
								</div>
							</div>
						</div>
						<div>
							<div className="sign-up__body-form-title">
								<h3>Личные данные</h3>
							</div>
							<div className="sign-up__body-form-inputs">
								<div>
									<input type="text" name="gender" placeholder="Имя" />
									<input type="password" name="first-password" placeholder="Пароль" />
								</div>
								<div>
									<input type="text" name="last-name" placeholder="Фамилия" />
									<input type="maile" name="emaile" placeholder="Электронный адрес" />
								</div>
							</div>
						</div>
						<div>
							<div className="sign-up__body-form-title">
								<h3>Дата рождения</h3>
							</div>
							<div className="sign-up__body-form-inputs sign-up__body-form-inputs_select">
								<div className="select-data">
									<div className="select-data__curent">
										<span>5</span>
										<i></i>
									</div>
									<div className="select-data__datalist">
										<div className="select-data__wrapper">
											<div className="select-data__option">0</div>
											<div className="select-data__option">1</div>
											<div className="select-data__option">2</div>
											<div className="select-data__option">3</div>
											<div className="select-data__option">4</div>
											<div className="select-data__option">5</div>
											<div className="select-data__option">6</div>
											<div className="select-data__option">7</div>
											<div className="select-data__option">8</div>
											<div className="select-data__option">9</div>
										</div>
									</div>
								</div>
								<div className="select-data">
									<div className="select-data__curent">
										<span>апрель</span>
										<i></i>
									</div>
									<div className="select-data__datalist">
										<div className="select-data__wrapper">
											<div className="select-data__option">январь</div>
											<div className="select-data__option">февраль</div>
											<div className="select-data__option">март</div>
											<div className="select-data__option">апрель</div>
											<div className="select-data__option">май</div>
											<div className="select-data__option">июнь</div>
											<div className="select-data__option">июль</div>
											<div className="select-data__option">август</div>
											<div className="select-data__option">сентабрь</div>
											<div className="select-data__option">октябрь</div>
											<div className="select-data__option">ноябрь</div>
											<div className="select-data__option">декабрь</div>
										</div>
									</div>
								</div>
								<div className="select-data">
									<div className="select-data__curent">
										<span>1992</span>
										<i></i>
									</div>
									<div className="select-data__datalist">
										<div className="select-data__wrapper">
											<div className="select-data__option">1992</div>
											<div className="select-data__option">1993</div>
											<div className="select-data__option">1994</div>
											<div className="select-data__option">1995</div>
											<div className="select-data__option">1996</div>
											<div className="select-data__option">1997</div>
											<div className="select-data__option">1998</div>
											<div className="select-data__option">1999</div>
											<div className="select-data__option">2000</div>
											<div className="select-data__option">2001</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="sign-up__body-form-title">
								<h3>Спонсорская программа</h3>
							</div>
							<div className="sign-up__body-form-inputs">
								<input type="text" name="referal" placeholder="Код или E-mail адрес Вашего спонсора" />
							</div>
						</div>
						<div>
							<div className="sign-up__body-form-inputs">
								<input className="check-fallov__input" type="checkbox" name="fallow" id="fallow" />
								<label className="check-fallov__label check-fallov__label_mod" htmlFor="fallow">
									Подписаться на нашу рассылку!
								</label>
							</div>
						</div>
						<div>
							<button type="submit">зарегистрироваться</button>
						</div>
					</form>
				</div>
			</div>
		</article>
	);
};

export default SignUp;
