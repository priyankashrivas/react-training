
import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

///fetch post and user both (action creator in action creator)

export const fetchPostAndUser = () => async (dispatch ,getState)=> {

    await dispatch(fetchPosts());

    //maintaining unique user ids
    const userIds = _.uniq(_.map(getState().posts , 'userId'));
    //console.log(userIds);

    userIds.forEach(id => dispatch(fetchUser(id)));
    _.chain(getState().posts)
      .map('userId')
      .uniq()
      .forEach(id => dispatch(fetchUser(id)))
      .value();

};


//fetching a post in asynchronous manner with help of middleware

export const fetchPosts = () => async dispatch => {

    const response = await jsonPlaceHolder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

//fetching singuler records

export const fetchUser = (id) => async dispatch => {
    
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });

};




    
