import BooksCollection from './BooksCollection';
import BusinessFeatures from './BusinessFeatures';
import Categories from './Categories';
import Hero from './Hero';

const Home = () => {
	return (
		<>
			<Hero />
			<BooksCollection />
			<Categories />
			<BusinessFeatures />
		</>
	);
};

export default Home;
