import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-demande-cours',
  templateUrl: './demande-cours.component.html',
  styleUrls: ['./demande-cours.component.scss'],
})
export class DemandeCoursComponent implements OnInit {
  cours = [
    {
      matiere: "Mathematique",
      date: "Jeu. 16 avril 9h00 - 10h00",
      personne: "La daronne à brice"
    },
    {
      matiere: "Français",
      date: "Jeu. 16 avril 10h00 - 11h00",
      personne: "La daronne à brice"
    },
    {
      matiere: "Histoire",
      date: "Jeu. 16 avril 11h00 - 12h00",
      personne: "La daronne à brice"
    }
  ];
  constructor() { }

  ngOnInit() {}

  public accept(cours: string) {
    console.log(cours);
  }

  public refuse(cours: string) {
    console.log(cours);
  }
}
