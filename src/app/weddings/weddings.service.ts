import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AddGuestMessageParams, AddWeddingParams, GuestMessage, Wedding} from './wedding.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeddingsService {

  constructor(private http: HttpClient) {
  }

  getWeddings(): Observable<Wedding[]> {
    return this.http.get<any>(`${environment.firebaseApiUrl}/weddings.json`).pipe(
      map(weddings => {
        return Object.keys(weddings || []).map(weddingId => {
          return {id: weddingId, ...weddings[weddingId]} as Wedding;
        });
      }),
      map(weddings => weddings.sort((firstWedding, secondWedding) => this.getTime(firstWedding.date) - this.getTime(secondWedding.date)))
    );
  }

  addWedding(addWeddingParams: AddWeddingParams): Observable<any> {
    return this.http.post<any>(`${environment.firebaseApiUrl}/weddings.json`, {
      ...addWeddingParams
    });
  }

  getWedding(weddingId: string): Observable<Wedding | undefined> {
    return this.http.get<any>(`${environment.firebaseApiUrl}/weddings/${weddingId}.json`)
      .pipe(map(wedding => {
        if (wedding) {
          wedding.id = weddingId;
          return wedding as Wedding;
        } else {
          return undefined;
        }
      }));
  }

  getWeddingGuestMessages(weddingId: string): Observable<GuestMessage[]> {
    return this.http.get<any>(`${environment.firebaseApiUrl}/wedding-guest-messages.json?orderBy="weddingId"&equalTo="${weddingId}"`).pipe(
      map(weddingGuestMessages => {
        return Object.keys(weddingGuestMessages || []).map(weddingGuestMessageId => {
          return {id: weddingGuestMessageId, ...weddingGuestMessages[weddingGuestMessageId]} as GuestMessage;
        });
      }),
      map(messages => messages.sort((firstMessage, secondMessage) => this.getTime(secondMessage.date) - this.getTime(firstMessage.date)))
    );
  }

  addWeddingGuestMessages(addGuestMessageParams: AddGuestMessageParams): Observable<any> {
    return this.http.post<any>(`${environment.firebaseApiUrl}/wedding-guest-messages.json`, {
      ...addGuestMessageParams
    });
  }

  private getTime(date: any): number {
    return new Date(date).getTime();
  }
}
