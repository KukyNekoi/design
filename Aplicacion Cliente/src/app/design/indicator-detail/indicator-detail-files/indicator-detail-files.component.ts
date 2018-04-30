import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indicator-detail-files',
  templateUrl: './indicator-detail-files.component.html',
  styleUrls: ['./indicator-detail-files.component.css']
})
export class IndicatorDetailFilesComponent implements OnInit {
  @Input() public recordFilter: any;
  constructor() {
    console.log(this.recordFilter);
  }

  ngOnInit() {
  }

}
