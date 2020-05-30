import initialState from './initialState';
import {
  // == General Project Actions == //
  FETCH_INITIALIZE,
  POST_INITIALIZE,
  DELETE_INITIALIZE,

  // == React Project Actions == //
  FETCH_REACT_PROJECT_SUCCESS,
  FETCH_REACT_PROJECT_FAILURE,
  ADD_REACT_PROJECT_SUCCESS,
  ADD_REACT_PROJECT_FAILURE,
  EDIT_REACT_PROJECT_SUCCESS,
  EDIT_REACT_PROJECT_FAILURE,
  DELETE_REACT_PROJECT_SUCCESS,
  DELETE_REACT_PROJECT_FAILURE,

  // == React Projects Actions == //
  FETCH_REACT_PROJECTS_SUCCESS,
  FETCH_REACT_PROJECTS_FAILURE

} from '../actions/reactProjectActions';

const reactProjectReducer = (state = initialState, action) => {
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

    case FETCH_REACT_PROJECT_SUCCESS:
      return {
        ...state,
        reactProject: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_REACT_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case ADD_REACT_PROJECT_SUCCESS:
      return {
        ...state,
        isEditing: false,
        isSubmitting: true,
        error: ""
      };

    case ADD_REACT_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case EDIT_REACT_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isEditing: false,
        isSubmitting: true
      };

    case EDIT_REACT_PROJECT_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload
      };

    case DELETE_REACT_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isDeleting: false,
        isSubmitting: true
      };

    case DELETE_REACT_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case FETCH_REACT_PROJECTS_SUCCESS:
      return {
        ...state,
        displayedReactProjects: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_REACT_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  };
};

export default reactProjectReducer;