import {AutofillMonitor} from '@angular/cdk/text-field';
import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';

@Component({
  selector: 'app-mixing',
  templateUrl: './mixing.component.html',
  styleUrls: ['./mixing.component.css']
})

export class MixingComponent implements AfterViewInit, OnDestroy {
  @ViewChild('first', { read: ElementRef, static: false }) firstName: ElementRef<HTMLElement>;
  @ViewChild('last', { read: ElementRef, static: false }) lastName: ElementRef<HTMLElement>;
  VGAutofilled: boolean;
  PGAutofilled: boolean;


  constructor(private _autofill: AutofillMonitor) { }

  ngAfterViewInit() {
    this._autofill.monitor(this.firstName)
        .subscribe(e => this.VGAutofilled = e.isAutofilled);
    this._autofill.monitor(this.lastName)
        .subscribe(e => this.PGAutofilled = e.isAutofilled);
  }

  ngOnDestroy() {
    this._autofill.stopMonitoring(this.firstName);
    this._autofill.stopMonitoring(this.lastName);
  }

}