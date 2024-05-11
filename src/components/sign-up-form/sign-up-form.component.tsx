import { type Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import type { Action } from "redux";
import { signUpStart } from "../../store/user/user.slice";
import Heading from "../heading/heading.component";
import Input from "../input/input.component";
import type { FormFields } from "./sign-up-form.props";
import styles from "../sign-in-form/sign-in-form.module.css";
import Button from "../button/button.component";

const defaultFormFields: FormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const dispatch: Dispatch<Action<"user/signUpStart">> = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart({ email, password, displayName }));
      resetFormFields();
    } catch (error) {
      if (
        error instanceof Error &&
        error.code === "auth/email-already-in-use"
      ) {
        alert("cannot create user, email already in use");
      }
      console.log(`user creation encountered an error: ${error}`);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  }

  return (
    <div className={styles.section}>
      <Heading tag="h3">sign up</Heading>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <Input
            label="name"
            options={{
              value: displayName,
              name: "displayName",
              onChange: handleChange,
              required: true,
            }}
          />
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
          <Input
            label="confirm password"
            options={{
              value: confirmPassword,
              name: "confirmPassword",
              onChange: handleChange,
              required: true,
            }}
          />
        </div>
        <div className={styles.footer}>
          <Button type="submit">sign up</Button>
        </div>
      </form>
    </div>
  );
}
