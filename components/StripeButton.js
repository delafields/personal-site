import getStripe from '../lib/getStripe';

export default function StripeButton({  product }) {

  const handleCheckout = async () => {
    try {
      const requestData = [{ price: product.priceId, quantity: 1, file: product.file }];

      // Make a POST request to the API route
      const response = await fetch('/api/create-stripe-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      // Parse the response as JSON
      const sessionId = await response.json();

      let stripe = await getStripe();

      // Redirect to Stripe Checkout
      await stripe.redirectToCheckout({
        sessionId: sessionId.id,
      });

    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <button 
        className='self-center w-64 px-2 py-1 my-1 ml-2 text-sm font-medium text-white bg-red-600 rounded-lg focus:outline-none hover:bg-red-700'
        onClick={handleCheckout}
      >
        {product.buttonName}
      </button>
    </>
  );
}