const init = {
	status: "loading",
	data: [],
}

export default (state=init,action) => {
	switch(action.type) {
		case 'LOADING':
			return {...state,status:"loading"}
		case 'SUCCESS':
			return {...state,status:"success",data:action.items.data}
		case 'ERROR' :
			return {...state,status:"error"}
		default:
			return state;
	}
}