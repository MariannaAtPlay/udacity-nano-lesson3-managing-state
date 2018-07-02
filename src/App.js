import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Equation from './Equation';

class App extends Component {
	state = {
		numQuestions: 0,
		numCorrect: 0
	}

	updateScore = (isEquationTrue, e) => {
		if ((e.target.textContent === 'True' && isEquationTrue) || (e.target.textContent === 'False' && !isEquationTrue)) {
			this.setState((prevState) => ({
				numCorrect: prevState.numCorrect + 1
			}))
		}

		this.setState((prevState) => ({ 
			numQuestions: prevState.numQuestions + 1,
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
					<Equation updateScore={this.updateScore} s/>
					<p className="text">
						Your Score: {this.state.numCorrect}/{this.state.numQuestions}
					</p>
				</div>
			</div>
		);
	}
}

export default App;
