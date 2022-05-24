import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent  {
 options:string[]=["Dazler","kajal","amazon"]
  constructor(public dService:DataService){

  }
  title = 'autocompl';
 
prod1:string[]=[];
prod2:string[]=[];
webdata:any;
getProd1(){
 this.prod1= this.dService.getP1();
}
 getProd2()
 {

 }

 fetchData(){
   this.dService.getDataFromWebApi().subscribe(rcvdData=>{this.webdata=rcvdData;})
 }

 
 insertData(){
 const newData:any={
    "id": 10,
    "name": "Lotusr",
    "brand": "Moisturizer"
  };
   this.dService.addDataToApI(newData).subscribe(()=>{
     console.log('hi');
   });
 }

}
