
/**
 * This is a singleton to ensure we only instantiate Stripe once.
 * https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/utils/get-stripejs.ts
 */
import { Stripe, loadStripe } from '@stripe/stripe-js'

let stripePromise = Stripe;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST)
  }
  return stripePromise
}

export default getStripe