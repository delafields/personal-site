import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    // Lazy load Stripe to avoid build-time initialization
    const Stripe = (await import('stripe')).default
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST)

    const data = await request.json()
    const filename = data[0].file
    delete data[0].file
    const line_items = data

    const origin = request.headers.get('origin')

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: line_items,
      mode: 'payment',
      success_url: `${origin}/api/download?file=${filename}`,
      cancel_url: `${origin}`
    })

    return NextResponse.json({ id: session.id })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'An error occurred while creating the Checkout session.' },
      { status: 500 }
    )
  }
}
