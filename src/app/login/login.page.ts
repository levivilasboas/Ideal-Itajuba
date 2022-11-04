import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contacts/shared/contact';
import { ContactService } from '../contacts/shared/contact.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  contacts: Contact[] = [];
  contact: Contact;
  constructor(public router: Router,private contactService: ContactService, ) { }

 async ngOnInit() {
      
    
  }


  gotoSimulacao(){
    this.router.navigateByUrl('/simulacao');
  }

  
  
}
