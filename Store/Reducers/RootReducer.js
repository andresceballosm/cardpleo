import { combineReducers } from 'redux';
import ReducerSesion from './ReducerSesion';
import ReducerSetLoading from './Utils/ReducerApp'
import ReducerModal from './Utils/ReducerModal';
import ReducerAlertResponse from './Utils/ReducerAlertResponse';
import ReducerImage from './Utils/ReducerImage';
import ReducerTypeUser from './ReducerTypeUser';
import ReducerDataEmployer from './ReducerDataEmployer';
import ReducerGetUrlImage from './ReducerGetUrlImage';
import ReducerUploadImage from './Utils/ReducerUploadImage';
import ReducerMap from './Utils/ReducerMap';
import ReducerForm from './Utils/ReducerForm';
import ReducerLoadComplete from './ReducerLoadComplete';
import ReducerDataUser from './ReducerDataUser';
import { reducer as form } from 'redux-form';

export default(reducers = combineReducers({
    ReducerSesion,
    app: ReducerSetLoading,
    ReducerModal,
    ReducerDataUser,
    ReducerAlertResponse,
    ReducerImage,
    ReducerTypeUser,
    ReducerDataEmployer,
    ReducerGetUrlImage,
    ReducerMap,
    ReducerLoadComplete,
    ReducerForm,
    ReducerUploadImage,
    form,
}));