import { Component, OnInit, Input, ViewEncapsulation, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-indicator-detail-files',
  templateUrl: './indicator-detail-files.component.html',
  styleUrls: ['./indicator-detail-files.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndicatorDetailFilesComponent implements OnInit {
  @Input() public recordFilter: any;
  public editBigDocumentModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    console.log(this.recordFilter);
  }

  ngOnInit() {
  }

  openmodaleditBigDocument(template: TemplateRef<any>) {
    this.editBigDocumentModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

}

