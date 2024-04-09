import { useEffect, useState } from 'react'
import Heading from '../../components/heading/heading.component'
import Paragraph from '../../components/paragraph/paragraph.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import styles from "./login.module.css";
import background from "../../assets/images/image_248_2100x.webp";

export default function Login() {
  const [authMode, setAuthMode] = useState(true)
  
  useEffect(() => {
    async function getResult() {
      const response = await getRedirectResult(auth);

      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    }
    getResult();
  }, []);
  
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        {authMode ? <>
        <div className={styles.head}>
          <Heading tag='h2'>my account</Heading>
          <Paragraph>sign in now to access your account details or <button type='button' onClick={() => setAuthMode(!authMode)}>create an account</button> today</Paragraph>
        </div>
          <SignInForm />
        </> : <>
           <div className={styles.head}>
          <Heading tag='h2'>create account</Heading>
          <Paragraph>create your account or <button type='button' onClick={() => setAuthMode(!authMode)}>sign in</button> if you already have an account</Paragraph>
        </div>
          <SignUpForm />
        </>}
      </div>
      <span className={styles.background} style={{ backgroundImage: `url(${background})` }}></span>
    </div>
  );
}
