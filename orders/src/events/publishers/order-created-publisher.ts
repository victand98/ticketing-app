import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from "@victorandresrojas/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
