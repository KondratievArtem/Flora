import '../scss/components/sign-in.scss';

const SignIn = () => {
	return (
		<article className="sign-in">
			<div className="sign-in__container">
				<form action="#" className="sign-in__body">
					<div className="sign-in__title">
						<h2>ВХОД</h2>
						<div className="sign-in__close"></div>
					</div>
					<div className="sign-in__body-content">
						<div className="sign-in__email">
							<label htmlFor="email">Email адрес</label>
							<input type="mailo" placeholder="Email адрес" />
						</div>
						<div className="sign-in__password">
							<label htmlFor="Пароль">Пароль</label>
							<input type="password" placeholder="Пароль" />
						</div>
						<div className="sign-in__linck">
							<a href="/">Забыли свой пароль?</a>
							<a href="/">Регистрация?</a>
						</div>
					</div>
					<div className="sign-in__button">
						<button type="submit">ВХОД</button>
					</div>
				</form>
			</div>
		</article>
	);
};

export default SignIn;
