import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

 @Injectable()
export class ProfileService {
private username:string;
private access_token:"4d3d9f61c28be3d3affb2948dfe3996dac0dacc6";
  constructor(private http:HttpClient) { 
    console.log("service is now ready");
    this.username='usanaseFrancoise';
    this.access_token="4d3d9f61c28be3d3affb2948dfe3996dac0dacc6";
}
getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + 
  this.access_token );
}
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + 
  this.access_token );
}
updateProfile(username:string){
   this.username=username;
}
} 