import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceuill',
  templateUrl: './acceuill.component.html',
  styleUrls: ['./acceuill.component.css']
})
export class AcceuillComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
open(){
  this.route.navigate(['/cv'])
}
}
