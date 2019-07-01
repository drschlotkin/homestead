import React, { Component } from 'react';
import Main from './Main';
import NavBar from './NavBar';
import { Provider } from './context';

export default class extends Component {

  state = {
    navListItem: '',
    vegetableData: {},
    vegetableNames: [],
    soil: {},
    pests: {}
  };

  handleTopicSelected = (topic) => {
    this.setState({
      navListItem: topic
    });
  };

  componentDidMount = () => {
    Promise.all([
      fetch('http://localhost:5000/api/vegetables'), 
      fetch('http://localhost:5000/api/soil'),
      fetch('http://localhost:5000/api/pests')
    ])
    .then(([res1, res2, res3]) => { 
        return Promise.all([res1.json(), res2.json(), res3.json()]);
    })
    .then(([res1, res2, res3]) => {
      console.log(res2)
      let arr = [];
      Object.keys(res1).forEach(key => arr.push(res1[key].name))
      this.setState({
        vegetableNames: arr,
        vegetableData: res1,
        soil: res2, 
        pests: res3
      })
    })
    .catch(err => {
      if (err) console.log(err);
    });
  };

  getContext = () => ({
    vegetableData: this.state.vegetableData,
    vegetableNames: this.state.vegetableNames,
    soil: this.state.soil,
    pests: this.state.pests,
    onTopicSelect: this.handleTopicSelected,
    gardening: ['Vegetables', 'Soil', 'Pests']
  });

  render(){
    const {navListItem} = this.state;
    return <Provider value={this.getContext()}>
      <div style={{display: 'flex'}}>
        <NavBar />
        <Main navListItem={navListItem}/>
      </div>
    </Provider>
  };
};
