import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent
  implements OnInit, OnDestroy {

  @Input()
  public titulo: string;

  @Input()
  public imagen: string;

  @Input()
  public textoImagen: string;

  @Input()  // Atributo Propiedad
  public textoBoton: string;

  @Output() // EVENTO
  public cambioSueldo = new EventEmitter();

  tamanoImagen = 200;

  constructor() {
    console.log('Instanciando');
  } // instancia la clase (Ayuda -> Angular)

  ngOnInit(): void { // La clase está lista
    console.log('Esta listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBoton);
    console.log(this.tamanoImagen);
  }

  ngOnDestroy(): void { // La clase esta destruida
  }

  saludar() {
    alert('HOLAAAAAAAAAAAAAAA');
  }

  aumentarSueldo() {

    // this.textoBoton = this.textoBoton + 1;
    this.textoBoton = (Number(this.textoBoton) + 1).toString();
    this.tamanoImagen = this.tamanoImagen + 10;
    this.cambioSueldo.emit(this.textoBoton);
    // this.textoBoton = (+this.textoBoton + 1).toString();
  }

  miFuncion(evento: KeyboardEvent) {
    console.log(evento);
    const elemento = evento.srcElement as any;
    elemento.value;
  }


}


// class (etiqueta html) (web-component)
// Instanciar a la clase
// Clase esta lista
// Clase se destruye









