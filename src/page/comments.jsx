import Title from '../componans/title';
import '../scss/page/comments.scss';

const Comments = () => {
	return (
		<article className="main__comments comments-page">
			<div className="comments-page__container container">
				<div className="comments-page__title">
					<Title name={'отзывы'} goIn={'добавить отзыв'} linck={'/'} />
				</div>
				<div className="comment-page__body">
					<div className="full-goods__content">
						<div className="full-goods__coment">
							<div>
								<p>user</p>
								<p>25 червня 2023</p>
								<div className="full-goods__coment-rating">
									<div className="full-goods__coment-items">
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item activ">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
									</div>
								</div>
							</div>
							<div>
								<div className="full-goods__coment-name-goods">
									<p>Оценка продукта : Маска "Ефект" (150 г) </p>
								</div>
								<div className="full-goods__coment-body">
									Экстракты овса, льна и пажитника обладают мощными омолаживающими, питательными и регенерирующими действиями.
								</div>
							</div>
						</div>
						<div className="full-goods__coment">
							<div>
								<p>user</p>
								<p>25 червня 2023</p>
								<div className="full-goods__coment-rating">
									<div className="full-goods__coment-items">
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item activ">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
									</div>
								</div>
							</div>
							<div>
								<div className="full-goods__coment-name-goods">
									<p>Оценка продукта : Маска "Ефект" (150 г) </p>
								</div>
								<div className="full-goods__coment-body">
									Экстракты овса, льна и пажитника обладают мощными омолаживающими, питательными и регенерирующими действиями.
								</div>
							</div>
						</div>
						<div className="full-goods__coment">
							<div>
								<p>user</p>
								<p>25 червня 2023</p>
								<div className="full-goods__coment-rating">
									<div className="full-goods__coment-items">
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item activ">★</div>
										<div className="full-goods__coment-item">★</div>
									</div>
								</div>
							</div>
							<div>
								<div className="full-goods__coment-name-goods">
									<p>Оценка продукта : Маска "Ефект" (150 г) </p>
								</div>
								<div className="full-goods__coment-body">
									кофеин оказывает дренирующий эффект, снимает отечность и следы усталости, уменьшает темные круги под глазами. экстракт зеленого чая
									успокаивает кожу от воздействия внешних раздражающих факторов. активный компонент из цветка настурции восстанавливает транспорт
									кислорода, стимулирует синтез цитоглобина, разглаживает микрорельеф кожи, придавая ей здоровый блеск.
								</div>
							</div>
						</div>
						<div className="full-goods__coment">
							<div>
								<p>user</p>
								<p>25 червня 2023</p>
								<div className="full-goods__coment-rating">
									<div className="full-goods__coment-items">
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item">★</div>
										<div className="full-goods__coment-item activ">★</div>
										<div className="full-goods__coment-item">★</div>
									</div>
								</div>
							</div>
							<div>
								<div className="full-goods__coment-name-goods">
									<p>Оценка продукта : Маска "Ефект" (150 г) </p>
								</div>
								<div className="full-goods__coment-body">
									Экстракты овса, льна и пажитника обладают мощными омолаживающими, питательными и регенерирующими действиями.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Comments;
