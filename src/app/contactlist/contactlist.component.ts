import { Component, Inject, } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent {
  contactList: any;
  constructor(@Inject(CommonService) 
  private commonService: CommonService,private router :Router) {
    commonService.getContactList().subscribe((list) => {
      this.contactList = list;
    })

  }
  edit = (id:number) => {
    console.log("Edited :: "+id);
    this.router.navigate(['/edit',id]); 
    }
  delete = (id:number) => {
    this.commonService.deleteContactRecord(id).subscribe((msg:string) => {
      console.log("Delete msg",msg);
      this.router.navigate(['contactUs']); 
    })

  }
  backToMenu = () =>{
    this.router.navigate(['contactUs']);
  }


}
