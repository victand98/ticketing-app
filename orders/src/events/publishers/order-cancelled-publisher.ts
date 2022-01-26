import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from "@victorandresrojas/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
