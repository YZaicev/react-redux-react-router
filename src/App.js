import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import rootReducers from './rootReducers'
import PageLayout from './ui/pageLayout/PageLayout'

const history = createHistory()

const store = createStore(
  combineReducers({
    ...rootReducers,
    router: routerReducer
  }),
  applyMiddleware(routerMiddleware(history)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)

class App extends Component {
  render() {
    const routes = require('./rootRoutes').createRoutes(store)
    return (
      <PageLayout>
        <Provider store={store}>
          <ConnectedRouter history={history}>
             <div>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
             </div>
          </ConnectedRouter>
        </Provider>
       </PageLayout> 
    );
  }
}

export default App;
