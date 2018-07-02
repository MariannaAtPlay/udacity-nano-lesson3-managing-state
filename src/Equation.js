import React, { Component } from 'react';

function Equation(props) {
	const { value1, value2, value3, proposedAnswer, handleButtonClick } = props;

	function isEquationTrue() {
		return value1 + value2 + value3 === proposedAnswer;
	}

	return (
		<div>
			<div className="equation">
				<p className="text">
					{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}
				</p>
			</div>
			<button onClick={(e) => handleButtonClick(isEquationTrue(), e)}>True</button>
			<button onClick={(e) => handleButtonClick(isEquationTrue(), e)}>False</button>
		</div>
	);
}

export default Equation;