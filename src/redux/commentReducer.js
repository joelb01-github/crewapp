import * as ActionTypes from './ActionTypes';

export const comments = (state = {
  isLoading: true,
  errMsg: null,
  comments: []
}, action) => {
  switch(action.type) {
    
    case ActionTypes.ADD_COMMENT:
      return {...state,
        isLoading: false,
        errMsg: null,
        comments: [...comments, action.payload] 
      };

    case ActionTypes.RECEIVE_COMMENTS:
      return {...state,
        isLoading: false,
        errMsg: null,
        comments: action.payload 
      };

    case ActionTypes.FAILED_COMMENT:
      return {...state,
        isLoading: false,
        errMsg: action.payload,
        comments: [] 
      };

    case ActionTypes.REQUEST_COMMENTS:
      return {...state,
        isLoading: true, 
        errMsg: null,
        comments: [] 
      };

    default:
      return state
  }
}