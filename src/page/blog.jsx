import '../scss/page/blog-page.scss';
// components
import Title from '../componans/title';
import Blog from '../componans/blog';
import Instagram from '../componans/instagram';

const BlogPage = () => {
	return (
		<article className="main__blog blog-page">
			<div className="blog-page__container container">
				<div className="blog-page__title">
					<Title name={'блог'} goIn={'на головну'} linck={'/'} />
				</div>
				<div className="blog-page__blog-body">
					<div className="blog-page__blog-item">
						<Blog />
					</div>
					<div className="blog-page__blog-item blog-page__blog-item_mod">
						<Blog revers={true} />
					</div>
				</div>
				<div className="blog-page__instagram">
					<Instagram />
				</div>
			</div>
		</article>
	);
};

export default BlogPage;
