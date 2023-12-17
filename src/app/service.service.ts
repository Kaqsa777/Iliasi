import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private info:HttpClient) { }

  getAllRooms(){
    return this.info.get("https://hotelbooking.webwide.ge/api/Rooms/GetAll")
  }
}
