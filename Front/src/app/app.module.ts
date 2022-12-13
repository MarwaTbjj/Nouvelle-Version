import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormationService} from "./Services/formation.service";
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { ProfileComponent } from './Components/Profiles/profile/profile.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { InsccriptionComponent } from './Components/Inscription/insccription/insccription.component';
import { LoginComponent } from './Components/login/login.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatRippleModule} from "@angular/material/core";
import {MatSliderModule} from "@angular/material/slider";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModifierDonneesComponent } from './Components/Profiles/modifier-donnees/modifier-donnees.component';
import { InscriptionRecruteurComponent } from './Components/Inscription/inscription-recruteur/inscription-recruteur.component';
import { InscriptionCandidatComponent } from './Components/Inscription/inscription-candidat/inscription-candidat.component';
import { OffresComponent } from './Components/Offre/offres/offres.component';
import { CompetancesComponent } from './Components/Profiles/competances/competances.component';
import { FormationsComponent } from './Components/Profiles/formations/formations.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDividerModule} from "@angular/material/divider";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import { AfficherOffresComponent } from './Components/Offre/afficher-offres/afficher-offres.component';
import { DetailOffreComponent } from './Components/Offre/detail-offre/detail-offre.component';
import {MatTableModule} from "@angular/material/table";
import { ValiderSuppressionComponent } from './Components/Offre/valider-suppression/valider-suppression.component';
import { ValiderSuppressionProfilComponent } from './Components/Profiles/valider-suppression-profil/valider-suppression-profil.component';
import { ModifierOffreComponent } from './Components/Offre/modifier-offre/modifier-offre.component';
import { ModifierCompetanceComponent } from './Components/Profiles/modifier-competance/modifier-competance.component';
import { ValiderSuppressionCompetanceComponent } from './Components/Profiles/valider-suppression-competance/valider-suppression-competance.component';
import { ModifierFormationComponent } from './Components/Profiles/modifier-formation/modifier-formation.component';
import { ValiderSuppressionFormationComponent } from './Components/Profiles/valider-suppression-formation/valider-suppression-formation.component';
import { PostulationCandidatComponent } from './Components/Profiles/postulation-candidat/postulation-candidat.component';
import { ValiderSuppressionPostulationComponent } from './Components/Profiles/valider-suppression-postulation/valider-suppression-postulation.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { AfficherOffresPublicComponent } from './Components/OffrePublic/afficher-offres-public/afficher-offres-public.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTabsModule} from "@angular/material/tabs";
import {NgxPaginationModule} from "ngx-pagination";
import {PdfViewerModule} from "ng2-pdf-viewer";
import { AddPostulationComponent } from './Components/Offre/add-postulation/add-postulation.component';
import { FooterComponent } from './Components/footer/footer.component';
import { UtilisateursComponent } from './Components/Admin/utilisateurs/utilisateurs.component';
import { ValiderSuppressionUserComponent } from './Components/Admin/valider-suppression-user/valider-suppression-user.component';
import { StatistiquesComponent } from './Components/Admin/Statis/statistiques/statistiques.component';
import { AreaChartsBasicComponent } from './Components/Admin/Statis/area-charts-basic/area-charts-basic.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { AfficherOffresOptionCarrierComponent } from './Components/OffrePublic/afficher-offres-option-carrier/afficher-offres-option-carrier.component';
import { AfficherOffresLinkedinComponent } from './Components/OffrePublic/afficher-offres-linkedin/afficher-offres-linkedin.component';
import { AngleCircleComponent } from './Components/Admin/Statis/angle-circle/angle-circle.component';
import { BarChartsBasicComponent } from './Components/Admin/Statis/bar-charts-basic/bar-charts-basic.component';
import { FormulaireCVComponent } from './Components/CV/formulaire-cv/formulaire-cv.component';
import { CvComponent } from './Components/CV/cv/cv.component';
import { ModeleOneComponent } from './Components/CV/modele-one/modele-one.component';
import { ModeleTwoComponent } from './Components/CV/modele-two/modele-two.component';
import { OffresRecommanderComponent } from './Components/Offre/offres-recommander/offres-recommander.component';
import { AideComponent } from './Components/aide/aide.component';
import{MatStepperModule} from "@angular/material/stepper";
import { FormStepperComponent } from './form-stepper/form-stepper.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { InterfaceComponent } from './interface/interface.component';
import { InterfaceTwoComponent } from './interface-two/interface-two.component';
import { AcceuillComponent } from './acceuill/acceuill.component';
import { Page1Component } from './Components/Articles/page1/page1.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MsjContactComponent } from './Components/contact/msj-contact/msj-contact.component';
import { AjoutArticleComponent } from './Components/Articles/ajout-article/ajout-article.component';
import { SupprimerArticleComponent } from './Components/Articles/supprimer-article/supprimer-article.component';
import { DetailArticleComponent } from './Components/Articles/detail-article/detail-article.component';
import { ModifierComponent } from './Components/Articles/modifier/modifier.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    InsccriptionComponent,
    LoginComponent,
    ModifierDonneesComponent,
    InscriptionRecruteurComponent,
    InscriptionCandidatComponent,
    OffresComponent,
    CompetancesComponent,
    FormationsComponent,
    AfficherOffresComponent,
    DetailOffreComponent,
    ValiderSuppressionComponent,
    ValiderSuppressionProfilComponent,
    ModifierOffreComponent,
    ModifierCompetanceComponent,
    ValiderSuppressionCompetanceComponent,
    ModifierFormationComponent,
    ValiderSuppressionFormationComponent,
    PostulationCandidatComponent,
    ValiderSuppressionPostulationComponent,
    AfficherOffresPublicComponent,
    AddPostulationComponent,
    FooterComponent,
    UtilisateursComponent,
    ValiderSuppressionUserComponent,
    StatistiquesComponent,
    AreaChartsBasicComponent,
    AfficherOffresOptionCarrierComponent,
    AfficherOffresLinkedinComponent,
    AngleCircleComponent,
    BarChartsBasicComponent,
    FormulaireCVComponent,
    CvComponent,
    ModeleOneComponent,
    ModeleTwoComponent,
    OffresRecommanderComponent,
    AideComponent,
    FormStepperComponent,
    InterfaceComponent,
    InterfaceTwoComponent,
    AcceuillComponent,
    Page1Component,
    ContactComponent,
    MsjContactComponent,
    AjoutArticleComponent,
    SupprimerArticleComponent,
    DetailArticleComponent,
    ModifierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatDialogModule,
    MatRippleModule,
    MatSliderModule,
    NgbModule,
    MatDatepickerModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTabsModule,
    NgxPaginationModule,
    PdfViewerModule,
    NgApexchartsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSidenavModule,


  ],
  providers: [
      FormationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
