import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironaman', 'Hulk', 'Thor','Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    console.log("borrando");
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}
