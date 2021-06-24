import {userActionTypes} from './user.types'
const INITIAL_STATE={
    currentuser : null
}

const userReducer = (state = INITIAL_STATE, action) => {
   if(action.type === userActionTypes.SET_CURRENT_USER){
       return {...state, currentuser:action.payload}
   }
   return state;
};

export default userReducer;