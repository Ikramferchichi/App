import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent  implements OnInit{
 
  newHero:any;
  id:any;   //id eli fel route 
  constructor(private _shared : SharedService , 
              private actRoute : ActivatedRoute, 
              private router:Router){

  }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this._shared.getHeroById(this.id).subscribe((res)=>{
      console.log("res",res);
      this.newHero=res;
    })

  }

  ModifierHero(){
    this._shared.updateHero(this.id,this.newHero) .subscribe((res)=>{
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Hero sucessfuly updated',
        showConfirmButton: false,
        timer: 1500
      })
       this.router.navigate(['/list']);
    },err=>{

    })
  }
}
