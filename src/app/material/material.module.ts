import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';







const material=[
  MatButtonModule,

  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,


  
]

@NgModule({
 
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
