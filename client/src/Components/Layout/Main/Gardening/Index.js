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
  }

  handleTopicSelected = (topic) => {
    this.setState({
      navListItem: topic
    });
  }


  /* Load vegetable information from database */  
  getVegetableList = () =>
    fetch('http://localhost:5000/api/vegetables', {
      headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
    .then(res => res.json())
    .then(res => {
      let arr = [];
      Object.keys(res).forEach(key => arr.push(res[key].name))
      this.setState({    
        vegetableData: res,
        vegetableNames: arr
      })
    }).catch(err => {
      if (err) console.log(err);
    });


  /* Load soil information from database */  
  getSoil = () =>
    fetch('http://localhost:5000/api/soil', {
      headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
    .then(res => res.json())
    .then(res => {
      this.setState({    
        soil: res
      })
    }).catch(err => {
      if (err) console.log(err);
    });


  /* Load pest information from database */  
  getPests = () =>
  fetch('http://localhost:5000/api/pests', {
    headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }})
  .then(res => res.json())
  .then(res => {
    console.log(res)
    this.setState({    
      pests: res
    })
  }).catch(err => {
    if (err) console.log(err);
  });


  componentDidMount = () => {
    this.getVegetableList();
    this.getSoil();
    this.getPests();
  }

  
  getContext = () => ({
    vegetableData: this.state.vegetableData,
    vegetableNames: this.state.vegetableNames,
    soil: this.state.soil,
    pests: this.state.pests,
    onTopicSelect: this.handleTopicSelected,
    topics: ['Vegetables', 'Soil', 'Pests']
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
