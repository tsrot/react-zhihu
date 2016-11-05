var React = require('react');
var ReactDOM = require('react-dom');
var QuestionApp = require('./containers/QuestionApp');

var mainCom = ReactDOM.render(
	<QuestionApp />,
	document.getElementById('app')
);
