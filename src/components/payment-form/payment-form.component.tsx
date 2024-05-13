import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import Button from "../button/button.component";
import styles from "./payment-form.module.css";

export default function PaymentForm() {
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  console.log(currentUser);

  const stripe = useStripe();
  const elements = useElements();

  async function paymentHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (stripe && elements) {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: cartTotal * 100 }),
        },
      ).then((res) => res.json());

      const {
        paymentIntent: { client_secret },
      } = response;
      const cardElement = elements.getElement(CardElement);

      console.log(client_secret);

      const paymentResult =
        cardElement &&
        (await stripe.confirmCardPayment(client_secret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: "username",
            },
          },
        }));

      if (paymentResult?.error) {
        alert(paymentResult.error.message);
      } else if (paymentResult?.paymentIntent.status === "succeeded") {
        alert("payment successful");
      }
    }
  }

  return (
    <form onSubmit={paymentHandler} className={styles.form}>
      <CardElement />
      <Button>pay now</Button>
    </form>
  );
}
