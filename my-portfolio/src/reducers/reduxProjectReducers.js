import initialState from './initialState';
import {
  // == General Project Actions == //
  FETCH_INITIALIZE,
  POST_INITIALIZE,
  DELETE_INITIALIZE,

  // == Redux Project Actions == //
  FETCH_REDUX_PROJECT_SUCCESS,
  FETCH_REDUX_PROJECT_FAILURE,
  ADD_REDUX_PROJECT_SUCCESS,
  ADD_REDUX_PROJECT_FAILURE,
  EDIT_REDUX_PROJECT_SUCCESS,
  EDIT_REDUX_PROJECT_FAILURE,
  DELETE_REDUX_PROJECT_SUCCESS,
  DELETE_REDUX_PROJECT_FAILURE,

  // == Redux Projects Actions == //
  FETCH_REDUX_PROJECTS_SUCCESS,
  FETCH_REDUX_PROJECTS_FAILURE

} from '../actions/reduxProjectActions';

const reduxProjectReducer = (state = initialState, action) => {
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

    case FETCH_REDUX_PROJECT_SUCCESS:
      return {
        ...state,
        reduxProject: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_REDUX_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case ADD_REDUX_PROJECT_SUCCESS:
      return {
        ...state,
        isEditing: false,
        isSubmitting: true,
        error: ""
      };

    case ADD_REDUX_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case EDIT_REDUX_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isEditing: false,
        isSubmitting: true
      };

    case EDIT_REDUX_PROJECT_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload
      };

    case DELETE_REDUX_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isDeleting: false,
        isSubmitting: true
      };

    case DELETE_REDUX_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case FETCH_REDUX_PROJECTS_SUCCESS:
      return {
        ...state,
        displayedReduxProjects: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_REDUX_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  };
};

export default reduxProjectReducer;