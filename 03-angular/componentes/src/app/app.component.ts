import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fecha = new Date();
  sueldo = 12.001;
  universidad = 'Escuela Politecnica Nacional';

  title = 'componentes';
  arregloObjetos = [
    {
      id: 1, // number
      nombre: 'Adrian', // string
      apellido: 'Eguez', // string
      sueldo: 12.12, // number
      casado: false, // boolean
      comida: 'https://s03.s3c.es/imag/_v0/770x420/2/8/d/Comida-basura.jpg', //
      carro: null,
      ojos: undefined,
    },
    {
      id: 2, // number
      nombre: 'Ramiro', // string
      apellido: 'PEREZ', // string
      sueldo: 22.99, // number
      casado: true, // boolean
      comida: 'https://s03.s3c.es/imag/_v0/770x420/2/8/d/Comida-basura.jpg', //
      carro: null,
      ojos: undefined,
    },
    {
      id: 3, // number
      nombre: 'Carolina', // string
      apellido: 'Vivanco', // string
      sueldo: 74.01, // number
      casado: false, // boolean
      comida: 'https://images.clarin.com/2019/08/30/de-la-invencion-de-la___hLWb7dc-8_1256x620__1.jpg', //
      carro: null,
      ojos: undefined,
    }
  ];

  imprimirSueldo(sueldo: string) {
    console.log(sueldo);
  }
}
