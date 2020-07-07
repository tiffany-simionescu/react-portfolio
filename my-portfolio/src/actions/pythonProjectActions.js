import { axiosWithAuth } from '../utils/axiosWithAuth';
import { toast } from 'react-toastify';

// == General Project Actions == //
export const FETCH_INITIALIZE = "FETCH_INITIALIZE";
export const POST_INITIALIZE = "POST_INITIALIZE";
export const DELETE_INITIALIZE = "DELETE_INITIALIZE";

// == React Project Actions == //
export const FETCH_PYTHON_PROJECT_SUCCESS = "FETCH_PYTHON_PROJECT_SUCCESS";
export const FETCH_PYTHON_PROJECT_FAILURE = "FETCH_PYTHON_PROJECT_FAILURE";
export const ADD_PYTHON_PROJECT_SUCCESS = "ADD_PYTHON_PROJECT_SUCCESS";
export const ADD_PYTHON_PROJECT_FAILURE = "ADD_PYTHON_PROJECT_FAILURE";
export const EDIT_PYTHON_PROJECT_SUCCESS = "EDIT_PYTHON_PROJECT_SUCCESS";
export const EDIT_PYTHON_PROJECT_FAILURE = "EDIT_PYTHON_PROJECT_FAILURE";
export const DELETE_PYTHON_PROJECT_SUCCESS = "DELETE_PYTHON_PROJECT_SUCCESS";
export const DELETE_PYTHON_PROJECT_FAILURE = "DELETE_PYTHON_PROJECT_FAILURE";

// == React Projects Actions == //
export const FETCH_PYTHON_PROJECTS_SUCCESS = "FETCH_PYTHON_PROJECTS_SUCCESS";
export const FETCH_PYTHON_PROJECTS_FAILURE = "FETCH_PYTHON_PROJECTS_FAILURE";


// == React Projects Functions == //
export const fetchPythonProjects = () => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get('/api/pythonprojects')
    .then(res => {
      dispatch({
        type: FETCH_PYTHON_PROJECTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_PYTHON_PROJECTS_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};


// == React Project Functions == //
export const fetchPythonProject = python_project_id => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/api/pythonprojects/${python_project_id}`)
    .then(res => {
      dispatch({
        type: FETCH_PYTHON_PROJECT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_PYTHON_PROJECT_FAILURE,
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
export const addPythonProject = (python_project, props) => dispatch => {
  dispatch({ type: POST_INITIALIZE });

  axiosWithAuth()
    .post('/api/pythonprojects', python_project)
    .then(res => {
      dispatch({
        type: ADD_PYTHON_PROJECT_SUCCESS,
        payload: res.data
      });
      props.history.push("/projects");
    })
    .catch(err => {
      dispatch({
        type: ADD_PYTHON_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const editPythonProject = (python_project_id, python_project) => dispatch => {
  axiosWithAuth()
    .put(`/api/pythonprojects/${python_project_id}`, python_project)
    .then(res => {
      dispatch({
        type: EDIT_PYTHON_PROJECT_SUCCESS
      });
      fetchPythonProject(python_project_id)
      console.log("editPythonProject Success", res);
    })
    .catch(err => {
      dispatch({
        type: EDIT_PYTHON_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const deletePythonProject = (python_project_id, props) => dispatch => {
  dispatch({ type: DELETE_INITIALIZE });

  axiosWithAuth()
    .delete(`/api/pythonprojects/${python_project_id}`)
    .then(() => {
      dispatch({
        type: DELETE_PYTHON_PROJECT_SUCCESS
      });
      window.location.reload();
      fetchPythonProjects();
      props.history.push('/api/projects');
    })
    .catch(err => {
      dispatch({
        type: DELETE_PYTHON_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};