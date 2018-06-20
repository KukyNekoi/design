import { Component, OnInit, HostBinding } from "@angular/core";

@Component({
  selector: "app-indicator-home",
  templateUrl: "./indicator-home.component.html",
  styleUrls: ["./indicator-home.component.css"]
})
export class IndicatorHomeComponent implements OnInit {
  @HostBinding("class") classes = 'wrapper'; // This adds a class to the host container

  public data: any[];

  constructor() {
    this.data = [
      {
        title: 'Vinculación con entidades nacionales e internacionales',
        details: [
          {
            title: 'Nº DE NUEVAS ENTIDADES INTERNACIONALES VINCULADAS AL CET',
            value: 356,
          },
          {
            title: 'Nº DE NUEVAS ENTIDADES NACIONALES VINCULADAS AL CET',
            value: 126
          },
          {
            title:
              'N° EMPRESAS PARTICIPANTES EN ACTIVIDADES DE CAPACITACIÓN ASOCIATIVAS',
            value: 274
          },
          { title: 'N° APARICIONES EN PRENSA DIGITAL Y ESCRITA', value: 274 },
          {
            title: 'Nº DE ACTVIDADES DE DIFUSIÓN EN LA QUE EL CET PARTICIPA',
            value: 274
          }
        ]
      },
      {
        title: 'Vinculación con Académicos y Estudiantes',
        details: [
          {
            title: 'Nº de académicos que participan en actividades del CET',
            value: 356
          },
          // tslint:disable-next-line:max-line-length
          {
            title:
              'Nº de estudiantes que realizan sus prácticas, tesis, proyectos de mejoramiento, memoria u otra actividad afín al CET',
            value: 126
          }
        ]
      },
      {
        // tslint:disable-next-line:max-line-length
        title:
          'Formación de los profesionales extensionistas e integrantes del equipo de gestión en ámbitos relacionados al Extensionismo tecnológico',
        details: [
          { title: 'Nº de programas de formación implementados', value: 356 },
          {
            title: 'Nº de extensionistas y profesionales del Centro formados',
            value: 126
          }
        ]
      },
      {
        title:
          'Prestación de servicios de extensionismo tecnológico a empresas',
        details: [
          { title: 'N° diagnósticos realizados a Pymes', value: 356 },
          {
            title:
              'N° de empresas asesoradas individualmente o en proceso de asesoria.',
            value: 126
          },
          {
            title: '% porcentaje de intervenciones efectivamente realizadasS',
            value: 274
          },
          { title: '% Subsidio por empresa.', value: 274 }
        ]
      }
    ];
  }

  ngOnInit() {}
}
