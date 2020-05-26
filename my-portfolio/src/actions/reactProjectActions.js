import { axiosWithAuth } from '../utils/axiosWithAuth';
import { toast } from 'react-toastify';

// == General Project Actions == //
export const FETCH_INITIALIZE = "FETCH_INITIALIZE";
export const POST_INITIALIZE = "POST_INITIALIZE";
export const DELETE_INITIALIZE = "DELETE_INITIALIZE";

// == React Project Actions == //
export const FETCH_REACT_PROJECT_SUCCESS = "FETCH_REACT_PROJECT_SUCCESS";
export const FETCH_REACT_PROJECT_FAILURE = "FETCH_REACT_PROJECT_FAILURE";
export const ADD_REACT_PROJECT_SUCCESS = "ADD_REACT_PROJECT_SUCCESS";
export const ADD_REACT_PROJECT_FAILURE = "ADD_REACT_PROJECT_FAILURE";
export const EDIT_REACT_PROJECT_SUCCESS = "EDIT_REACT_PROJECT_SUCCESS";
export const EDIT_REACT_PROJECT_FAILURE = "EDIT_REACT_PROJECT_FAILURE";
export const DELETE_REACT_PROJECT_SUCCESS = "DELETE_REACT_PROJECT_SUCCESS";
export const DELETE_REACT_PROJECT_FAILURE = "DELETE_REACT_PROJECT_FAILURE";

// == React Projects Actions == //
export const FETCH_REACT_PROJECTS_SUCCESS = "FETCH_REACT_PROJECTS_SUCCESS";
export const FETCH_REACT_PROJECTS_FAILURE = "FETCH_REACT_PROJECTS_FAILURE";


// == React Projects Functions == //
export const fetchReactProjects = user_id => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/reactprojects/users/${user_id}`)
    .then(res => {
      dispatch({
        type: FETCH_REACT_PROJECTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_REACT_PROJECTS_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};


// == React Project Functions == //
export const fetchReactProject = (react_project_id, user_id) => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/reactprojects/${react_project_id}/users/${user_id}`)
    .then(res => {
      dispatch({
        type: FETCH_REACT_PROJECT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_REACT_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const addReactProject = (user_id, react_project) => dispatch => {
  dispatch({ type: POST_INITIALIZE })

  axiosWithAuth()
    .post(`/reactprojects/users/${user_id}`, react_project)
    .then(res => {
      dispatch({
        type: ADD_REACT_PROJECT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_REACT_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
    });
};

export const editReactProject = (react_project_id, user_id, react_project) => dispatch => {
  axiosWithAuth()
    .put(`/reactprojects/${react_project_id}/users/${user_id}/`, react_project)
    .then(res => {
      dispatch({
        type: EDIT_REACT_PROJECT_SUCCESS
      });
      fetchReactProject(react_project_id, user_id)
      console.log("editReactProject Success", res);
    })
    .catch(err => {
      dispatch({
        type: EDIT_REACT_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const deleteReactProject = (react_project_id, user_id) => dispatch => {
  dispatch({ type: DELETE_INITIALIZE });

  axiosWithAuth()
    .delete(`/reactprojects/${react_project_id}/users/${user_id}`)
    .then(res => {
      dispatch({
        type: DELETE_REACT_PROJECT_SUCCESS
      });
      fetchReactProjects(user_id);
      props.history.push(`/reactprojects/users/${user_id}`);
    })
    .catch(err => {
      dispatch({
        type: DELETE_REACT_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};