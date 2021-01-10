import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

/**
 * UNCOMMENT ONCE ALL OTHER PAGES ARE SET UP
 */

// let hasRendered = false;
// const renderApp = () =>{
//     if(!hasRendered){
//         ReactDOM.render(jsx , document.getElementById("app"));
//         hasRendered = true;
//     }
// };

// const jsx = (
//     <Provider store={store}>
//         <AppRouter />
//     </Provider>
// );

ReactDOM.render(<AppRouter /> , document.getElementById("app"));

//If jwt token is valid --> move to dashboard page
//else keep them on the login page
// if(localStorage.getItem("token")){
//     renderApp();
//     if(history.location === '/'){
//         history.push('/home');
//     }

// }else{
//     renderApp();
//     history.push('/');
// }
