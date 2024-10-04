import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Task } from '../interfaces/Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  urlAPI = environment.apiURL; 

  constructor(private httpClient: HttpClient) { }
  getTasks() {
    return this.httpClient.get<Task | Task[]>(`${this.urlAPI}/tasks`);
  }

  createTask(task: Task):  Observable<Task | Task[]>  {
    return this.httpClient.post<Task | Task[]>(`${this.urlAPI}/tasks`, task);
  }

  updateTask(id: string, task: Task): Observable<Task | Task[]>  {
    return this.httpClient.put<Task | Task[]>(`${this.urlAPI}/tasks/${id}`, task);
  }

  deleteTask(id: string) : Observable<Task | Task[]> {
    return this.httpClient.delete<Task | Task[]>(`${this.urlAPI}/tasks/${id}`);
  }

}
