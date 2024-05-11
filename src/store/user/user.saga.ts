import type { User } from "firebase/auth";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import {
  checkUserSession,
  emailSignInStart,
  googleSignInStart,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutStart,
  signOutSuccess,
  signUpFailed,
  signUpStart,
  signUpSuccess,
} from "./user.slice";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails: {},
): any {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails,
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated(): any {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth, {});
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle(): any {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user, {});
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail(): any {
  if (arguments[0].payload) {
    const { email, password } = arguments[0].payload;

    try {
      const { user } = yield call(
        signInAuthUserWithEmailAndPassword,
        email,
        password,
      );
      yield call(getSnapshotFromUserAuth, user, {});
    } catch (error) {
      yield put(signInFailed(error));
    }
  }
}

export function* signUp(): any {
  if (arguments[0].payload) {
    const { email, password, displayName } = arguments[0].payload;

    try {
      const { user } = yield call(
        createAuthUserWithEmailAndPassword,
        email,
        password,
      );
      user.displayName = displayName;

      yield put(signUpSuccess(user));
    } catch (error) {
      yield put(signUpFailed(error));
    }
  }
}

export function* signInAfterSignUp(): any {
  if (arguments[0].payload) {
    const { user, additionalDetails } = arguments[0].payload;

    yield call(getSnapshotFromUserAuth, user, additionalDetails);
  }
}

export function* signOut(): any {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(checkUserSession, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
  yield takeLatest(googleSignInStart, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(emailSignInStart, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(signUpStart, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(signUpSuccess, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(signOutStart, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
