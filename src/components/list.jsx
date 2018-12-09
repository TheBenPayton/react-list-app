import React, { Component } from 'react';
//This is the actual list application!!
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <button className="launchButton" onClick={ this.handleClick }>Give me my list!🚀</button>
          <h3>Here is your list, <h3 id='userName'></h3></h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="inputBox">
              Start your list: 
            </label>
            <input
              id="inputBox"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add # {this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
    handleClick(){
      alert("Here is your list just copy and paste it wherever you desire!\n");
    }
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ol>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ol>
      );
    }
  }
  
export default App;