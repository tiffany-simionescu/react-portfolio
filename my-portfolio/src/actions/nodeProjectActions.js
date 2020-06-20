import { axiosWithAuth } from '../utils/axiosWithAuth';
import { toast } from 'react-toastify';

// == General Project Actions == //
export const FETCH_INITIALIZE = "FETCH_INITIALIZE";
export const POST_INITIALIZE = "POST_INITIALIZE";
export const DELETE_INITIALIZE = "DELETE_INITIALIZE";

// == Node Project Actions == //
export const FETCH_NODE_PROJECT_SUCCESS = "FETCH_NODE_PROJECT_SUCCESS";
export const FETCH_NODE_PROJECT_FAILURE = "FETCH_NODE_PROJECT_FAILURE";
export const ADD_NODE_PROJECT_SUCCESS = "ADD_NODE_PROJECT_SUCCESS";
export const ADD_NODE_PROJECT_FAILURE = "ADD_NODE_PROJECT_FAILURE";
export const EDIT_NODE_PROJECT_SUCCESS = "EDIT_NODE_PROJECT_SUCCESS";
export const EDIT_NODE_PROJECT_FAILURE = "EDIT_NODE_PROJECT_FAILURE";
export const DELETE_NODE_PROJECT_SUCCESS = "DELETE_NODE_PROJECT_SUCCESS";
export const DELETE_NODE_PROJECT_FAILURE = "DELETE_NODE_PROJECT_FAILURE";

// == Node Projects Actions == //
export const FETCH_NODE_PROJECTS_SUCCESS = "FETCH_NODE_PROJECTS_SUCCESS";
export const FETCH_NODE_PROJECTS_FAILURE = "FETCH_NODE_PROJECTS_FAILURE";


// == Node Projects Functions == //
export const fetchNodeProjects = () => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get('/api/nodeprojects')
    .then(res => {
      dispatch({
        type: FETCH_NODE_PROJECTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_NODE_PROJECTS_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};


// == Node Project Functions == //
export const fetchNodeProject = node_project_id => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/api/nodeprojects/${node_project_id}`)
    .then(res => {
      dispatch({
        type: FETCH_NODE_PROJECT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_NODE_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

// export const addNodeProject = node_project => dispatch => {
//   dispatch({ type: POST_INITIALIZE })

//   axiosWithAuth()
//     .post('/api/nodeprojects', node_project)
//     .then(res => {
//       dispatch({
//         type: ADD_NODE_PROJECT_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: ADD_NODE_PROJECT_FAILURE,
//         payload: { err, message: err.message }
//       });
//     });
// };
export const addNodeProject = (node_project, props) => dispatch => {
  dispatch({ type: POST_INITIALIZE });

  axiosWithAuth()
    .post('/api/nodeprojects', node_project)
    .then(res => {
      dispatch({
        type: ADD_NODE_PROJECT_SUCCESS,
        payload: res.data
      });
      props.history.push("/projects");
    })
    .catch(err => {
      dispatch({
        type: ADD_NODE_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const editNodeProject = (node_project_id, node_project) => dispatch => {
  axiosWithAuth()
    .put(`/api/nodeprojects/${node_project_id}`, node_project)
    .then(res => {
      dispatch({
        type: EDIT_NODE_PROJECT_SUCCESS
      });
      fetchNodeProject(node_project_id)
      console.log("editNodeProject Success", res);
    })
    .catch(err => {
      dispatch({
        type: EDIT_NODE_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const deleteNodeProject = (node_project_id, user_id, props) => dispatch => {
  dispatch({ type: DELETE_INITIALIZE });

  axiosWithAuth()
    .delete(`/api/nodeprojects/${node_project_id}`)
    .then(res => {
      dispatch({
        type: DELETE_NODE_PROJECT_SUCCESS
      });
      window.location.reload();
      fetchNodeProjects(user_id);
      props.history.push('/api/nodeprojects');
    })
    .catch(err => {
      dispatch({
        type: DELETE_NODE_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};