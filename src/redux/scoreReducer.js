import * as ActionTypes from './ActionTypes';

export const scores = (state = {
  isLoading: true,
  errMsg: null,
  scores: []
}, action) => {
  switch(action.type) {
    
    case ActionTypes.ADD_SCORE:
      return {...state,
        isLoading: false,
        errMsg: null,
        scores: [...scores, action.payload] 
      };

    case ActionTypes.RECEIVE_SCORES:
      return {...state,
        isLoading: false,
        errMsg: null,
        scores: action.payload 
      };

    case ActionTypes.FAILED_SCORE:
      return {...state,
        isLoading: false,
        errMsg: action.payload,
        scores: [] 
      };

    case ActionTypes.REQUEST_SCORES:
      return {...state,
        isLoading: true, 
        errMsg: null,
        scores: [] 
      };

    default:
      return state
  }
}