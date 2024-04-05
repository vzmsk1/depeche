import { useEffect } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";

export default function SignIn() {
  useEffect(() => {
    async function getResult() {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    getResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>sign in</div>
      <button onClick={logGoogleUser}>sign in with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        sign in with google redirect
      </button>
    </>
  );
}
