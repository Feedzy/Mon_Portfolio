import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContenueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContenueProvider 
{
	
  projects = 'http://127.0.0.1:8000/api/projects.json';
  formations = 'http://127.0.0.1:8000/api/formations.json';
  profils = "http://127.0.0.1:8000/api/profils.json";
  competences = "http://127.0.0.1:8000/api/competences.json";
  technologies = "http://127.0.0.1:8000/api/techonologies.json";


  constructor(public http: HttpClient) {
    console.log('Hello ContenueProvider Provider');
  }

  project()
  {
    return new Promise(resolve => {
      this.http.get(this.projects).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  formation()
  {
    return new Promise(resolve => {
      this.http.get(this.formations).subscribe(data=>{
        resolve(data);
      }, err => {
        console.log(err)
      });
    });
  }
  profil()
  {
    return new Promise(resolve => {
      this.http.get(this.profils).subscribe(data=>{
        resolve(data);
      }, err => {
        console.log(err)
      });
    });
  }
  competence()
  {
    return new Promise(resolve => {
      this.http.get(this.competences).subscribe(data=>{
        resolve(data);
      }, err => {
        console.log(err)
      });
    });
  }
  technologie()
  {
    return new Promise(resolve => {
      this.http.get(this.technologies).subscribe(data=>{
        resolve(data);
      }, err => {
        console.log(err)
      });
    });
  }
}
