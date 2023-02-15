import stayl from './footer.module.scss';
import youToub from '../../source/img/ikon/youToub.svg';
import faceBoock from '../../source/img/ikon/faceBoock.svg';

const Footer = () => {
	return (
		<>
			<div className="footer__container container">
				<div className={stayl.body}>
					<div className={stayl.column}>
						<div className={stayl.title}>
							<h4>підписка</h4>
						</div>
						<form className={stayl.column__body}>
							<div>
								<input type="text" name="name" placeholder="ваше ім'я" />
							</div>
							<div>
								<input type="text" name="phone" placeholder="телефон" />
							</div>
							<div>
								<p>Отримуйте наші самі свіжі новини, інформацію про акції та знижки</p>
							</div>
							<button type="sabmit">відправить</button>
						</form>
						<div className={stayl.sociale}>
							<div>
								<a href="/">
									<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_43_783)">
											<path
												d="M11.3691 0H30.631C36.9 0 42 5.10003 42 11.369V30.6312C42 36.8999 36.9 41.9999 30.631 41.9999H11.3688C5.10011 41.9999 8.01086e-05 36.8999 8.01086e-05 30.6312V11.369C8.01086e-05 5.10003 5.10011 0 11.3691 0V0ZM2.4623 30.6312C2.4623 35.5422 6.45779 39.5377 11.3691 39.5377H30.631C35.5423 39.5377 39.5378 35.5422 39.5378 30.6312V11.369C39.5378 6.45771 35.5423 2.46221 30.631 2.46221H11.3688C6.45779 2.46221 2.4623 6.45771 2.4623 11.369V30.6312Z"
												fill="white"
											/>
											<path
												d="M21.0001 9.51587C27.3325 9.51587 32.4841 14.6675 32.4841 20.9999C32.4841 27.3323 27.3325 32.4839 21.0001 32.4839C14.6677 32.4839 9.51606 27.3323 9.51606 20.9999C9.51606 14.6675 14.6677 9.51587 21.0001 9.51587ZM21.0001 30.0217C25.9745 30.0217 30.0219 25.9746 30.0219 20.9999C30.0219 16.0255 25.9745 11.9781 21.0001 11.9781C16.0254 11.9781 11.9783 16.0255 11.9783 20.9999C11.9783 25.9746 16.0254 30.0217 21.0001 30.0217Z"
												fill="white"
											/>
											<path
												d="M9.24137 5.4375C11.1127 5.4375 12.6348 6.95988 12.6348 8.8309C12.6348 10.7022 11.1127 12.2246 9.24137 12.2246C7.37004 12.2246 5.84765 10.7022 5.84765 8.8309C5.84765 6.95956 7.37004 5.4375 9.24137 5.4375ZM9.24137 9.76208C9.75471 9.76208 10.1726 9.34423 10.1726 8.8309C10.1726 8.31724 9.75471 7.89971 9.24137 7.89971C8.72771 7.89971 8.30987 8.31724 8.30987 8.8309C8.30987 9.34423 8.72771 9.76208 9.24137 9.76208Z"
												fill="white"
											/>
										</g>
										<defs>
											<clipPath id="clip0_43_783">
												<rect width="42" height="42" fill="white" transform="matrix(-1 0 0 1 42 0)" />
											</clipPath>
										</defs>
									</svg>
								</a>
							</div>
							<div>
								<a href="/">
									<img src={youToub} alt="" />
								</a>
							</div>
							<div>
								<a href="/">
									<img src={faceBoock} alt="" />
								</a>
							</div>
						</div>
					</div>
					<div className={stayl.column}>
						<div className={stayl.title}>
							<h4>FLORI</h4>
						</div>
						<div className={stayl.column__body}>
							<ul>
								<li>
									<a href="/">магазин</a>
								</li>
								<li>
									<a href="/">доставка і оплата</a>
								</li>
								<li>
									<a href="/">особистий кабінет</a>
								</li>
								<li>
									<a href="/">партнерам</a>
								</li>
								<li>
									<a href="/">блог</a>
								</li>
								<li>
									<a href="/">про нас</a>
								</li>
							</ul>
						</div>
					</div>
					<div className={stayl.column}>
						<div className={stayl.title}>
							<h4>контакти</h4>
						</div>
						<div className={stayl.column__body}>
							<ul>
								<li>
									<b>Верстку виконав</b>
									<a href="https://kondratievartem.github.io/landing/">Артем Кондратьєв</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
