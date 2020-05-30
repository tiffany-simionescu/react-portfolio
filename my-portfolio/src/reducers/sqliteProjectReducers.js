import initialState from './initialState';
import {
  // == General Project Actions == //
  FETCH_INITIALIZE,
  POST_INITIALIZE,
  DELETE_INITIALIZE,

  // == Node Project Actions == //
  FETCH_SQLITE_PROJECT_SUCCESS,
  FETCH_SQLITE_PROJECT_FAILURE,
  ADD_SQLITE_PROJECT_SUCCESS,
  ADD_SQLITE_PROJECT_FAILURE,
  EDIT_SQLITE_PROJECT_SUCCESS,
  EDIT_SQLITE_PROJECT_FAILURE,
  DELETE_SQLITE_PROJECT_SUCCESS,
  DELETE_SQLITE_PROJECT_FAILURE,

  // == Node Projects Actions == //
  FETCH_SQLITE_PROJECTS_SUCCESS,
  FETCH_SQLITE_PROJECTS_FAILURE

} from '../actions/sqliteProjectActions';

const sqliteProjectReducer = (state = initialState, action) => {
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

    case FETCH_SQLITE_PROJECT_SUCCESS:
      return {
        ...state,
        sqliteProject: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_SQLITE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case ADD_SQLITE_PROJECT_SUCCESS:
      return {
        ...state,
        isEditing: false,
        isSubmitting: true,
        error: ""
      };

    case ADD_SQLITE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case EDIT_SQLITE_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isEditing: false,
        isSubmitting: true
      };

    case EDIT_SQLITE_PROJECT_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload
      };

    case DELETE_SQLITE_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isDeleting: false,
        isSubmitting: true
      };

    case DELETE_SQLITE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case FETCH_SQLITE_PROJECTS_SUCCESS:
      return {
        ...state,
        displayedSqliteProjects: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_SQLITE_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  };
};

export default sqliteProjectReducer;