import { takeLatest, call, put, all } from "redux-saga/effects";
import { getCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCollectionsFailed,
  fetchCollectionsStart,
  fetchCollectionsSuccess,
} from "./collection.slice";

export function* fetchCollectionsAsync(): any {
  try {
    const collectionsArray = yield call(getCollectionsAndDocuments);
    yield put(fetchCollectionsSuccess(collectionsArray));
  } catch (error) {
    yield put(fetchCollectionsFailed(error));
  }
}

export function* onFetchCollections() {
  yield takeLatest(fetchCollectionsStart, fetchCollectionsAsync);
}

export function* collectionsSaga() {
  yield all([call(onFetchCollections)]);
}
