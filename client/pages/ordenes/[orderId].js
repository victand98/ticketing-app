import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import StripeCheckout from "react-stripe-checkout";
import { Alert } from "../../src/components";
import { useRequest } from "../../src/hooks";

const Order = ({ order, currentUser }) => {
  const router = useRouter();
  const { doRequest, errors } = useRequest({
    url: "/api/payments",
    method: "post",
    body: {
      orderId: order.id,
    },
    onSuccess: (payment) => router.push("/ordenes"),
  });
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();

    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) return <div>La order ha expirado</div>;

  return (
    <div>
      Tiempo restante para pagar: {timeLeft} segundos
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey="pk_test_51KQerQCVe6YdZy2KSWqULy0aG8pOdN2KNB3XDhIkm02hansOj1hRdBGh80QFVrFpRiPDjZ8sBgu7T7EDZhLGjhdY007oeubJ71"
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      <Alert errors={errors} />
    </div>
  );
};

Order.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default Order;
