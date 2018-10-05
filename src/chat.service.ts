import * as io from 'socket.io-client';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export class ChatService {
    private url = 'http://localhost:3000';
    private socket;   

    constructor() {
        this.socket = io(this.url);        
    }

    public on(event_name : string): Observable<any> {
        return new Observable<any>(observer => {
            this.socket.on(event_name, (data: any) => observer.next(data));
        });
    }
    

    public emit(event_name : string, data: any) {       
        this.socket.emit(event_name, data);
    }




}