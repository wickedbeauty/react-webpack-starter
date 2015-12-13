import React, {Component} from 'react';
import Message from './Message';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.state = {
            history: [],
            user: '',
            input: ''
        };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        var user = prompt('What is your name?');
        this.setState({user});
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

	render(){

        let history = this.state.history.map((message, index) => (
            <Message key={index} {...message} />
        ));

        return (
            <div className="container">
            <ul id="list">
                {history}
            </ul>
            <input
                id="input"
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            />
            </div>
        );
  }

  handleChange(event) {
	this.setState({input: event.target.value});
  }

  handleKeyDown(event) {
	  if(event.key === 'Enter'){
		  event.preventDefault();
		  if(this.state.input != ''){
			  let time = new Date();

			  this.setState({
				  history: this.state.history.concat({
					  name: this.state.user,
					  message: this.state.input,
					  time: `${time.getHours()}:${time.getMinutes()}`
				  }),
				  input: ''
			  });
		  }
	  }
  }

}
