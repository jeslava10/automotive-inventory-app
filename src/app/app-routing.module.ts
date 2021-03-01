import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMerchandiseComponent  } from './components/add-merchandise/add-merchandise.component';
import { EditMerchandiseComponent  } from './components/edit-merchandise/edit-merchandise.component';
import { ListMerchandiseComponent  } from './components/list-merchandise/list-merchandise.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'merchandise' },
  { path: 'merchandise', component: ListMerchandiseComponent },
  { path: 'merchandise/add-merchandise', component: AddMerchandiseComponent },
  { path: 'merchandise/edit-merchandise', component: EditMerchandiseComponent }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
