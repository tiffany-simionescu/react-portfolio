import { axiosWithAuth } from "../utils/axiosWithAuth";
import { toast } from 'react-toastify';

// == General Actions == //
export const FETCH_INITIALIZE = "FETCH_INITIALIZE";
export const POST_INITIALIZE = "POST_INITIALIZE";
export const DELETE_INITIALIZE = "DELETE_INITIALIZE";

// == User Actions == //
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

// == Users Actions == //
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// == Login Actions == //
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

// == Logout Action == //
export const LOGOUT = "LOGOUT";

// == User Functions == //
export const registerUser = (user, props) => dispatch => {
  dispatch({ type: POST_INITIALIZE });

  axiosWithAuth()
    .post('/api/users/register', user)
    .then(res => {
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: res.data
      });
      props.history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: ADD_USER_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
      props.history.push("/login");
    });
};

export const login = (user, props) => dispatch => {
  dispatch({ type: LOGIN_START });

  axiosWithAuth()
    .post('/api/users/login', user)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.user
      });
      localStorage.setItem("token", res.data.authToken);
      props.history.push('/');
      window.location.reload(false);
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAIL,
        payload: { err, message: err.message }
      });
      console.error(err);
    })
}

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
  window.location.reload(false);
}

export const fetchUser = user_id => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get(`/api/users/${user_id}`)
    .then(res => {
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_USER_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    })
}

export const editUser = user_id => dispatch => {
  axiosWithAuth()
    .put(`/api/users/${user_id}`)
    .then(res => {
      dispatch({
        type: EDIT_USER_SUCCESS,
        payload: res.data.user
      })
    })
    .catch(err => {
      dispatch({
        type: EDIT_USER_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

export const deleteUser = (user_id, props) => dispatch => {
  dispatch({ type: DELETE_INITIALIZE });

  axiosWithAuth()
    .delete(`/api/users/${user_id}`)
    .then(() => {
      dispatch({
        type: DELETE_USER_SUCCESS
      });
      window.location.reload();
      fetchUsers();
      props.history.push('/');
    })
    .catch(err => {
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};

// == Users Functions == //
export const fetchUsers = () => dispatch => {
  dispatch({ type: FETCH_INITIALIZE });

  axiosWithAuth()
    .get('/api/users')
    .then(res => {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: { err, message: err.message }
      });
      toast.error(err.message);
    });
};