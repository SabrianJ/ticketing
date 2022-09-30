import { Subjects, Publisher, OrderCancelledEvent } from '@sj-ticket/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
