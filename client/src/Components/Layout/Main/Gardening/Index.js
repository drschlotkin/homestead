import React, { Component } from 'react';
import Main from './Main'
import NavBar from './NavBar'

const topics = ['Vegetables', 'Soil', 'Layout', 'Pests'];

export default class extends Component {
  state = {
    navListItem: '',
  }

  handleTopicSelected = (topic) => {
    this.setState({
      navListItem: topic
    });
  };

  getVegetableList = () => {
    fetch('http://localhost:5000/api/vegetables', {
      headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }})
    .then(res => res.json())
    .then(res => {
      console.log(res[0])
    }).catch(err => {
      if (err) console.log(err);
    });
  };
  
  componentDidMount = () => {
    this.getVegetableList();
  };

  render(){
    const {navListItem} = this.state
    return (
      <div style={{display: 'flex'}}>
        <NavBar topics={topics} onSelect={this.handleTopicSelected} />
        <Main navListItem={navListItem}/>
      </div>
    );
  };
};
