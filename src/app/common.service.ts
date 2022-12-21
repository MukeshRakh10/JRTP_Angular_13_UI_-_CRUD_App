import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './about/contact';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  loginUser: Login[] = [
    new Login("Ram", "1234Ram"),
    new Login("mukesh", "1245")
  ]

  constructor(private http: HttpClient) { }

  save = (data: any): any => {
    console.log("Data is ", data);
    let con = new Contact(data.id, data.name, data.email, data.phno);
    return this.http.post("http://localhost:8082/app/save", con, { responseType: "text" });
  }
  getContactList = (): Observable<Contact> => {
    return this.http.get<Contact>("http://localhost:8082/app/list", { responseType: "json" });
  }

  login = () => {
    return "Login Business Logic ..."
  }
  getWelcomeMsg = (): any => {
    return this.http.get("http://localhost:8082/app/", { responseType: "text" });
  }

  findContact = (id: number): Observable<Contact> => {
    return this.http.get<Contact>("http://localhost:8082/app/findById/"+id, { responseType: "json" });
  }
  
  updateContact = (data: any): any => {
    console.log("Update : Data is  ", data);
    let con = new Contact(data.id, data.name, data.email, data.phno);
    return this.http.put("http://localhost:8082/app/update", con, { responseType: "text" });
  }

  deleteContactRecord(id:number){
    console.log("Delete is is ",id);
    return this.http.delete("http://localhost:8082/app/delete/"+id, { responseType: "text" });
  }

}
