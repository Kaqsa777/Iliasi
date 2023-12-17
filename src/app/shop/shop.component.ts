import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  infoblock:any

  constructor(private Http:ServiceService){
    this.Http.getAllRooms().subscribe((data:any) =>{
     this.infoblock = data;
     console.log(this.infoblock)
    })
  }
}
