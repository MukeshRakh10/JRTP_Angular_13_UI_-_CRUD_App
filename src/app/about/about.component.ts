import { Component, Inject } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { Contact } from './contact';
FormGroup
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  msg : string = "";

  contactForm = new FormGroup({
    name : new FormControl(''),
    email: new FormControl(''),
    phno : new FormControl('')
  });

  constructor(@Inject(CommonService)
  private commonServices: CommonService) {}

  save = (data : any) =>{
    console.log(data.value);
    this.commonServices.save(data)
    .subscribe((data: any) => {
      console.log(data);
      this.msg = data;
    });

  }
  getWelcomeMsg() {
    let data = this.commonServices.getWelcomeMsg()
      .subscribe((data: any) => {
        console.log(data);
        this.msg = data;
      });
  }


}
