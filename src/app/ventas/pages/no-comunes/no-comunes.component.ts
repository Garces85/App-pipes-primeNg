import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  /*i18nSelect*/
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  /*i18nPlural*/
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Froilan', 'Saturnino'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  };

  cambiarPersona() {

    this.nombre = 'Fernando';
    this.genero = 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  /*KeyValue*/
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  };

  /*JsonPipe*/
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  /*Async Pipe*/
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject ) =>{
  setTimeout(() => {
    resolve('Tenemos data de promesa')
  },3500);

});

}
