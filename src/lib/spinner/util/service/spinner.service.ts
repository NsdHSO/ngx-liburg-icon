import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
              providedIn: 'root',
            })
export class SpinnerService {
  private _isLoading : BehaviorSubject<any> = new BehaviorSubject<boolean>(false);
  public get isLoading() : BehaviorSubject<boolean> {
    return this._isLoading;
  }

  public set isLoading(value : BehaviorSubject<boolean>) {
    this._isLoading = value;
  }

  public sendValue(value : boolean) {
    this._isLoading.next(value);
  }
}
