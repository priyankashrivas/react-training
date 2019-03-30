const initState = {
    project:[
        {id:1,title:'my project',content:'hjsdfdgfjhg'},
        {id:2,title:'my 1 stproject',content:'hjsdfdgfjhg'},
        {id:3,title:'my 2 nd project',content:'hjsdfdgfjhg'},
    ]
}

const projectReducer = (state = initState,action) => {
    switch (action.type){
        case  'CREATE_PROJECT' :
            console.log('created project' ,action.project);
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log('created project error' ,action.err);
            return state;
        default :
            return state;
    }
    
}

export default projectReducer