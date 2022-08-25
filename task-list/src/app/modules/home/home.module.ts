import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { ComponentsComponent } from './components/components.component';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';
import { InputAddItemsComponent } from './components/input-add-items/input-add-items.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { HeaderComponent } from './components/header/header.component';

//Home
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    ComponentsComponent,
    ButtonDeleteAllComponent,
    InputAddItemsComponent,
    AppListComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
