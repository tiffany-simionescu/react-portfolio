import initialState from './initialState';
import {

  // == General Actions == //
  FETCH_INITIALIZE,
  POST_INITIALIZE,
  DELETE_INITIALIZE,

  // == User Actions == //
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,

  // == Users Actions == //
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,

  // == Login Actions == //
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,

  // == Logout Action == //
  LOGOUT

} from '../actions/userActions';

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case POST_INITIALIZE:
      return {
        ...state,
        isFetching: true,
        error: ""
      };

    case DELETE_INITIALIZE:
      return {
        ...state,
        isDeleting: true,
        error: ""
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isFetching: false
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        error: "",
        isSubmitting: false,
        user: {
          user_id: action.payload.id[0],
          username: action.payload.user.username,
          password: action.payload.user.password,
          first_name: action.payload.user.first_name,
          last_name: action.payload.user.last_name,
          email: action.payload.user.email,
          phone_number:action.payload.user.phone_number
        },
        isLoggedIn:false
      };

    case ADD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case EDIT_USER_SUCCESS: 
      return {
        ...state,
        error: "",
        isEditing: false,
        isSubmitting: true
      };

    case EDIT_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        error: "",
        isDeleting: false,
        isSubmitting: true
      };

    case DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true
      };

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };

    default:
      return state;
  }
}

export default userReducer;