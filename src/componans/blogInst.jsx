import '../scss/components/blogInst.scss';
import img from '../source/img/home/inst/Rectangle.png';

const BlogInst = () => {
	return (
		<>
			<div className="blog-inst__img">
				<img src={img} alt="Rectangle" />
			</div>
		</>
	);
};

export default BlogInst;
