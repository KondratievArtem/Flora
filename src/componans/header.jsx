import '../scss/components/header.scss';
import logo from '../source/img/logo/image 2.png';
import imgBasket from '../source/img/ikon/bascket.svg';
import imgUser from '../source/img/ikon/user.svg';
import imgSearch from '../source/img/ikon/search.svg';

const Header = () => {
	return (
		<>
			<div className="header__container container">
				<nav className="header__content">
					<div className="header__nav-blog nav-blog">
						<div className="nav-blog__top">
							<label>
								<img src={imgSearch} alt="search" />
								<input type="text" />
							</label>
						</div>
						<div className="nav-blog__bottom">
							<a href="/">
								<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<title />
									<g data-name="ig instagram insta photo" id="ig_instagram_insta_photo">
										<path d="M20.45,13.32a1,1,0,0,0-.57,1.3,4,4,0,1,1-2.31-2.3,1,1,0,1,0,.71-1.87,6,6,0,0,0-6.37,9.85,6,6,0,0,0,8.48,0,6,6,0,0,0,1.36-6.41A1,1,0,0,0,20.45,13.32Z" />
										<circle cx="23" cy="9" r="1" />
										<path d="M28,9a5,5,0,0,0-4.9-5h0A77.11,77.11,0,0,0,9,4,5,5,0,0,0,4,8.92,91.91,91.91,0,0,0,4,23a5,5,0,0,0,4.9,5h0c2.36.22,4.73.34,7.1.34s4.71-.11,7.05-.34A5,5,0,0,0,28,23.08,87.09,87.09,0,0,0,28,9ZM26,23a3,3,0,0,1-3,3h-.1A71.73,71.73,0,0,1,9,26a3,3,0,0,1-3-3.08A92.4,92.4,0,0,1,6,9,3,3,0,0,1,9.09,6q3.44-.31,6.9-.32T23,6a3,3,0,0,1,3,3.08A85.13,85.13,0,0,1,26,23Z" />
									</g>
								</svg>
							</a>

							<a href="/">
								<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<title />
									<g data-name="youtube youtuber video play" id="youtube_youtuber_video_play">
										<path d="M30,12a5.71,5.71,0,0,0-5.31-5.7C18.92,6,13.06,6,7.33,6.28,4.51,6.28,2,9,2,12a43.69,43.69,0,0,0,0,8.72,5.32,5.32,0,0,0,5.28,5.33h0q4.35.24,8.72.24t8.67-.23A5.34,5.34,0,0,0,30,20.8,31.67,31.67,0,0,0,30,12Zm-2,8.63a.49.49,0,0,0,0,.12,3.36,3.36,0,0,1-3.39,3.34,166,166,0,0,1-17.28,0A3.36,3.36,0,0,1,4,20.65a42,42,0,0,1,0-8.47.45.45,0,0,0,0-.11A3.78,3.78,0,0,1,7.38,8.28c2.86-.13,5.74-.19,8.62-.19s5.76.06,8.62.19h.05c1.71,0,3.33,1.84,3.33,3.79a.76.76,0,0,0,0,.15A30.11,30.11,0,0,1,28,20.61Z" />
										<path d="M20.79,15.51l-7.14-3.68a1,1,0,1,0-.92,1.78l5.43,2.79-4,2.07V16.4a1,1,0,0,0-2,0v3.72a1,1,0,0,0,1,1,1,1,0,0,0,.46-.11l7.14-3.72a1,1,0,0,0,.54-.89A1,1,0,0,0,20.79,15.51Z" />
									</g>
								</svg>
							</a>

							<a href="/">
								<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<title />
									<g data-name="facebook fb face book" id="facebook_fb_face_book">
										<path d="M24,3H8A5,5,0,0,0,3,8V24a5,5,0,0,0,5,5h8a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H15V17h1a1,1,0,0,0,1-1V12.5A2.5,2.5,0,0,1,19.5,10H22v2H21a2,2,0,0,0-2,2v2a1,1,0,0,0,1,1h1.72l-.5,2H20a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V21h1a1,1,0,0,0,1-.76l1-4a1,1,0,0,0-.18-.86A1,1,0,0,0,23,15H21V14h2a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H19.5A4.51,4.51,0,0,0,15,12.5V15H14a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1v6H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5H24a3,3,0,0,1,3,3V24a3,3,0,0,1-3,3H20a1,1,0,0,0,0,2h4a5,5,0,0,0,5-5V8A5,5,0,0,0,24,3Z" />
									</g>
								</svg>
							</a>
						</div>
					</div>
					<div className="header__list">
						<a href="/">магазин</a>
						<a href="/">знишки</a>
						<a href="/">про нас</a>
					</div>
					<div className="header__logo">
						<a href="/">
							<img src={logo} alt="logo" />
						</a>
					</div>
					<div className="header__list">
						<a href="/">блог</a>
						<a href="/">відгуки</a>
						<a href="/">партнери</a>
					</div>
					<div className="header__nav-blog header__nav-blog_mod nav-blog ">
						<div className="nav-blog__top">
							<a href="/">+38 (000) 000-00-00</a>
						</div>
						<div className="nav-blog__bottom">
							<div className="header__select select">
								<div className="select__curent">
									<p>UA</p>
								</div>
								<div className="select__pob-pab">
									<div>EN</div>
									<div>PL</div>
								</div>
							</div>
							<a href="/">
								<img src={imgBasket} alt="bascket" />
							</a>
							<a href="/">
								<img src={imgUser} alt="user" />
							</a>
						</div>
					</div>

					<div className="header__menu menu">
						<div className="menu__bar">
							<div className="nav-blog__top">
								<label>
									<img src={imgSearch} alt="search" />
									<input type="text" />
								</label>
							</div>
							<div className="nav-blog__bottom">
								<div className="header__select select">
									<div className="select__curent">
										<p>UA</p>
									</div>
									<div className="select__pob-pab">
										<div>EN</div>
										<div>PL</div>
									</div>
								</div>
								<a href="/">
									<img src={imgBasket} alt="bascket" />
								</a>
								<a href="/">
									<img src={imgUser} alt="user" />
								</a>
							</div>
						</div>
						<div className="menu__list">
							<a href="/">магазин</a>
							<a href="/">знишки</a>
							<a href="/">про нас</a>
							<a href="/">блог</a>
							<a href="/">відгуки</a>
							<a href="/">партнери</a>
						</div>

						{/* <div className="nav-blog__bottom">
							<a href="/">
								<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<title />
									<g data-name="ig instagram insta photo" id="ig_instagram_insta_photo">
										<path d="M20.45,13.32a1,1,0,0,0-.57,1.3,4,4,0,1,1-2.31-2.3,1,1,0,1,0,.71-1.87,6,6,0,0,0-6.37,9.85,6,6,0,0,0,8.48,0,6,6,0,0,0,1.36-6.41A1,1,0,0,0,20.45,13.32Z" />
										<circle cx="23" cy="9" r="1" />
										<path d="M28,9a5,5,0,0,0-4.9-5h0A77.11,77.11,0,0,0,9,4,5,5,0,0,0,4,8.92,91.91,91.91,0,0,0,4,23a5,5,0,0,0,4.9,5h0c2.36.22,4.73.34,7.1.34s4.71-.11,7.05-.34A5,5,0,0,0,28,23.08,87.09,87.09,0,0,0,28,9ZM26,23a3,3,0,0,1-3,3h-.1A71.73,71.73,0,0,1,9,26a3,3,0,0,1-3-3.08A92.4,92.4,0,0,1,6,9,3,3,0,0,1,9.09,6q3.44-.31,6.9-.32T23,6a3,3,0,0,1,3,3.08A85.13,85.13,0,0,1,26,23Z" />
									</g>
								</svg>
							</a>

							<a href="/">
								<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<title />
									<g data-name="youtube youtuber video play" id="youtube_youtuber_video_play">
										<path d="M30,12a5.71,5.71,0,0,0-5.31-5.7C18.92,6,13.06,6,7.33,6.28,4.51,6.28,2,9,2,12a43.69,43.69,0,0,0,0,8.72,5.32,5.32,0,0,0,5.28,5.33h0q4.35.24,8.72.24t8.67-.23A5.34,5.34,0,0,0,30,20.8,31.67,31.67,0,0,0,30,12Zm-2,8.63a.49.49,0,0,0,0,.12,3.36,3.36,0,0,1-3.39,3.34,166,166,0,0,1-17.28,0A3.36,3.36,0,0,1,4,20.65a42,42,0,0,1,0-8.47.45.45,0,0,0,0-.11A3.78,3.78,0,0,1,7.38,8.28c2.86-.13,5.74-.19,8.62-.19s5.76.06,8.62.19h.05c1.71,0,3.33,1.84,3.33,3.79a.76.76,0,0,0,0,.15A30.11,30.11,0,0,1,28,20.61Z" />
										<path d="M20.79,15.51l-7.14-3.68a1,1,0,1,0-.92,1.78l5.43,2.79-4,2.07V16.4a1,1,0,0,0-2,0v3.72a1,1,0,0,0,1,1,1,1,0,0,0,.46-.11l7.14-3.72a1,1,0,0,0,.54-.89A1,1,0,0,0,20.79,15.51Z" />
									</g>
								</svg>
							</a>

							<a href="/">
								<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
									<title />
									<g data-name="facebook fb face book" id="facebook_fb_face_book">
										<path d="M24,3H8A5,5,0,0,0,3,8V24a5,5,0,0,0,5,5h8a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H15V17h1a1,1,0,0,0,1-1V12.5A2.5,2.5,0,0,1,19.5,10H22v2H21a2,2,0,0,0-2,2v2a1,1,0,0,0,1,1h1.72l-.5,2H20a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V21h1a1,1,0,0,0,1-.76l1-4a1,1,0,0,0-.18-.86A1,1,0,0,0,23,15H21V14h2a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H19.5A4.51,4.51,0,0,0,15,12.5V15H14a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1v6H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5H24a3,3,0,0,1,3,3V24a3,3,0,0,1-3,3H20a1,1,0,0,0,0,2h4a5,5,0,0,0,5-5V8A5,5,0,0,0,24,3Z" />
									</g>
								</svg>
							</a>
						</div> */}
					</div>

					<div className="header__menu-burger menu-burger">
						<div className="menu-burger__icon">
							<span></span>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Header;
