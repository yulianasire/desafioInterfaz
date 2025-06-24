import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from './estudiante.interface';
import { Observable } from 'rxjs';
import { EstudiantePost } from './estudiantePost.interfaces';

let apiUrL: string = 'https://tzopeaetcjcbvedhsush.supabase.co/rest/v1/estudiantes';
let apiKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6b3BlYWV0Y2pjYnZlZGhzdXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjM0NTMsImV4cCI6MjA2MjgzOTQ1M30.-XrOQuF-uLYasbD5K-eJtUFQmwfZSii4zs1gJiotZxs";
let auth: string = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6b3BlYWV0Y2pjYnZlZGhzdXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjM0NTMsImV4cCI6MjA2MjgzOTQ1M30.-XrOQuF-uLYasbD5K-eJtUFQmwfZSii4zs1gJiotZxs";




//crear heder
const headers= new HttpHeaders({
  apiKey: apiKey,
  'Authorization': auth,
  'Content-Type': 'application/json'
})

@Injectable({
  providedIn: 'root'
})
export class EstudiantesApiService {

  constructor(private httpCli: HttpClient) {}

    //metodo para obtener datos de la api
    obtenerEstudiantes(){
      return this.httpCli.get<Estudiante[]>( apiUrL, {headers})
    }
  // Método para crear un estudiante
  crearEstudiante(estudiante: EstudiantePost): Observable<Estudiante> {
    return this.httpCli.post<Estudiante>(apiUrL, estudiante, {
      headers: headers.set('Prefer', 'return=representation')
    });
  }
  // Método para actualizar un estudiante
  actualizarEstudiante(id: number, estudiante: EstudiantePost): Observable<Estudiante> {
    return this.httpCli.patch<Estudiante>(`${apiUrL}?estu_id=eq.${id}`, estudiante, {
      headers: headers.set('Prefer', 'return=representation')
    });
  }
  // Método para eliminar un estudiante
  eliminarEstudiante(id: number): Observable<any> {
    return this.httpCli.delete(`${apiUrL}?estu_id=eq.${id}`, {
      headers: headers
    });
  }
}
