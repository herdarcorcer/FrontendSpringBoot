import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private url = "http://localhost:8080/api/v1/personas/"

  constructor( private http:HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  create(persona){
    return this.http.post(this.url, persona);
  }

  getFind(idPersona){
    return this.http.get(this.url+'/'+idPersona);
  }

  update(persona){
    return this.http.put(this.url, persona);
  }

  delete(idPersona){
    return this.http.delete(this.url+'/'+idPersona);
  }


}
