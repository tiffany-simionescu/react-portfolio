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
export const fetchReactProjects = () => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get('/api/reactprojects')
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
export const fetchReactProject = react_project_id => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/api/reactprojects/${react_project_id}`)
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

// export const addReactProject = react_project => dispatch => {
//   dispatch({ type: POST_INITIALIZE })

//   axiosWithAuth()
//     .post('/api/reactprojects', react_project)
//     .then(res => {
//       dispatch({
//         type: ADD_REACT_PROJECT_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: ADD_REACT_PROJECT_FAILURE,
//         payload: { err, message: err.message }
//       });
//     });
// };
export const addReactProject = (react_project, props) => dispatch => {
  dispatch({ type: POST_INITIALIZE });

  axiosWithAuth()
    .post('/api/reactprojects', react_project)
    .then(res => {
      dispatch({
        type: ADD_REACT_PROJECT_SUCCESS,
        payload: res.data
      });
      props.history.push("/projects");
    })
    .catch(err => {
      dispatch({
        type: ADD_REACT_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const editReactProject = (react_project_id, react_project) => dispatch => {
  axiosWithAuth()
    .put(`/api/reactprojects/${react_project_id}`, react_project)
    .then(res => {
      dispatch({
        type: EDIT_REACT_PROJECT_SUCCESS
      });
      fetchReactProject(react_project_id)
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

export const deleteReactProject = (react_project_id, props) => dispatch => {
  dispatch({ type: DELETE_INITIALIZE });

  axiosWithAuth()
    .delete(`/api/reactprojects/${react_project_id}`)
    .then(res => {
      dispatch({
        type: DELETE_REACT_PROJECT_SUCCESS
      });
      window.location.reload();
      fetchReactProjects();
      props.history.push('/api/projects');
    })
    .catch(err => {
      dispatch({
        type: DELETE_REACT_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};