import { all } from 'redux-saga/effects';
import { sagaEmployers } from './SagaRegisterEmployer';
import { sagaLogin } from './SagaLogin';
import { sagaLoadImage } from './SagasLoadImage';
import { sagaEmployes } from './SagaEmployes';
import { sagaDataUser } from './SagaDataUser';

export default function* rootSaga() {    
  yield all([
    ...sagaLogin,
    ...sagaEmployers,
    ...sagaLoadImage,
    ...sagaEmployes,
    ...sagaDataUser
  ])
};
