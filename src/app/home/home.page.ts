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
  constructor(public router: Router,private contactService: ContactService,private toastCtrl: ToastController) 
  {}
  
  ngOnInit(){
    this.contact = new Contact();
    
  }

   async goToLogin(contact:Contact) {
    //função de validação 
    //pegar parametros da tela "email" e "senha"
    //
    this.email = this.contact.email;
    this.senha = this.contact.senha;
    const usuario = await this.contactService.login(this.email,this.senha)
   
     
    
    if ( usuario.email  )
    {

      this.router.navigateByUrl('/login');
    }
     else{
      const toast = await this.toastCtrl.create({
        header: 'Erro',
        message: 'Erro ao fazer login.',
        color: 'danger',
        position: 'top',
        duration: 3000
      });
      toast.present();
     }
      
  }
  


  public goToCadastro() {
    this.router.navigateByUrl('/contacts/new');
  }

  public goToall() {
    this.router.navigateByUrl('/contacts');
  }

}
