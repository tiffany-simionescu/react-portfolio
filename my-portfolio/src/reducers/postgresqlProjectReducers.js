import initialState from './initialState';
import {
  // == General Project Actions == //
  FETCH_INITIALIZE,
  POST_INITIALIZE,
  DELETE_INITIALIZE,

  // == Node Project Actions == //
  FETCH_POSTGRESQL_PROJECT_SUCCESS,
  FETCH_POSTGRESQL_PROJECT_FAILURE,
  ADD_POSTGRESQL_PROJECT_SUCCESS,
  ADD_POSTGRESQL_PROJECT_FAILURE,
  EDIT_POSTGRESQL_PROJECT_SUCCESS,
  EDIT_POSTGRESQL_PROJECT_FAILURE,
  DELETE_POSTGRESQL_PROJECT_SUCCESS,
  DELETE_POSTGRESQL_PROJECT_FAILURE,

  // == Node Projects Actions == //
  FETCH_POSTGRESQL_PROJECTS_SUCCESS,
  FETCH_POSTGRESQL_PROJECTS_FAILURE

} from '../actions/postgresqlProjectActions';

const postgresqlProjectReducer = (state = initialState, action) => {
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

    case FETCH_POSTGRESQL_PROJECT_SUCCESS:
      return {
        ...state,
        postgresqlProject: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_POSTGRESQL_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case ADD_POSTGRESQL_PROJECT_SUCCESS:
      return {
        ...state,
        isEditing: false,
        isSubmitting: true,
        error: ""
      };

    case ADD_POSTGRESQL_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case EDIT_POSTGRESQL_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isEditing: false,
        isSubmitting: true
      };

    case EDIT_POSTGRESQL_PROJECT_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload
      };

    case DELETE_POSTGRESQL_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isDeleting: false,
        isSubmitting: true
      };

    case DELETE_POSTGRESQL_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case FETCH_POSTGRESQL_PROJECTS_SUCCESS:
      return {
        ...state,
        displayedPostgresqlProjects: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_POSTGRESQL_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  };
};

export default postgresqlProjectReducer;