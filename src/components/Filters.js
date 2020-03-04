import React, { Component } from 'react';
import Checkbox from './Checkbox';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhoods: [
        { value: 'West', isChecked: false },
        { value: 'South', isChecked: false },
        { value: 'Center City', isChecked: false },
        { value: 'Southwest', isChecked: false }
      ],
      foodAssistance: [
        { value: 'SNAP', isChecked: false },
        { value: 'Philly Food Bucks', isChecked: false },
        { value: 'Farmers Market Nutrition Program', isChecked: false }
      ],
      neighborhoodSelections: [],
      foodAssistanceSelections: []
    };
  }

  handleCheckNeighborhoods = event => {
    let neighborhoods = this.state.neighborhoods;
    neighborhoods.forEach(neighborhood => {
      if (neighborhood.value === event.target.value)
        neighborhood.isChecked = event.target.checked;
    });
    this.setState({ neighborhoods: neighborhoods });
    console.log(this.state.neighborhoods);
    const checkedValues = this.state.neighborhoods.filter(neighborhood => {
      return neighborhood.isChecked === true;
    });
    const checkedNeighborhoods = checkedValues.map(value => {
      return value.value;
    });

    this.setState({ neighborhoodSelections: checkedNeighborhoods });
  };

  handleCheckFoodAssistance = event => {
    let foodAssistance = this.state.foodAssistance;
    foodAssistance.forEach(program => {
      if (program.value === event.target.value)
        program.isChecked = event.target.checked;
    });
    this.setState({ foodAssistance: foodAssistance });
    console.log(this.state.foodAssistance);
    const checkedValues = this.state.foodAssistance.filter(program => {
      return program.isChecked === true;
    });
    const checkedFoodAssistance = checkedValues.map(value => {
      return value.value;
    });

    this.setState({ foodAssistanceSelections: checkedFoodAssistance });
  };

  render() {
    return (
      <div>
        <h2>Neighborhoods</h2>
        <ul>
          {this.state.neighborhoods.map((neighborhood, index) => {
            return (
              <Checkbox
                key={index}
                handleCheck={this.handleCheckNeighborhoods}
                {...neighborhood}
              />
            );
          })}
        </ul>
        <h2>Food Assistance Programs</h2>
        <ul>
          {this.state.foodAssistance.map((program, index) => {
            return (
              <Checkbox
                key={index}
                handleCheck={this.handleCheckFoodAssistance}
                {...program}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Filters;
