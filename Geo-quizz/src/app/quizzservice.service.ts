import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import Question from './question';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizzserviceService {

  constructor(private http: HttpClient) { }
}
