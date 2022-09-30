import {Subjects, Publisher, ExpirationCompleteEvent} from '@sj-ticket/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    readonly subject =  Subjects.ExpirationComplete;
}