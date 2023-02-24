import BlogInst from '../componans/blogInst';

const Instagram = () => {
	return (
		<div className="inst__container container">
			<div className="inst__title">
				<h3>instagram</h3>
				<a href="/">
					показать щє{' '}
					<svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM1 4.5L31 4.5L31 3.5L1 3.5L1 4.5Z"
							fill="#365C00"
						/>
					</svg>
				</a>
			</div>
			<div className="inst__content">
				<a href="/">
					<BlogInst />
				</a>
				<a href="/">
					<BlogInst />
				</a>
				<a href="/">
					<BlogInst />
				</a>
				<a href="/">
					<BlogInst />
				</a>
				<a href="/">
					<BlogInst />
				</a>
				<a href="/">
					<BlogInst />
				</a>
			</div>
		</div>
	);
};

export default Instagram;