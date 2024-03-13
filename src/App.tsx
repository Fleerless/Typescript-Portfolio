import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Title from './Components/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import { sections } from './utils/data';

function App() {
	return (
		<div className="App">
			<Router>
				<Header title="JeffreyFleer.com" sections={sections} />
				<Routes>
					<Route path="/" element={<Title />} />
					<Route path="/About" element={<About />} />
					<Route path="/Projects" element={<Projects />} />
					<Route path="/Resume" element={<Resume />} />
					<Route path="/Contact" element={<Contact />} />
				</Routes>
				<Footer />
				
			</Router>
		</div>
	);
}

export default App;
