import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {OffreService} from "../../../Services/offre.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-suppression',
  templateUrl: './valider-suppression.component.html',
  styleUrls: ['./valider-suppression.component.css']
})
export class ValiderSuppressionArticle implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


}

