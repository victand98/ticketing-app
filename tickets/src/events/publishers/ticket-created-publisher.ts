import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@victorandresrojas/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
