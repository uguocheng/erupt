import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditComponent} from './edit/edit.component';
import {TableComponent} from "./table/table.component";

const routes: Routes = [
  {
    path: 'edit',
    component: EditComponent,
    data: {
      title: 'Erupt edit',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
      status: true
    }
  },
  {
    path: 'table',
    component: TableComponent,
    data: {
      title: 'Erupt list',
      icon: 'icon-table',
      caption: 'table',
      status: true
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildRoutingModule {
}
