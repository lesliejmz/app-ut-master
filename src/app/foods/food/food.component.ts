import { Component, Input, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TitleCasePipe } from '@angular/common';
import { Food } from '../shared/food.model';
import { CurrencyPipe } from '@angular/common';
import { FoodService } from '../shared/food.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../../shared/components/dialog-confirm/dialog-confirm.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TitleCasePipe, CurrencyPipe, DialogConfirmComponent, MatIconModule, RouterModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
 @Input() food?: Food;
 @Output() eventDeleteFood = new EventEmitter<boolean>;
constructor (public serviceFood: FoodService, public dialog:MatDialog){

}

deleteFood(deleteFood:Food){
}
openDialog(deleteFood:Food) {
  const dialogRef = this.dialog.open(DialogConfirmComponent, {
    data:deleteFood
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    if(result == true){
      this.delete(deleteFood)
    }
  });
}
public delete(food:Food){
  this.serviceFood.deleteFood(food).subscribe({
    next:(value) => console.log('se esta eliminando'),
    error:(e)=> console.error(e),
    complete:()=> this.deleteFoodEvent(true),
    })
}
public deleteFoodEvent(value:boolean):void{
  this.eventDeleteFood.emit(value);
}
}
