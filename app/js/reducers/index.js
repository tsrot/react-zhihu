import {combineReducers} from 'redux'

const initialState = [
	{
		id:0,
		title:'产品经理与程序员矛盾的本质是什么？',
		description:'理性探讨，请勿撕逼。产品经理的主要工作职责是产品设计。接受来自其他部门的需求，经过设计后交付研发。但这里有好些职责不清楚的地方。',
		voteCount:10
	},
	{
		id:1,
		title:'热爱编程是一种怎样的体验？',
		description:'别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
		voteCount:8
	},
	{
		id:2,
		title:'你热爱编程吗？',
		description:'你热爱编程吗？你热爱编程吗？别人对玩游戏感兴趣，我对写代码、看技术文章感兴趣；把泡github、stackoverflow、v2ex、reddit、csdn当做是兴趣爱好；遇到重复的工作，总想着能不能通过程序实现自动化；喝酒的时候把写代码当下酒菜，边喝边想边敲；不给工资我也会来加班；做梦都在写代码。',
		voteCount:5
	}
]

const quetion = (state,action) => {
	switch (action.type) {
		case 'ADD_QUESTION':
			return {
				id:action.id,
				title:action.title,
				description:action.description,
				voteCount:0
			}

		default:
			return state
	}
}

const quetions = (state = initialState,action) => {
	switch (action.type) {
		case 'ADD_QUESTION':
			return [
				...state,
				quetion(undefined,action)
			]

		default:
				return state
	}
}

const showForm = (state = false,action) => {
	switch (action.type) {
		case 'SHOW_FORM':
			return !state

		default:
			return state
	}
}

const reducer = combineReducers({
	quetions,
	showForm
})
export default reducer
