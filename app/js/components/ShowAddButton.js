import React,{Component} from 'react';

class ShowAddButton extends Component{
	render(){
		return (
			<button id="add-question-btn" onClick={this.props.onToggleForm} className="btn btn-success">添加问题</button>
		)
	}
}

export default ShowAddButton;
