import { Component, OnInit, Input, ViewEncapsulation, TemplateRef  } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-indicator-add-registry',
  templateUrl: './indicator-add-registry.component.html',
  styleUrls: ['./indicator-add-registry.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class IndicatorAddRegistryComponent implements OnInit {
  docModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalAddDocument(template: TemplateRef<any>) {

    this.modalService.hide(20);
    this.docModalRef = null;
    //this.docModalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }
}