import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<Header
				title="JeffreyFleer.com"
				sections={['Home', 'About', 'Projects', 'Contact']}
			/>
				<Title />
				<About />
				<Footer />
			<img src="/images/UnderConstruction.png" alt="Under Construction" />
		</div>
	);
}

export default App;
