const initialState = {
  users: [],
  user: {
    user_id: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: ""
  },
  displayedReactProjects: [],
  displayedReduxProjects: [],
  displayedSqliteProjects: [],
  displayedPostgresqlProjects: [],
  displayedPythonProjects: [],

  react_project: {
    react_project_id: "",
    react_project_image: "",
    react_project_title: "",
    react_project_description: "",
    react_project_github_link: "",
    react_project_live_link: ""
  },

  redux_project: {
    redux_project_id: "",
    redux_project_image: "",
    redux_project_title: "",
    redux_project_description: "",
    redux_project_github_link: "",
    redux_project_live_link: ""
  },

  sqlite_project: {
    sqlite_project_id: "",
    sqlite_project_image: "",
    sqlite_project_title: "",
    sqlite_project_description: "",
    sqlite_project_github_link: "",
    sqlite_project_live_link: ""
  },

  postgresql_project: {
    postgresql_project_id: "",
    postgresql_project_image: "",
    postgresql_project_title: "",
    postgresql_project_description: "",
    postgresql_project_github_link: "",
    postgresql_project_live_link: ""
  },

  python_project: {
    python_project_id: "",
    python_project_image: "",
    python_project_title: "",
    python_project_description: "",
    python_project_github_link: "",
    python_project_live_link: ""
  },

  isFetching: false,
  error: "",
  isSubmitting: false,
  isDeleting: false,
  isLoggedIn: false
};

export default initialState;