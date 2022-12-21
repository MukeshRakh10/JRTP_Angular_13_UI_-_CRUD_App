import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../about/contact';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent {
  constructor(@Inject(CommonService) private serivce: CommonService,
              private router:Router) { }

  cf = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phno: new FormControl('')
  })
  createContact(formData: any) {
    const c = new Contact(formData.value.id, formData.value.name, formData.value.email, formData.value.phno);
    this.serivce.save(c).subscribe(
      (res: any) => {
        console.log("SUCCESSFULL........");
        console.log(res);
        this.redirectToContactList();
       },
       (error:any) =>{
          console.log(error);
       }  
    )

  }

  redirectToContactList(){
    this.router.navigate(['/list']);
  }
  backToMenu = () =>{
    this.router.navigate(['/contactUs']);
  }

}
