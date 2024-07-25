import { NgModule } from '@angular/core';
import {DialogModule} from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';


const ComponentMaterial =[
  DialogModule,
  MatDialogModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
]
@NgModule({
  imports: [ComponentMaterial],
  exports:[ComponentMaterial]
})
export class MaterialModule { }
