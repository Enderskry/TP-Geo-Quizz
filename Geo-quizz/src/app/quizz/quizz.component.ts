import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  // questions: Question[]; //Les questions à poser
  // iQuestion = 0; // L’indice de La question en cours
  // currentQuestion: Question; // La question en cours
  // answer: string; // La réponse
  // found: boolean; // La réponse a été trouvée ou pas
  // hasNext = true; // il y a encore une question après

  constructor() { }

  ngOnInit() {
  }

  // Pour lancer une partie
  newGame(){

  }

  // Pour charger la prochaine question
  loadNextQuestion(){

  }

  // Pour lancer un traitement si le temps est écoulé
  timeSpent(){

  }

  // Pour proposer une réponse
  answerGiven(){

  }

  // Pour afficher la réponse
  showAnswer(){

  }

}
