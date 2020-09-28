import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

//ReactDOM.render(<h1>hello</h1>, document.getElementById("root"))

class MyComponent extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return(
			<div>
				<h1>hello bitch</h1>
			</div>
		);
	}
}


const Res = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

ReactDOM.render(<Res />, document.getElementById("root"))
