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
  newIsCollapsed = true;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  addDocument(){
    //agregar métodos y cosas para cargar información
    this.newIsCollapsed=!this.newIsCollapsed;
  }
}