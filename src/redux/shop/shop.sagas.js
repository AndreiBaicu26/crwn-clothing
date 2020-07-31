//listen to every action passed to it
import { takeEvery, call,put,all, takeLatest}  from 'redux-saga/effects';

import {firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'
import { purgeStoredState } from 'redux-persist';


export function* fetchCollectionsAsync(){

    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }

 }

export function* fetchCollectionsStart(){

    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync);
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}
 