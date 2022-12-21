import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../about/contact';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.css']
})
export class ContacteditComponent {

  contact: Contact = new Contact(0, "", "", 0);
  id: number = 0;
  constructor(private contactService: CommonService,
    private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContact();
  }
  getContact() {
    this.id = this.activeRouter.snapshot.params['id'];
    console.log("UPDATED ID ::" + this.id);
    this.contactService.findContact(this.id).subscribe(
      (data: any) => {
        console.log("GETTING A CONTACT..");
        console.log(data);
        this.contact = data;
      },
      (error: any) => {
        console.log("SOMETHING WENT WRONG DURING GETTING A CONTACT..");
        console.log(error);
      }
    );
  }
  updateContact() {
    console.log("UPDATED ..");
    this.contactService.updateContact(this.contact).subscribe(
      (data: any) => {
        console.log("UPDATING A CONTACT..");
        console.log(data);
        this.router.navigate(['/list'])
      },
      (error: any) => {
        console.log("SOMETHING WENT WRONG DURING UPDATING A CONTACT..");
        console.log(error);
      });
  }

  backToMenu = () => {
    this.router.navigate(['list']);
  }

}