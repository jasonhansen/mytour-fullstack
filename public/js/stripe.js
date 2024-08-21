/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51P12fvHl97cPgFYKAcnaPdbzwwKl9NzQahmixiIEN55somuMbwC8TrSnzF4IrAKosoR9xfv59BxOS9M7ufxhBUjY00iQsqjQ3c',
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
