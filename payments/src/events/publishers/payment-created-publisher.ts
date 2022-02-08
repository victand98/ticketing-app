import {
  Publisher,
  Subjects,
  PaymentCreatedEvent,
} from "@victorandresrojas/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
