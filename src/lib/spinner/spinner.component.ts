import {Component} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {SpinnerService} from "./util/service/spinner.service";

@Component({
             selector   : 'lib-spinner',
             templateUrl: './spinner.component.html',
             styleUrls  : ['./spinner.component.scss'],
           })
export class SpinnerComponent {
  stateSpinner : BehaviorSubject<boolean>;

  constructor(private readonly _spinnerService : SpinnerService) {
    this.stateSpinner = _spinnerService.isLoading;
  }
}
