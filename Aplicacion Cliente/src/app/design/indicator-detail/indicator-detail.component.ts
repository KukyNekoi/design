import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-indicator-detail',
  templateUrl: './indicator-detail.component.html',
  styleUrls: ['./indicator-detail.component.css']
})
export class IndicatorDetailComponent implements OnInit {
  public data: any[];
  public filters: any[];
  public addRegistryModalRef: BsModalRef;
  public dateFilterModalRef: BsModalRef;
  public editIndicatorModalRef: BsModalRef;
  public editMetaModalRef: BsModalRef;
  public editDocumentModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    this.data = [
      {
        option: [{ name: 'Barras' }, { name: 'Líneas' }, { name: 'Circular' }]
      }
    ];

    this.filters = [
      {
        title: 'intervencion',
        key: '#intervencion',
        content: [
          {
            name: 'nota de prensa 1',
            value: '',
            eventDate: 'dd-mm-aaaa',
            description: 'Es una descripción de un recurso',
            resources: [
              {
                rname: 'documento 1',
                rtype: 'Tipo1',
                rdate: 'dd-mm-aaaa',
                rlink: '#',
                rdesc: 'Descripción'
              },
              {
                rname: 'documento 2',
                rtype: 'Tipo2',
                rdate: 'dd-mm-aaaa',
                rlink: '#',
                rdesc: 'Descripción'
              }
            ]
          },
          {
            name: 'nota de prensa 2',
            value: '456',
            eventDate: 'dd-mm-aaaa',
            description: 'Es una descripción de otro recurso',
            resources: [
              {
                rname: 'documento 45',
                rtype: 'Tipo1',
                rdate: 'dd-mm-aaaa',
                rlink: '#',
                rdesc: 'Descripción'
              },
              {
                rname: 'documento 2',
                rtype: 'Tipo2',
                rdate: 'dd-mm-aaaa',
                rlink: '#',
                rdesc: 'Descripción'
              }
            ]
          }
        ]
      },
      {
        title: 'diagnostico',
        key: '#diagnostico',
        content: [
          {
            name: 'documento de diagnostico',
            value: '',
            eventDate: 'dd-mm-aaaa',
            description: 'Es una descripción de un recurso',
            resources: [
              {
                rname: 'documento 1',
                rtype: 'Tipo1',
                rdate: 'dd-mm-aaaa',
                rlink: '#',
                rdesc: 'Descripción'
              },
              {
                rname: 'documento 2',
                rtype: 'Tipo2',
                rdate: 'dd-mm-aaaa',
                rlink: '#',
                rdesc: 'Descripción'
              }
            ]
          },
          {
            name: 'nota de prensa 2',
            value: '456',
            eventDate: 'dd-mm-aaaa',
            description: 'Es una descripción de otro recurso',
            resources: [
              {
                rname: 'documento 45',
                rtype: 'Tipo1',
                rdate: 'dd-mm-aaaa',
                rlink: '#',
                rdesc: 'Descripción'
              },
              {
                rname: 'documento 2',
                rtype: 'Tipo2',
                rdate: 'dd-mm-aaaa',
                rlink: '#',
                rdesc: 'Descripción'
              }
            ]
          }
        ]
      }
    ];


  }

  // {backdrop: 'static'} hace que al presionar fuera del modal no se cierre
  openModalAddRegistry(template: TemplateRef<any>) {
    this.addRegistryModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

  openModalDateFilter(template: TemplateRef<any>) {
    this.dateFilterModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

  openModalEditIndicator(template: TemplateRef<any>) {
    this.editIndicatorModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

  openModalEditMeta(template: TemplateRef<any>) {
    this.editMetaModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

  openmodaleditDocument(template: TemplateRef<any>) {
    this.editDocumentModalRef = this.modalService.show(template, {backdrop: 'static'});
  }

  ngOnInit() {}
}
