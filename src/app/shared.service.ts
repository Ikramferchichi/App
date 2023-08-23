import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  heros : any[]=[];
  constructor(private http:HttpClient){

  }

  url='http://127.0.0.1:3000/hero/';
   
  //url+/ajout ===> http://127.0.0.1:3000/hero/ajout
  //ajout Hero : endpoint post body 
  create(hero : any){
     return this.http.post(this.url+'ajout',hero)
  }

  //getAllheros
  getAllHeros(){
    return this.http.get(this.url+'all');
  }

  deleteHero(id:any){
    return this.http.delete(this.url+'supprimer/'+id);
  }

  getHeroById(id:any){
   return this.http.get(this.url+'getbyid/'+id);
  }

  updateHero(id:any , hero: any){
    return this.http.put(this.url+'update/'+id,hero);
  }
  ajoutHeroImage(hero:any){
  return this.http.post(this.url+'/create',hero)
  }
}
