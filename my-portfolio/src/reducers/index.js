import reactProjectReducer from './reactProjectReducers';
import reduxProjectReducer from './reduxProjectReducers';
import nodeProjectReducer from './nodeProjectReducers';
import sqliteProjectReducer from './sqliteProjectReducers';
import postgresqlProjectReducer from './postgresqlProjectReducers';
import pythonProjectReducer from './pythonProjectReducers';
import userReducer from './userReducers';
import { reduceReducers } from 'redux-loop';

const reducer = reduceReducers(
  reactProjectReducer,
  reduxProjectReducer,
  nodeProjectReducer,
  sqliteProjectReducer,
  postgresqlProjectReducer,
  pythonProjectReducer,
  userReducer
);

export default reducer;