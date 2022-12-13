import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./Components/Profiles/profile/profile.component";
import {AfficherOffresComponent} from "./Components/Offre/afficher-offres/afficher-offres.component";
import {DetailOffreComponent} from "./Components/Offre/detail-offre/detail-offre.component";
import {UtilisateursComponent} from "./Components/Admin/utilisateurs/utilisateurs.component";
import {StatistiquesComponent} from "./Components/Admin/Statis/statistiques/statistiques.component";
import {CvComponent} from "./Components/CV/cv/cv.component";
import {AideComponent} from "./Components/aide/aide.component";
import {AcceuillComponent} from "./acceuill/acceuill.component";
import {DetailArticleComponent} from "./Components/Articles/detail-article/detail-article.component";
import {MsjContactComponent} from "./Components/contact/msj-contact/msj-contact.component";
import {Page1Component} from "./Components/Articles/page1/page1.component";
import {ContactComponent} from "./Components/contact/contact.component";


const routes: Routes = [
  {path: 'profile', component:ProfileComponent},
  {path: 'offres', component:AfficherOffresComponent},
  {path: 'detailOffre', component:DetailOffreComponent},
  {path: 'users', component:UtilisateursComponent},
  {path: 'statistiques', component:StatistiquesComponent},
  {path: 'cv', component:CvComponent},
  {path: 'help', component:AideComponent},
  {path: 'page1', component:Page1Component},
  {path: 'acceuill', component:AcceuillComponent},
  {path: 'detail-article', component:DetailArticleComponent},
  {path: ' msj-contact', component:MsjContactComponent},
  {path: 'contact', component:ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
