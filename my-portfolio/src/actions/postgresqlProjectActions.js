import { axiosWithAuth } from '../utils/axiosWithAuth';
import { toast } from 'react-toastify';

// == General Project Actions == //
export const FETCH_INITIALIZE = "FETCH_INITIALIZE";
export const POST_INITIALIZE = "POST_INITIALIZE";
export const DELETE_INITIALIZE = "DELETE_INITIALIZE";

// == PostgreSQL Project Actions == //
export const FETCH_POSTGRESQL_PROJECT_SUCCESS = "FETCH_POSTGRESQL_PROJECT_SUCCESS";
export const FETCH_POSTGRESQL_PROJECT_FAILURE = "FETCH_POSTGRESQL_PROJECT_FAILURE";
export const ADD_POSTGRESQL_PROJECT_SUCCESS = "ADD_POSTGRESQL_PROJECT_SUCCESS";
export const ADD_POSTGRESQL_PROJECT_FAILURE = "ADD_POSTGRESQL_PROJECT_FAILURE";
export const EDIT_POSTGRESQL_PROJECT_SUCCESS = "EDIT_POSTGRESQL_PROJECT_SUCCESS";
export const EDIT_POSTGRESQL_PROJECT_FAILURE = "EDIT_POSTGRESQL_PROJECT_FAILURE";
export const DELETE_POSTGRESQL_PROJECT_SUCCESS = "DELETE_POSTGRESQL_PROJECT_SUCCESS";
export const DELETE_POSTGRESQL_PROJECT_FAILURE = "DELETE_POSTGRESQL_PROJECT_FAILURE";

// == PostgreSQL Projects Actions == //
export const FETCH_POSTGRESQL_PROJECTS_SUCCESS = "FETCH_POSTGRESQL_PROJECTS_SUCCESS";
export const FETCH_POSTGRESQL_PROJECTS_FAILURE = "FETCH_POSTGRESQL_PROJECTS_FAILURE";


// == PostgreSQL Projects Functions == //
export const fetchPostgresqlProjects = ()=> dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get('/api/pgprojects')
    .then(res => {
      dispatch({
        type: FETCH_POSTGRESQL_PROJECTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_POSTGRESQL_PROJECTS_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};


// == PostgreSQL Project Functions == //
export const fetchPostgresqlProject = postgresql_project_id => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/api/pgprojects/${postgresql_project_id}`)
    .then(res => {
      dispatch({
        type: FETCH_POSTGRESQL_PROJECT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_POSTGRESQL_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

// export const addPostgresqlProject = postgresql_project => dispatch => {
//   dispatch({ type: POST_INITIALIZE })

//   axiosWithAuth()
//     .post('/api/pgprojects', postgresql_project)
//     .then(res => {
//       dispatch({
//         type: ADD_POSTGRESQL_PROJECT_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: ADD_POSTGRESQL_PROJECT_FAILURE,
//         payload: { err, message: err.message }
//       });
//     });
// };

export const addPostgresqlProject = (postgresql_project, props) => dispatch => {
  dispatch({ type: POST_INITIALIZE });

  axiosWithAuth()
    .post('/api/postgresqlprojects', postgresql_project)
    .then(res => {
      dispatch({
        type: ADD_POSTGRESQL_PROJECT_SUCCESS,
        payload: res.data
      });
      props.history.push("/projects");
    })
    .catch(err => {
      dispatch({
        type: ADD_POSTGRESQL_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const editPostgresqlProject = (postgresql_project_id, postgresql_project) => dispatch => {
  axiosWithAuth()
    .put(`/api/pgprojects/${postgresql_project_id}`, postgresql_project)
    .then(res => {
      dispatch({
        type: EDIT_POSTGRESQL_PROJECT_SUCCESS
      });
      fetchPostgresqlProject(postgresql_project_id)
      console.log("editPostgresqlProject Success", res);
    })
    .catch(err => {
      dispatch({
        type: EDIT_POSTGRESQL_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const deletePostgresqlProject = (postgresql_project_id, user_id, props) => dispatch => {
  dispatch({ type: DELETE_INITIALIZE });

  axiosWithAuth()
    .delete(`/api/pgprojects/${postgresql_project_id}`)
    .then(() => {
      dispatch({
        type: DELETE_POSTGRESQL_PROJECT_SUCCESS
      });
      window.location.reload();
      fetchPostgresqlProjects(user_id);
      props.history.push('/api/pgprojects');
    })
    .catch(err => {
      dispatch({
        type: DELETE_POSTGRESQL_PROJECT_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};