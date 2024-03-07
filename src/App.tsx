import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title';

function App() {
	return (
		<div className="App">
			<Header
				title="JeffreyFleer.com"
				sections={['Home', 'About', 'Projects', 'Contact']}
			/>
			<Title />
			<img src="/images/UnderConstruction.png" alt="Jeffrey Fleer" />
		</div>
	);
}

export default App;
