// castom
import '../scss/page/article.scss';
// components
import Instagram from '../componans/instagram';
import Title from '../componans/title';
// img
import video from '../source/img/article/Rectangle.png';

const ArticlePage = () => {
	return (
		<article className="main__article-page article-page">
			<div className="article-page__container container">
				<div className="article-page__title">
					<Title name={"Здоров'я, краса та молодість - досягнення, доступні кожному."} goIn={'все статьи'} linck={'/'} />
				</div>
				<div className="article-page__body">
					<div className="about-page__content-video video">
						<div className="video__video-bg ibg">
							<img src={video} alt="video" />
						</div>
						<div className="video__body-text">
							<div className="video__title">
								<p>Описание</p>
							</div>
							<div className="video__text">
								<p>
									Целью нашей команды было создание абсолютно безопасной зубной пасты, крема и маски для кожи. Именно поэтому за основу мы взяли
									знания, которые принадлежали многим цивилизациям течении веков. Согласитесь, если какие-то вещества были полезными сто лет назад, то
									и сегодня они не потеряли свой оздоравливающий эффект.
								</p>
								<p>
									Наша продукция не содержит вредных консервантов, но может долго храниться благодаря веществам, которые нам подарила сама природа.
									Это премиальные эфирные масла Карел Хадек, соль и пчелиный воск, которые известны всему миру как очень мощные консервирующие и
									полезные вещества. Мы всегда открыты к сотрудничеству и будем рады видеть Ваши отзывы и комментарии.
								</p>
							</div>
						</div>
					</div>
					<div className="article-page__discription">
						<p>
							Целью нашей команды было создание абсолютно безопасной зубной пасты, крема и маски для кожи. Именно поэтому за основу мы взяли знания,
							которые принадлежали многим цивилизациям течении веков. Согласитесь, если какие-то вещества были полезными сто лет назад, то и сегодня
							они не потеряли свой оздоравливающий эффект.
						</p>
						<p>
							Наша продукция не содержит вредных консервантов, но может долго храниться благодаря веществам, которые нам подарила сама природа. Это
							премиальные эфирные масла Карел Хадек, соль и пчелиный воск, которые известны всему миру как очень мощные консервирующие и полезные
							вещества. Мы всегда открыты к сотрудничеству и будем рады видеть Ваши отзывы и комментарии.
						</p>
					</div>
				</div>
				<div className="article-page__instagram">
					<Instagram />
				</div>
			</div>
		</article>
	);
};

export default ArticlePage;
