import { axiosWithAuth } from '../utils/axiosWithAuth';
import { toast } from 'react-toastify';

// == General Project Actions == //
export const FETCH_INITIALIZE = "FETCH_INITIALIZE";
export const POST_INITIALIZE = "POST_INITIALIZE";
export const DELETE_INITIALIZE = "DELETE_INITIALIZE";

// == Redux Project Actions == //
export const FETCH_REDUX_PROJECT_SUCCESS = "FETCH_REDUX_PROJECT_SUCCESS";
export const FETCH_REDUX_PROJECT_FAILURE = "FETCH_REDUX_PROJECT_FAILURE";
export const ADD_REDUX_PROJECT_SUCCESS = "ADD_REDUX_PROJECT_SUCCESS";
export const ADD_REDUX_PROJECT_FAILURE = "ADD_REDUX_PROJECT_FAILURE";
export const EDIT_REDUX_PROJECT_SUCCESS = "EDIT_REDUX_PROJECT_SUCCESS";
export const EDIT_REDUX_PROJECT_FAILURE = "EDIT_REDUX_PROJECT_FAILURE";
export const DELETE_REDUX_PROJECT_SUCCESS = "DELETE_REDUX_PROJECT_SUCCESS";
export const DELETE_REDUX_PROJECT_FAILURE = "DELETE_REDUX_PROJECT_FAILURE";

// == Redux Projects Actions == //
export const FETCH_REDUX_PROJECTS_SUCCESS = "FETCH_REDUX_PROJECTS_SUCCESS";
export const FETCH_REDUX_PROJECTS_FAILURE = "FETCH_REDUX_PROJECTS_FAILURE";


// == Redux Projects Functions == //
export const fetchReduxProjects = () => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get('/api/reduxprojects')
    .then(res => {
      dispatch({
        type: FETCH_REDUX_PROJECTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_REDUX_PROJECTS_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};


// == Redux Project Functions == //
export const fetchReduxProject = redux_project_id => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/api/reduxprojects/${redux_project_id}`)
    .then(res => {
      dispatch({
        type: FETCH_REDUX_PROJECT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_REDUX_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const addReduxProject = redux_project => dispatch => {
  dispatch({ type: POST_INITIALIZE })

  axiosWithAuth()
    .post('/api/reduxprojects', redux_project)
    .then(res => {
      dispatch({
        type: ADD_REDUX_PROJECT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_REDUX_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
    });
};

export const editReduxProject = (redux_project_id, redux_project) => dispatch => {
  axiosWithAuth()
    .put(`/api/reduxprojects/${redux_project_id}`, redux_project)
    .then(res => {
      dispatch({
        type: EDIT_REDUX_PROJECT_SUCCESS
      });
      fetchReactProject(redux_project_id)
      console.log("editReduxProject Success", res);
    })
    .catch(err => {
      dispatch({
        type: EDIT_REDUX_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const deleteReduxProject = (redux_project_id, user_id, props) => dispatch => {
  dispatch({ type: DELETE_INITIALIZE });

  axiosWithAuth()
    .delete(`/api/reduxprojects/${redux_project_id}`)
    .then(res => {
      dispatch({
        type: DELETE_REDUX_PROJECT_SUCCESS
      });
      fetchReduxProjects(user_id);
      props.history.push(`/api/reduxprojects`);
    })
    .catch(err => {
      dispatch({
        type: DELETE_REDUX_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};