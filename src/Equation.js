import React, { Component } from 'react';

class Equation extends Component {
	constructor(props) {
		super(props);
		const valuesArray = this.makeNewQuestion();

		this.state = {
			value1: valuesArray[0],
			value2: valuesArray[1],
			value3: valuesArray[2],
			proposedAnswer: valuesArray[3]
		};
	  }

	makeNewQuestion() {
		const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);
		const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
		return [value1, value2, value3, proposedAnswer];
	};

	isEquationTrue() {
		return this.state.value1 + this.state.value2 + this.state.value3 === this.state.proposedAnswer;
	}

	handleButtonClick = (e) => {
		const valuesArray = this.makeNewQuestion();

		this.props.updateScore(this.isEquationTrue(), e);

		this.setState({
			value1: valuesArray[0],
			value2: valuesArray[1],
			value3: valuesArray[2],
			proposedAnswer: valuesArray[3]
		});
	}

	render() {
		const { value1, value2, value3, proposedAnswer } = this.state;

		return (
			<div>
				<div className="equation">
					<p className="text">
						{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}
					</p>
				</div>
				<button onClick={this.handleButtonClick}>True</button>
				<button onClick={this.handleButtonClick}>False</button>
			</div>
		);
	}
}

export default Equation;