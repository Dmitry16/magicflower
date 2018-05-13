import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/index.scss';
import MainPage from './components/MainPage'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to the Magic Flower App</h1>
					<p>It will lead your life to the success</p>
				</header>
				<MainPage />
			</div>
		);
	}
}

export default App;
