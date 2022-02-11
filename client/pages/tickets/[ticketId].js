import React from "react";
import { useRouter } from "next/router";
import { Alert } from "../../src/components";
import { useRequest } from "../../src/hooks";

const Ticket = ({ ticket }) => {
  const router = useRouter();
  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) => router.push(`/ordenes/${order.id}`),
  });

  return (
    <div>
      <h1>{ticket.title}</h1>
      <h4>Price: {ticket.price}</h4>
      <Alert errors={errors} />
      <button onClick={() => doRequest()} className="btn btn-primary">
        Comprar
      </button>
    </div>
  );
};

Ticket.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default Ticket;
