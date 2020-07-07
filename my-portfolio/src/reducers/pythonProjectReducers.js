import initialState from './initialState';
import {
  // == General Project Actions == //
  FETCH_INITIALIZE,
  POST_INITIALIZE,
  DELETE_INITIALIZE,

  // == React Project Actions == //
  FETCH_PYTHON_PROJECT_SUCCESS,
  FETCH_PYTHON_PROJECT_FAILURE,
  ADD_PYTHON_PROJECT_SUCCESS,
  ADD_PYTHON_PROJECT_FAILURE,
  EDIT_PYTHON_PROJECT_SUCCESS,
  EDIT_PYTHON_PROJECT_FAILURE,
  DELETE_PYTHON_PROJECT_SUCCESS,
  DELETE_PYTHON_PROJECT_FAILURE,

  // == React Projects Actions == //
  FETCH_PYTHON_PROJECTS_SUCCESS,
  FETCH_PYTHON_PROJECTS_FAILURE

} from '../actions/pythonProjectActions';

const pythonProjectReducer = (state = initialState, action) => {
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

    case FETCH_PYTHON_PROJECT_SUCCESS:
      return {
        ...state,
        pythonProject: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_PYTHON_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case ADD_PYTHON_PROJECT_SUCCESS:
      return {
        ...state,
        isEditing: false,
        isSubmitting: true,
        error: ""
      };

    case ADD_PYTHON_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case EDIT_PYTHON_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isEditing: false,
        isSubmitting: true
      };

    case EDIT_PYTHON_PROJECT_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload
      };

    case DELETE_PYTHON_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isDeleting: false,
        isSubmitting: true
      };

    case DELETE_PYTHON_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case FETCH_PYTHON_PROJECTS_SUCCESS:
      return {
        ...state,
        displayedPythonProjects: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_PYTHON_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  };
};

export default pythonProjectReducer;