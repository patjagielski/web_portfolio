import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../redux/auth';
import dashboardRedeucer from '../redux/dashboardInfo';
import adminReducer from '../redux/admin';
import recruiterReducer from '../redux/recruiter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
        auth: authReducer,
        dashboard: dashboardRedeucer,
        admin: adminReducer,
        rec: recruiterReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}