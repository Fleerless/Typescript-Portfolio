import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Home/Home';
import About from './Components/About/About';
import styled from 'styled-components';


function App() {
	return (
		<div className="App">
			<Header
				title="JeffreyFleer.com"
				sections={['Home', 'About', 'Projects', 'Contact']}
			/>
				<Title />
				<About />
			<img src="/images/UnderConstruction.png" alt="Jeffrey Fleer" />
		</div>
	);
}

export default App;
