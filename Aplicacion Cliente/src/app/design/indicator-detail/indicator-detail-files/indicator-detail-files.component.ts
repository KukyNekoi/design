import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-indicator-detail-files',
  templateUrl: './indicator-detail-files.component.html',
  styleUrls: ['./indicator-detail-files.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndicatorDetailFilesComponent implements OnInit {
  @Input() public recordFilter: any;
  constructor() {
    console.log(this.recordFilter);
  }

  ngOnInit() {
  }

}
