import '../scss/components/add-coment.scss';

const Coment = () => {
	return (
		<div className="coment">
			<div className="coment__wrapper">
				<div className="coment__title">
					<h3>Добавить отзыв</h3>
					<div className="coment__clouse"></div>
				</div>
				<form action="#">
					<div className="coment__name">
						<label form="coment-input-name">Ваше имя</label>
						<input id="coment-input-name" type="text" name="nema" />
					</div>
					<div className="coment__rating">
						<p>Оцените продукт</p>
						<div className="coment__rating-body">
							<div className="coment__items">
								<label className="input-rung-label" htmlFor="item-5"></label>
								<input className="input-rang" id="item-5" type="radio" name="rung" value="5" />

								<label className="input-rung-label" htmlFor="item-4"></label>
								<input className="input-rang" id="item-4" type="radio" name="rung" value="4" />

								<label className="input-rung-label" htmlFor="item-3"></label>
								<input className="input-rang" id="item-3" type="radio" name="rung" value="3" />

								<label className="input-rung-label" htmlFor="item-2"></label>
								<input className="input-rang" id="item-2" type="radio" name="rung" value="2" />

								<label className="input-rung-label" htmlFor="item-1"></label>
								<input className="input-rang" id="item-1" type="radio" name="rung" value="1" />
							</div>
						</div>
					</div>
					<div className="coment__masseg">
						<label htmlFor="input-text">Ваш отзыв</label>
						<textarea name="masseg" id="input-text" cols="50" rows="10"></textarea>
					</div>
					<div className="coment__button">
						<button type="submit">опубликовать</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Coment;
