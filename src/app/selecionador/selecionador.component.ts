import { Component, OnInit } from '@angular/core';
import { Objeto } from '../objeto';

@Component({
  selector: 'app-selecionador',
  templateUrl: './selecionador.component.html',
  styleUrls: ['./selecionador.component.css']
})
export class SelecionadorComponent implements OnInit {

  listaObjetos: Objeto[];
  dataInicial: Date;
  dataFinal: Date;

  constructor() {
    this.listaObjetos = [];
    this.listaObjetos.push(new Objeto(0, "Data 1", new Date('09/02/1994')));
    this.listaObjetos.push(new Objeto(1, "Data 2", new Date('07/15/2021')));
    this.listaObjetos.push(new Objeto(2, "Data 3", new Date('12/05/2006')));
    this.listaObjetos.push(new Objeto(3, "Data 4", new Date('10/10/1990')));
    this.listaObjetos.push(new Objeto(4, "Data 5", new Date('06/06/1966')));
    this.listaObjetos.push(new Objeto(5, "Data 6", new Date('05/15/2000')));

  }

  listaFiltrada(): Objeto[] {
    var lista: Objeto[] = [];
    this.listaObjetos.forEach(element => {
      if (this.compararDatas(element.data) == true) {
        lista.push(element);
      }

    });
    return lista;
  }

  compararDatas(data: Date): boolean {
    var di: Date = new Date(this.dataInicial);
    di.setMinutes( di.getMinutes() + di.getTimezoneOffset() ); //correcao de horas por conta do fuso horario
    var df: Date= new Date(this.dataFinal);
    df.setMinutes( df.getMinutes() + df.getTimezoneOffset() ); //correcao de horas por conta do fuso horario
    if (di && di > data) return false;
    if (df && data > df) return false;
    console.log(di, df, data)
    return true;
  }

  limpar() {
    this.dataFinal = undefined;
    this.dataInicial = undefined;
  }

  ngOnInit(): void {
  }

}
