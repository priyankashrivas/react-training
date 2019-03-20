export default (state =[], action) => {
    
    //Dispatching the correct values
    
    switch(action.type) {
        case 'FETCH_POSTS' :
            return action.payload;
        default :
            return state;
    }

};