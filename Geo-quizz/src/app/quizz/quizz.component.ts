import { Component, OnInit } from '@angular/core';
import Question from '../question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  questions: Question[]; //Les questions à poser
  iQuestion = 0; // L’indice de La question en cours
  currentQuestion: Question; // La question en cours
  answer: string; // La réponse
  found: boolean; // La réponse a été trouvée ou pas
  hasNext = true; // il y a encore une question après
  time: string
  message: string




  constructor() {

  }
  ngOnInit() {

  }

  // Pour lancer une partie
  newGame(e) {
    console.log(e);
    this.time = e;
    if (this.time == "0") {
      this.timeSpent();
    }
    this.time = e + " Seconds Left....";
  }

  // Pour charger la prochaine question
  loadNextQuestion() {
    console.log("Load Next Question");
  }

  // Pour lancer un traitement si le temps est écoulé
  timeSpent() {
    this.message = "Temps écoulé !"
    console.log("Time Spent");
  }

  // Pour proposer une réponse
  answerGiven() {
    console.log("Answer Given");
  }

  // Pour afficher la réponse
  showAnswer() {
    console.log("Show Answer");
  }

}
