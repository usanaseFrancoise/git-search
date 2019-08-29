import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

 @Injectable()
export class ProfileService {
private username:string;
private clientid:"4cfc86596ae17d804dfd";
private clientsecret:"25a01fc0f57059d5554aca2a42b3238cf0084407";
  constructor(private http:HttpClient) { 
    console.log("service is now ready");
    this.username='usanaseFrancoise';
}
getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + 
  this.clientid + "&client_secret=" +this.clientsecret);
}
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + 
  this.clientid + "&client_secret=" +this.clientsecret);
}
updateProfile(username:string){
   this.username=username;
}
} 