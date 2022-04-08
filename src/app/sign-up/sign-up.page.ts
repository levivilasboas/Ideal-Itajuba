import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  INSS:boolean = false

  public fGroup: FormGroup;

  constructor(private fBuilder: FormBuilder,public router: Router) {
    this.fGroup = this.fBuilder.group({
      'name': ['',Validators.compose([
          Validators.required
      ])],
      'email': ['',Validators.compose([
        Validators.required
    ])],
      'senha': ['',Validators.compose([
        Validators.required
    ])],
      'number': ['',Validators.compose([
        Validators.required
    ])],
      'CPF': ['',Validators.compose([
        Validators.required
    ])],
      'idade': ['',Validators.compose([
        Validators.required
    ])],
    
    });
   }

  ngOnInit() {
    console.log(this.fGroup.value);
  }



  submitform(){//// Jogar dados para o banco e ir para pagina incial
    console.log(this.fGroup.value);
    //this.router.navigateByUrl('/home');
  }

  PossuiINSS(){
    this.INSS = true;
  }

  RecebeINSS(){
    if(this.INSS === true)
this.fGroup.setControl('INSS', this.fBuilder.control('sim', [Validators.required]));
else
this.fGroup.setControl('INSS', this.fBuilder.control('não', [Validators.required]));
  }


}
   
