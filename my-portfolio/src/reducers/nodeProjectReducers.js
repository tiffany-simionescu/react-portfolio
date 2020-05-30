import initialState from './initialState';
import {
  // == General Project Actions == //
  FETCH_INITIALIZE,
  POST_INITIALIZE,
  DELETE_INITIALIZE,

  // == Node Project Actions == //
  FETCH_NODE_PROJECT_SUCCESS,
  FETCH_NODE_PROJECT_FAILURE,
  ADD_NODE_PROJECT_SUCCESS,
  ADD_NODE_PROJECT_FAILURE,
  EDIT_NODE_PROJECT_SUCCESS,
  EDIT_NODE_PROJECT_FAILURE,
  DELETE_NODE_PROJECT_SUCCESS,
  DELETE_NODE_PROJECT_FAILURE,

  // == Node Projects Actions == //
  FETCH_NODE_PROJECTS_SUCCESS,
  FETCH_NODE_PROJECTS_FAILURE

} from '../actions/nodeProjectActions';

const nodeProjectReducer = (state = initialState, action) => {
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

    case FETCH_NODE_PROJECT_SUCCESS:
      return {
        ...state,
        nodeProject: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_NODE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    case ADD_NODE_PROJECT_SUCCESS:
      return {
        ...state,
        isEditing: false,
        isSubmitting: true,
        error: ""
      };

    case ADD_NODE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case EDIT_NODE_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isEditing: false,
        isSubmitting: true
      };

    case EDIT_NODE_PROJECT_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload
      };

    case DELETE_NODE_PROJECT_SUCCESS:
      return {
        ...state,
        error: "",
        isDeleting: false,
        isSubmitting: true
      };

    case DELETE_NODE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSubmitting: false
      };

    case FETCH_NODE_PROJECTS_SUCCESS:
      return {
        ...state,
        displayedNodeProjects: action.payload,
        isFetching: false,
        error: ""
      };

    case FETCH_NODE_PROJECTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  };
};

export default nodeProjectReducer;