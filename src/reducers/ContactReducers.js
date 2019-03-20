export default (state = [], action) => {
    switch (action.type){
      case "ADD_TODO":  
        return [...state, action.payload];
      case "DELETE_TASK":
        state.splice(action.payload,1);
        return [...state];

      case "EDIT_TASK":
      //console.log(action.payload.term);
      
      state.splice(action.payload.id,1,action.payload.term);
      return [...state];
      
      default:
        return state;
    }
  };