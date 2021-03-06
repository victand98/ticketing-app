import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@victorandresrojas/common";

export class ExpirationCompÄºetePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
