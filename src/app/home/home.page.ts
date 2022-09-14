import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Contact } from '../contacts/shared/contact';
import { ContactService } from '../contacts/shared/contact.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  email:string;
  senha:string;
  contacts: Contact[] = [];
  contact: Contact;
  constructor(public router: Router,private contactService: ContactService) 
  {}
  
  ngOnInit(){
    this.contact = new Contact();
    
  }

   async goToLogin(contact:Contact) {
      this.router.navigateByUrl('/login');
  }
  


  public goToCadastro() {
    this.router.navigateByUrl('/contacts/new');
  }

  public goToall() {
    this.router.navigateByUrl('/contacts');
  }

}
