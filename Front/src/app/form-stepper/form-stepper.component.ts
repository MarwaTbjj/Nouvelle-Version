import {Component, Inject, OnInit} from '@angular/core';
import {Image} from "../Entity/image";
import {Competence, EXPERIENCES, FORMATIONS, LOISIR} from "../Components/CV/formulaire-cv/formulaire-cv.component";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ModeleOneComponent} from "../Components/CV/modele-one/modele-one.component";
import {ModeleTwoComponent} from "../Components/CV/modele-two/modele-two.component";

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.css']
})
export class FormStepperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  }
