import { Subjects, Publisher, PaymentCreatedEvent } from '@sj-ticket/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
