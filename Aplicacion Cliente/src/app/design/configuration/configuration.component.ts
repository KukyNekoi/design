import { Component, OnInit, Input, ViewEncapsulation, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  @Input() public recordFilter: any;
  public createGroupModalRef: BsModalRef;
  public editGroupModalRef: BsModalRef;
  public deleteGroupModalRef: BsModalRef;
  public createIndicatorModalRef: BsModalRef;
  public editIndicatorModalRef: BsModalRef;
  public deleteIndicatorModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { 
    console.log(this.recordFilter);
  }

  ngOnInit() {
  }

  openModalCreateGroup(template: TemplateRef<any>) {
    this.createGroupModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

  openModalEditGroup(template: TemplateRef<any>) {
    this.editGroupModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

  openModalDeleteGroup(template: TemplateRef<any>) {
    this.deleteGroupModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

  openModalCreateIndicator(template: TemplateRef<any>) {
    this.createIndicatorModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

  openModalEditIndicator(template: TemplateRef<any>) {
    this.editIndicatorModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

  openModalDeleteIndicator(template: TemplateRef<any>) {
    this.deleteIndicatorModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

}
