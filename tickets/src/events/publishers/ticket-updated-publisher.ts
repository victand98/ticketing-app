import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@victorandresrojas/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
