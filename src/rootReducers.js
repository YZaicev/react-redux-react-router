import HomeReducer from './Containers/Home/HomeReducer';

// export const injectReducer = (store, { key, reducer }) => {
//   if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

//   store.asyncReducers[key] = reducer
//   store.replaceReducer(makeRootReducer(store.asyncReducers))
// }

export default {
    home: HomeReducer,
};
