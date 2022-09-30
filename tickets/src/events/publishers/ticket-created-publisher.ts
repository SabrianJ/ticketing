import { Publisher, Subjects, TicketCreatedEvent } from '@sj-ticket/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    readonly subject =  Subjects.TicketCreated;
}