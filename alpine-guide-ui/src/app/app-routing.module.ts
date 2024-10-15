import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TripsComponent} from "./trips/trips.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'trips', component: TripsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/trips' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
