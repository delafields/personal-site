const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY_TEST);


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Retrieve necessary data from the request body
      let line_items = req.body;

      // Create a Stripe Checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [line_items],
        // line_items: [
        //   {
        //     price_data: {
        //       currency: 'usd',
        //       unit_amount: 100,
        //       product_data: {
        //         name: 'test',
        //         // Add more product details as needed
        //       },
        //     },
        //     quantity: 1,
        //   },
        // ],
        mode: 'payment',
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`,
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


// export default async function handler(req, res) {
//   if (req.method === 'POST') {

//     // const { item } = req.body;

//     try {
      
//       const redirectURL = process.env.NODE_ENV === 'development'
//         ? 'http://localhost:3000'
//         : 'https://jeremy-fields.com';

//       let transformedItem = {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'test',
//           },
//           unit_amount: 69,
//         },
//         description: 'testing',
//         quantity: 1,
//       }

//       const params = {
//         payment_method_types: ['card'],
//         line_items: [transformedItem],
//         mode: 'payment',
//         success_url: redirectURL + '?status=success',
//         cancel_url: redirectURL + '?status=cancel',
//       }
      
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items: [transformedItem],
//         mode: 'payment',
//         success_url: redirectURL + '?status=success',
//         cancel_url: redirectURL + '?status=cancel'
//       });

//       res.status(200).json({ id: session.id })
//     } 
//     catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Internal server error'
//       console.log("what the fuck")
//       res.status(500).json({ statusCode: 500, message: errorMessage })
//     }
//   } 
//   else {
//     res.setHeader('Allow', 'POST')
//     res.status(405).end('Method Not Allowed')
//   }
// }