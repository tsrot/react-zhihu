let nextId = 3

export const addQuestion = (title,description,voteCount) => ({
	type:'ADD_QUESTION',
	id:nextId++,
	title,
	description,
	voteCount
})

export const voteCount = (mothod) => ({
	type:'VOTE_COUNT',
	mothod
})

export const cancelForm = (mothod) => ({
	type:'SHOW_FORM',
	mothod
})