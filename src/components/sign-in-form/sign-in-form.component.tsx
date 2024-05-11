import { type Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import type { Action } from "redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.slice";
import Button from "../button/button.component";
import Heading from "../heading/heading.component";
import Input from "../input/input.component";
import type { FormFields } from "./sign-in-form.props";
import styles from "./sign-in-form.module.css";

const defaultFormFields: FormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const dispatchGoogleSignIn: Dispatch<Action<"user/googleSignInStart">> =
    useDispatch();
  const dispatchEmailSignIn: Dispatch<Action<"user/emailSignInStart">> =
    useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  async function signInWithGoogle() {
    dispatchGoogleSignIn(googleSignInStart());
  }

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      dispatchEmailSignIn(emailSignInStart({ email, password }));

      resetFormFields();
    } catch (error) {
      if (error instanceof Error) {
        switch (error.code) {
          case "auth/wrong-password":
            alert("incorrect password for email");
            break;
          case "auth/user-not-found":
            alert("no user associated with this email");
            break;
          case "auth/invalid-email":
            alert("invalid email");
            break;
          case "auth/invalid-credential":
            alert("email / password is incorrect");
            break;
          default:
            console.log(error);
        }
      }
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className={styles.section}>
      <Heading tag="h3">sign in</Heading>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <Input
            label="email"
            options={{
              value: email,
              name: "email",
              onChange: handleChange,
              required: true,
            }}
          />
          <Input
            label="password"
            options={{
              value: password,
              name: "password",
              onChange: handleChange,
              required: true,
            }}
          />
        </div>
        <div className={styles.footer}>
          <Button type="submit">sign in</Button>
          <Button
            type="button"
            buttonType="secondary"
            onClick={signInWithGoogle}
          >
            or sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
}
