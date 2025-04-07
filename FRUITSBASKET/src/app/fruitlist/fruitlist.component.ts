import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingelfruitComponent } from './singelfruit/singelfruit.component';
import { FruitlistdataService } from '../shared/components/fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SingelfruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitlistdataService)

  

  addComment(comment:string, index:number){
    this.fruitlistdata.addCommentToFruit(comment, index)
  }

  nameLog(name: string){
    console.log(name);
  }
}
