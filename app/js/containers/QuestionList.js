var React = require('react');
var QuestionItem = require('../components/QuestionItem');

module.exports = React.createClass({
	// getInitialState:function(){
	// 	return {
	// 		onVote:this.props.onVote,
	// 	}
	// },

	render:function(){
		var onVote = this.props.onVote;
		var questions = this.props.questions;
		if(!Array.isArray(questions)) throw new Error('this.props.questions必需是数组！');

		var questionComps = questions.map(function(q){
			return	<QuestionItem 
				      key = {q.id} 
				      questionKey = {q.id} 
					  title = {q.title} 
					  description = {q.description} 
					  voteCount = {q.voteCount} 
					  onVote = {onVote}
					  // onVote = {this.state.onVote}
				    />
				})
		
		return (
			<div id="questions" className="">     
		        {questionComps}
		    </div>
		)
	}
});