import { axiosWithAuth } from '../utils/axiosWithAuth';
import { toast } from 'react-toastify';

// == General Project Actions == //
export const FETCH_INITIALIZE = "FETCH_INITIALIZE";
export const POST_INITIALIZE = "POST_INITIALIZE";
export const DELETE_INITIALIZE = "DELETE_INITIALIZE";

// == Sqlite Project Actions == //
export const FETCH_SQLITE_PROJECT_SUCCESS = "FETCH_SQLITE_PROJECT_SUCCESS";
export const FETCH_SQLITE_PROJECT_FAILURE = "FETCH_SQLITE_PROJECT_FAILURE";
export const ADD_SQLITE_PROJECT_SUCCESS = "ADD_SQLITE_PROJECT_SUCCESS";
export const ADD_SQLITE_PROJECT_FAILURE = "ADD_SQLITE_PROJECT_FAILURE";
export const EDIT_SQLITE_PROJECT_SUCCESS = "EDIT_SQLITE_PROJECT_SUCCESS";
export const EDIT_SQLITE_PROJECT_FAILURE = "EDIT_SQLITE_PROJECT_FAILURE";
export const DELETE_SQLITE_PROJECT_SUCCESS = "DELETE_SQLITE_PROJECT_SUCCESS";
export const DELETE_SQLITE_PROJECT_FAILURE = "DELETE_SQLITE_PROJECT_FAILURE";

// == Sqlite Projects Actions == //
export const FETCH_SQLITE_PROJECTS_SUCCESS = "FETCH_SQLITE_PROJECTS_SUCCESS";
export const FETCH_SQLITE_PROJECTS_FAILURE = "FETCH_SQLITE_PROJECTS_FAILURE";


// == Sqlite Projects Functions == //
export const fetchSqliteProjects = () => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/api/sqliteprojects`)
    .then(res => {
      dispatch({
        type: FETCH_SQLITE_PROJECTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_SQLITE_PROJECTS_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};


// == Sqlite Project Functions == //
export const fetchSqliteProject = sqlite_project_id => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/api/sqliteprojects/${sqlite_project_id}`)
    .then(res => {
      dispatch({
        type: FETCH_SQLITE_PROJECT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_SQLITE_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

// export const addSqliteProject = sqlite_project => dispatch => {
//   dispatch({ type: POST_INITIALIZE })

//   axiosWithAuth()
//     .post(`/api/sqliteprojects`, sqlite_project)
//     .then(res => {
//       dispatch({
//         type: ADD_SQLITE_PROJECT_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: ADD_SQLITE_PROJECT_FAILURE,
//         payload: { err, message: err.message }
//       });
//     });
// };

export const addSqliteProject = (sqlite_project, props) => dispatch => {
  dispatch({ type: POST_INITIALIZE });

  axiosWithAuth()
    .post('/api/sqliteprojects', sqlite_project)
    .then(res => {
      dispatch({
        type: ADD_SQLITE_PROJECT_SUCCESS,
        payload: res.data
      });
      props.history.push("/projects");
    })
    .catch(err => {
      dispatch({
        type: ADD_SQLITE_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const editSqliteProject = (sqlite_project_id, sqlite_project) => dispatch => {
  axiosWithAuth()
    .put(`/api/sqliteprojects/${sqlite_project_id}`, sqlite_project)
    .then(res => {
      dispatch({
        type: EDIT_SQLITE_PROJECT_SUCCESS
      });
      window.location.reload();
      fetchSqliteProject(sqlite_project_id)
      console.log("editSqliteProject Success", res);
    })
    .catch(err => {
      dispatch({
        type: EDIT_SQLITE_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const deleteSqliteProject = (sqlite_project_id, user_id, props) => dispatch => {
  dispatch({ type: DELETE_INITIALIZE });

  axiosWithAuth()
    .delete(`/api/sqliteprojects/${sqlite_project_id}`)
    .then(res => {
      dispatch({
        type: DELETE_SQLITE_PROJECT_SUCCESS
      });
      fetchSqliteProjects(user_id);
      props.history.push(`/api/sqliteprojects`);
    })
    .catch(err => {
      dispatch({
        type: DELETE_SQLITE_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};