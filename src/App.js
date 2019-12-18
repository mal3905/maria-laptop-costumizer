import React, { Component } from 'react';
// import slugify from 'slugify';

import './App.css';
import Shoppingcart from './Shoppingcart';
import CustomizePage from './CostumizePage'
// This object will allow us to
// easily convert numbers into US dollar values
export const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
// Stays
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  //ADD
  // total = Object.keys(this.state.selected).reduce(
  //   (acc, curr) => acc + this.state.selected[curr].cost,
  //   0
  // );

  render() {
      return (

            <div className="App">
            <header>
              <h1>ELF Computing | Laptops</h1>
            </header>
            <main>
              <CustomizePage selected={this.state.selected} 
              updateFeature={(feature, item) => this.updateFeature(feature, item)} 
              features={this.props.features} 
              />
              <Shoppingcart selected={this.state.selected} />
            </main>
          </div>
      )
  }
}

export default App;
