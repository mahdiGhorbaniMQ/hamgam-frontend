import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() {
    this.loaded.subscribe(data=>{
      this.loadedData.push(data)
      if(data.length===3){
        this.isLoading = false
      }
    })
  }

  isLoading:boolean = false
  loadedData: string[] = []
  loaded = new Subject<string>()

}
