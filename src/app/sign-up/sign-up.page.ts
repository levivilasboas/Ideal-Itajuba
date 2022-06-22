import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/Ususario';
import { StorageService } from '../services/storage.service';
import { CpfValidator } from '../validators/cpf-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  

  formCadastro: FormGroup;
  
  usuario : Usuario = new Usuario();

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'invalido', mensagem: 'CPF Inválido.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ]
  }

  constructor(private formBuilder: FormBuilder,public router: Router, private storageService: StorageService) {
    this.formCadastro = this.formBuilder.group({
      nome: ['',Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['',Validators.compose([Validators.required, CpfValidator.cpfValido])],
      email: ['',Validators.compose([Validators.required, Validators.email])],
      senha: ['',Validators.compose([Validators.required, Validators.minLength(6)])],
      telefone: ['',Validators.compose([Validators.required])]  , 
      inss: ['',Validators.compose([Validators.required])]     
    });
  }

  

  ngOnInit(){  
   
  }

 async PossuiINSS(){
    //this.usuario.inss = this.formCadastro.value.inss['sim'];
  }



  async salvarCadastro(){
    console.log("formulario",this.formCadastro.valid);
    this.usuario.nome = this.formCadastro.value.nome;
    this.usuario.cpf = this.formCadastro.value.cpf;
    this.usuario.email = this.formCadastro.value.email;
    this.usuario.senha = this.formCadastro.value.senha;
    this.usuario.telefone = this.formCadastro.value.telefone;
    this.usuario.inss = this.formCadastro.value.inss;
   await this.storageService.set(this.usuario.email , this.usuario);
   this.router.navigateByUrl('/home')

  }

  ComInss(){
    this.formCadastro.value.inss = 'sim';
  }
  SemInss(){
    this.formCadastro.value.inss = 'nao';
  }

}
   
