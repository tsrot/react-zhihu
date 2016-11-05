var React = require('react');
var _ = require('lodash');
var ShowAddButton = require('../components/ShowAddButton');
var QuestionForm = require('../components/QuestionForm');
var QuestionList = require('./QuestionList');

module.exports = React.createClass({
	getInitialState:function(){
		var questions = [
			{
				id:1,
				title:'产品经理与程序员矛盾的本质是什么？',
				description:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
				voteCount:10
			},
			{
				id:2,
				title:'热爱编程是一种怎样的体验？',
				description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
				voteCount:8
			},
			{
				id:3,
				title:'热爱编程是一种怎样的体验？',
				description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
				voteCount:5
			}
		];

		return {
			questions : questions,
			formDisplay:false
		}
	},
	onToggleForm : function(){
		this.setState({
			formDisplay:!this.state.formDisplay
		})
	},
	onNewQuestion : function(newQuestion){
		newQuestion.id = this.state.questions.length + 1;

		var newQuestions = this.state.questions.concat( newQuestion );

		newQuestions = this.sortQuestion( newQuestions );

		this.setState({
			questions: newQuestions,
		});
	},
	onVote:function(key,newCount){
		var questions = _.uniq(this.state.questions);
		var index = _.findIndex(questions,function(q){
			return q.id == key;
		});

		questions[index].voteCount = newCount;

		questions = this.sortQuestion( questions );

		this.setState({
			questions: questions,
		});

	},
	sortQuestion:function(questions){
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount
		});
		return questions
	},
	render:function(){
		return (
			<div>
			  <div className="jumbotron text-center">
		          <div className="container">
		            <h1>React问答</h1>
		            <ShowAddButton onToggleForm={this.onToggleForm} />
		          </div>
		      </div>
		      <div className="main container">
		        <QuestionForm 
		        	onNewQuestion={this.onNewQuestion}
		        	formDisplay={this.state.formDisplay} 
		        	onToggleForm={this.onToggleForm} />
		        <QuestionList 
		        	questions={ this.state.questions }
		        	onVote={this.onVote} />
		      </div>
			</div>
		)
	}
})
