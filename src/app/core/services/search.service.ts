import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search(value:string):Observable<string[]>{
    let obs = new Subject<string[]>()
    setTimeout(() => {
      let res = [
        "salam",
        "khodafez",
        "hellooooo",
        "how are you",
        "goodbye",
        "we",
        "you",
        "me"
      ]
      obs.next(
        res.filter(option => option.toLowerCase().includes(value.toLowerCase()))
      )
    }, 200);
    return obs.asObservable();
  }
}
