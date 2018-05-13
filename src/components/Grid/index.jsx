import React, { Component } from 'react';
import Chart from '../Chart'

class Grid extends Component {
	makeGrid() {
		for (let i=0; i<10; i++) {
			<div className="grid__row">`row${i}`</div>
		}
	}
  render() {
		const renderRows = [];
		renderRows.push(<div className="grid__row">kuku</div>);
    return (
      <div className="grid">
        <p>This is a grid </p>
				{
					renderRows
				}
				<Chart />
      </div>
    );
  }
}

export default Grid;
