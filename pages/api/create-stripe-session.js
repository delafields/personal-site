const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY_TEST);


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Retrieve necessary data from the request body
      // const line_items = req.body;
      const data = req.body
      const filename = data[0].file;
      delete data[0].file;
      const line_items = data;      

      // Create a Stripe Checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: line_items,
        mode: 'payment',
        success_url: `${req.headers.origin}/api/download?file=${filename}`,
        // success_url: `${req.headers.origin}/download?file=${filename}`,
        // success_url: `${req.headers.origin}`,
        cancel_url: `${req.headers.origin}`
      });

      // Return the session ID to the client to redirect to Stripe Checkout
      res.status(200).json({ id: session.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the Checkout session.' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}