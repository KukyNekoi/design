import { Component, OnInit, HostBinding } from '@angular/core';

@Component(
{
  selector: 'app-result-home',
  templateUrl: './result-home.component.html',
  styleUrls: ['./result-home.component.css']
})
export class ResultHomeComponent implements OnInit {
  @HostBinding('class') classes = 'wrapper'; // This adds a class to the host container

  public data: any[];

  constructor() {
    this.data = [
    {
      details: [
        { title: 'Vinculación con entidades nacionales e internacionales'},
        { title: 'Vinculación con Académicos y Estudiantes' },
        // tslint:disable-next-line:max-line-length
        { title: 'Formación de los profesionales extensionistas e integrantes del equipo de gestión en ámbitos relacionados al Extensionismo tecnológico '},
        { title: 'Prestación de servicios de extensionismo tecnológico a empresas'},
      ]
    }];
  }

  ngOnInit() {
  }


}
