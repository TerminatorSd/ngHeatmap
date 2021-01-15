import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeatmapComponent } from "./heatmap/heatmap.component";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'heatmap',
    component: HeatmapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
