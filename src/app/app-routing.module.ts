import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SearchPageComponent} from "./search-page/search-page.component";
import {ResultPageComponent} from "./result-page/result-page.component";

const routes: Routes = [
  {path: "", component: SearchPageComponent},
  {path: "result/:id", component: ResultPageComponent},
  {path: "404", component: SearchPageComponent},
  {path: "**", redirectTo: "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
