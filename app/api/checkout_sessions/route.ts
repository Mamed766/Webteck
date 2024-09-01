import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(stripe);
export async function POST(request: Request) {
  try {
    const { cartItem } = await request.json();

    const transformedItems = cartItem.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.mainImage.asset.url],
        },
        unit_amount: item.pricing * 100,
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: transformedItems,
      mode: "payment",
      success_url: `${request.headers.get("origin")}/success`,
      cancel_url: `${request.headers.get("origin")}/home`,
    });

    return NextResponse.json({ sessionURL: session.url });
  } catch (err: any) {
    console.error("Stripe Checkout Session Error:", err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
