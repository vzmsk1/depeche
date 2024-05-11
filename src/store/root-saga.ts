import { all, call } from "redux-saga/effects";
import { collectionsSaga } from "./collections/collection.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(userSagas), call(collectionsSaga)]);
}
