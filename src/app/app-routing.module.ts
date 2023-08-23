import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHeroComponent } from './components/list-hero/list-hero.component';
import { AjoutHeroComponent } from './components/ajout-hero/ajout-hero.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UpdateHeroComponent } from './components/update-hero/update-hero.component';


const routes: Routes = [
  {path:'', redirectTo:'/list', pathMatch:'full'},
  { path:'list' ,      component : ListHeroComponent},
  { path :'ajout' ,    component : AjoutHeroComponent},
  { path:'update/:id' , component:UpdateHeroComponent},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
