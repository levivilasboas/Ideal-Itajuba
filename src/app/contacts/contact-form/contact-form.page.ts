import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectValueAccessor, ToastController } from '@ionic/angular';
import { Contact } from '../shared/contact';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {
  title: string = "Novo Contato";
  contact: Contact;
  urlW:string;
  

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.contact = new Contact();

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam){
      this.title = 'Editar Contato';
      this.loadContact(parseInt(idParam));
    }
    
    
  }
  
  
  async loadContact(id: number){
    this.contact = await this.contactService.getById(id);
  }


  async onSubmit(){
    try {
      const result = await this.contactService.save(this.contact);
      this.contact.id = result.insertId;

      const toast = await this.toastCtrl.create({
        header: 'Sucesso',
        message: 'Contato salvo com sucesso.',
        color: 'success',
        position: 'top',
        duration: 3000
      });
        toast.present();
    } catch (error) {
      

      const toast = await this.toastCtrl.create({
        header: 'Erro',
        message: 'Erro ao salvar contato.',
        color: 'danger',
        position: 'top',
        duration: 3000
      });
      toast.present();
     

    }
  }






}
