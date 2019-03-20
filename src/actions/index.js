export const createList = (contact) => {
    console.log(contact,'action')
    return {
      type: "ADD_TODO",
      payload: contact
    }
  };

export const deleteItem = (id) => {
    return {
        type:"DELETE_TASK" ,
        id: id
    }
}

export const editItem = (id,term) => {
   // console.log(term);

    
    return {
        type:"EDIT_TASK",
        payload: {
            id:id,
            term:term
        }

    }
}

