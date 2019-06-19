import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducers/RootReducer';
import createSagasMiddleware from 'redux-saga';
import rootSaga from './Sagas/Sagas';

const sagaMiddleware = createSagasMiddleware()
const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store
