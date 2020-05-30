import reactProjectReducer from './reactProjectReducers';
import reduxProjectReducer from './reduxProjectReducers';
import nodeProjectReducer from './nodeProjectReducers';
import sqliteProjectReducer from './sqliteProjectReducers';
import postgresqlProjectReducer from './postgresqlProjectReducers';
import userReducer from './userReducers';

const reducer = reduceReducers(
  reactProjectReducer,
  reduxProjectReducer,
  nodeProjectReducer,
  sqliteProjectReducer,
  postgresqlProjectReducer,
  userReducer
);

export default reducer;