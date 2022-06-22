import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Ususario';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  listaUsuarios: Usuario[] = [];

  constructor(public router: Router, private storageService : StorageService) 
  {}
  
 async buscarUsuarios(){
   this.listaUsuarios = await this.storageService.getAll();
   
 }

 chamateste(){
   console.log("formulario nome",this.storageService.getAll())
 }
 async excluirCadastro(email :string) {
   await this.storageService.remove(email);
   this.buscarUsuarios();
}

 IonViewDidEnter(){
  this.buscarUsuarios();
}

  ngOnInit(){
    
  }

  public goToSignUpPage() {
    this.router.navigateByUrl('/sign-up');
  }

}
