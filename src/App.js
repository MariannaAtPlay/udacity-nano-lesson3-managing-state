import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Equation from './Equation';

class App extends Component {
	state = {
		numQuestions: 0,
		numCorrect: 0,
		value1: Math.floor(Math.random() * 100),
		value2: Math.floor(Math.random() * 100),
		value3: Math.floor(Math.random() * 100),
		get proposedAnswer() {
			return Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3;
		}
	}

	handleButtonClick = (isEquationTrue, e) => {
		console.log(isEquationTrue);

		if ((e.target.textContent === 'True' && isEquationTrue) || (e.target.textContent === 'False' && !isEquationTrue)) {
			this.setState((prevState) => ({
				numCorrect: prevState.numCorrect + 1
			}))
		}

		this.setState((prevState) => ({ 
			numQuestions: prevState.numQuestions + 1,
			value1: Math.floor(Math.random() * 100),
			value2: Math.floor(Math.random() * 100),
			value3: Math.floor(Math.random() * 100),
			proposedAnswer: this.state.proposedAnswer
		}));
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">ReactND - Coding Practice</h1>
				</header>
				<div className="game">
					<h2>Mental Math</h2>
					<Equation 
						value1={this.state.value1}
						value2={this.state.value2}
						value3={this.state.value3}
						proposedAnswer={this.state.proposedAnswer}
						handleButtonClick={this.handleButtonClick}			
					/>
					<p className="text">
						Your Score: {this.state.numCorrect}/{this.state.numQuestions}<br />
					</p>
				</div>
			</div>
		);
	}
}

export default App;
