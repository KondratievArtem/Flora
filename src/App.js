import './scss/app.scss';
// pages
import About from './page/about';
import Basket from './page/basket';
import Blog from './page/blog';
import Club from './page/club';
import Comments from './page/comments';
import DeliveriCondition from './page/deliveryCondition';
import FullGoods from './page/fullGoods';
import Goods from './page/goods';
import Home from './page/home';
import NotFound from './page/notFound';
import Order from './page/order';
import Partners from './page/partners';
import SignUp from './page/signUp';
import Account from './page/account';
// components
import Header from './componans/header';
import Footer from './componans/footer';

function App() {
	return (
		<div className="wrapper">
			<header>
				<Header />
			</header>
			<main>
				{/* <Home /> */}
				{/* <Goods /> */}
				<FullGoods />
				{/* <About /> */}
				{/* <Blog /> */}
				{/* <Comments /> */}
				{/* <DeliveriCondition /> */}
				{/* <Partners /> */}
				{/* <Club /> */}
				{/* <Basket /> */}
				{/* <Order /> */}
				{/* <SignUp /> */}
				{/* <NotFound /> */}
				{/* <Account /> */}
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
