import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCategoryComponent } from './components/event-category/event-category.component';
import { ResigterEventCategoryComponent } from './components/resigter-event-category/resigter-event-category.component';


const routes: Routes = [

    {
      path: 'resigter-eventcategory/:id',
      component: ResigterEventCategoryComponent
    },
    {
      path: 'edit-eventcategory/:id',
      component: ResigterEventCategoryComponent
    },
    {
      path: 'event-category',
      component: EventCategoryComponent
    },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
