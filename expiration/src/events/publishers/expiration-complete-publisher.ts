import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@victorandresrojas/common";

export class ExpirationCompĺetePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
