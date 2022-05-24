import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{

  constructor(private httpClient:HttpClient) { }
p1:string[]=["Dazler","kajal","amazon"]
p2:string[]=["Eyetex","Bindi","FLipkart"]
p3={
  name:'yardley',
  item:'perfume',
  seller:'nyka'}


getP1(){
  console.log(this.p1);
  return this.p1;
}

getP2(){
  return this.p2;
}

getP3(){
  console.log(this.p3)
  return this.p3;
}

getDataFromWebApi()
{
 return this.httpClient.get('http://localhost:3000/posts');
 //return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
}
ngOnInit(): void {
  
  
}



addDataToApI(newData:any){
 console.log(newData)
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
}); 

  let options = {
    headers: httpHeaders
       }; 

  return this.httpClient.post('http://localhost:3000/posts',newData,{headers:httpHeaders});

}
}


