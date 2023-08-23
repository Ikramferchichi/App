import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-hero',
  templateUrl: './ajout-hero.component.html',
  styleUrls: ['./ajout-hero.component.css']
})
export class AjoutHeroComponent  implements OnInit{

  constructor(public _shared:SharedService , private router: Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  newHero={
    name:'',
    power:0,
  
  }
  
 
  //image d'uplode
    AjouterHero(){
     
      //this._shared.heros.push(this.newHero);
      this._shared.create(this.newHero)
      .subscribe((rep)=>{

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hero added sucessfully !',
          showConfirmButton: false,
          timer: 1500
        })
        //console.log(rep);
        this.newHero={
          name:'',
          power:0
       
        }

        this.router.navigate(['/list'])
       
      })
     
      
    }
    MyFile:any 
    SelectHero(e:any){
      console.log("event",e);
      this.MyFile=e.target.files[0]
      console.log("MyFile",this.MyFile);
      
    }
    AjoutHeroImage(){
      let myFormData=new FormData();
      myFormData.append('name',this.newHero.name);
      myFormData.append('power',this.newHero.power.toString());
      myFormData.append('image',this.MyFile);

      this._shared.ajoutHeroImage(myFormData)
      .subscribe((Response)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Hero added sucessfully !',
          showConfirmButton: false,
          timer: 1500
        })
        //console.log(rep);
        this.newHero={
          name:'',
          power:0
       
        }

        this.router.navigate(['/list'])
      },err=>{
        console.log(err);
        
       
      }
    )}
}



/***
 * service 
 * 1-shared data between components 
 * 2-communication avec backend
 * 3-Dependency Injection (http , service dans comopnent )
 * 4- consommation fct eli fi west e service (subscribe)   : post , get 
 * 
 * 
 * next time 
 * put , delete 
 * routing
 * uploadfile
 * 
 * ToDoApp(revision)
 * 
 */