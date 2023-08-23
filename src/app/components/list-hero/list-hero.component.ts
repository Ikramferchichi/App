import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {
  heros : any
  constructor(public _shared:SharedService){

  }
  ngOnInit(): void {
    
    this._shared.getAllHeros()
    .subscribe((rep)=>{
      this.heros=rep;
      console.log(this.heros)

    })
  }


  DeleteHero(id:any){


    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
           // confirmation done 

           this._shared.deleteHero(id)
           .subscribe(res=>{
             this.ngOnInit();
           })



        Swal.fire(
          'Deleted!',
          'Your Hero has been deleted.',
          'success'
        )
      }
    })










   
  }

 
  

}
