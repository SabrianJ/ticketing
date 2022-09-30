import { Publisher, Subjects, TicketUpdatedEvent } from '@sj-ticket/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
