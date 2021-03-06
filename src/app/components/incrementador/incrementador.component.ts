import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() progreso: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChanges( valor: number ) {
    // let elementHTML: any = document.getElementsByName('progreso')[0];
    if ( valor >= 100 ) {
      this.progreso = 100;
    } else if ( valor <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }
    // elementHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();
  }

  cambiarBarra( valor: number ) {
    if ( this.progreso + valor <= 0 ) {
      this.cambioValor.emit( 0 );
      return;
    }
    if ( this.progreso + valor >= 100 ) {
      this.cambioValor.emit( 100 );
      return;
    }
    this.progreso += valor;

    this.cambioValor.emit( this.progreso );
  }

}
