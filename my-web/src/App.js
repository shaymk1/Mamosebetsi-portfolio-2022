import About from 'components/About';
import Experience from 'components/Experience';
import Home from 'components/Home';
import Nav from 'components/Nav';
import Portfolio from 'components/Portfolio';
import Contact from 'components/contact';
import SocialLinks from 'components/Socials';
import { Fragment } from 'react';

function App() {
	return (
		<Fragment>
			<Nav />
			<Home />
			<About />
			<Portfolio />
			<Experience />
			<Contact />
			<SocialLinks />
		</Fragment>
	);
}

export default App;
