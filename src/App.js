import './scss/app.scss';
// pages
import About from './page/about';
import Basket from './page/basket';
import Blog from './page/blog';
import Club from './page/club';
import Comments from './page/comments';
import FullGoods from './page/fullGoods';
import Goods from './page/goods';
import Home from './page/home';
import NotFound from './page/notFound';
import Order from './page/order';
import Partners from './page/partners';
import SignUp from './page/signUp';
import Account from './page/account';
import ArticlePage from './page/article';
import QuickOrder from './page/quickOrder';
// components
import Header from './componans/header';
import Footer from './componans/footer';

function App() {
	return (
		<div className="wrapper">
			<Header />

			<main>
				<Home />
				{/* <Goods /> */}
				{/* <FullGoods /> */}
				{/* <About /> */}
				{/* <Blog /> */}
				{/* <ArticlePage /> */}
				{/* <Comments /> */}
				{/* <QuickOrder /> */}
				{/* <Partners /> */}
				{/* <Club /> */}
				{/* <Basket /> */}
				{/* <Order /> */}
				{/* <SignUp /> */}
				{/* <Account /> */}
				{/* <NotFound /> */}
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
