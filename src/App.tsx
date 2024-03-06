import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title';

function App() {
	return (
		<div className="App">
			<Header
				title="JeffreyFleer.com"
				sections={['Home', 'Resume', 'Projects', 'Contact']}
			/>
			<Title />
		</div>
	);
}

export default App;
