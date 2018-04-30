import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator-detail',
  templateUrl: './indicator-detail.component.html',
  styleUrls: ['./indicator-detail.component.css']
})
export class IndicatorDetailComponent implements OnInit {
  public data: any[];
  public filters: any[];

  constructor() {
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
                rlink: '#'
              },
              {
                rname: 'documento 2',
                rtype: 'Tipo2',
                rdate: 'dd-mm-aaaa',
                rlink: '#'
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
                rlink: '#'
              },
              {
                rname: 'documento 2',
                rtype: 'Tipo2',
                rdate: 'dd-mm-aaaa',
                rlink: '#'
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
                rlink: '#'
              },
              {
                rname: 'documento 2',
                rtype: 'Tipo2',
                rdate: 'dd-mm-aaaa',
                rlink: '#'
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
                rlink: '#'
              },
              {
                rname: 'documento 2',
                rtype: 'Tipo2',
                rdate: 'dd-mm-aaaa',
                rlink: '#'
              }
            ]
          }
        ]
      }
    ];
  }

  ngOnInit() {}
}
