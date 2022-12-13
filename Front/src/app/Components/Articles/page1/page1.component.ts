import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../../../Services/article.service";
import {Article} from "../../../Entity/Article";
import {HttpErrorResponse} from "@angular/common/http";
import {Offres} from "../../../Entity/Offres";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  public p: number = 1;
  public centered = false;
  public unbounded = false;
  public checked = false;
  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private router:Router) {
  }

  articles:Article[]=[];
  public article: Article = {
    id: 0,
    titre: "",
    date_creation: "",
    description: "",
    sous_titre1: "",
    description1: "",
    sous_titre2: "",
    description2: "",
    sous_titre3: "",
    description3: "",
    sous_titre4: "",
    description4: "",
    sous_titre5: "",
    description5: "",
    image: {
      file: new File([], ""),
      url: ""
    },
  }
  private idB = 0;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idB = params['id']});
    this.getAllArticle()
  }

  public getArticle(): void {
    this.articleService.findArticleById(this.idB).subscribe(
      (responce: Article) => {
        this.article = responce;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getAllArticle() {
    this.articleService.getAllArticle().subscribe(
      (response: Article[]) => {
        this.articles =response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getDetails(id: number) {
    this.router.navigate(['/detail-article'],{ queryParams: { id:id} });
    setTimeout(function(){
      window.location.reload();
    }, 1);
  }
}






