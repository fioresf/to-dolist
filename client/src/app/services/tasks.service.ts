import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Task } from '../interfaces/Task';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  urlAPI = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient
      .get<Task[]>(`${this.urlAPI}/tasks`)
      .pipe(catchError(this.handleError));
  }

  createTask(task: Task): Observable<Task | Task[]> {
    return this.httpClient
      .post<Task>(`${this.urlAPI}/tasks`, task)
      .pipe(catchError(this.handleError));
  }

  updateTask(id: string, task: Task): Observable<Task | Task[]> {
    return this.httpClient
      .put<Task>(`${this.urlAPI}/tasks/${id}`, task)
      .pipe(catchError(this.handleError));
  }

  deleteTask(id: string): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.urlAPI}/tasks/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw new Error('Something went wrong; please try again later.');
  }
}
