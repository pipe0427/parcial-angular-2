import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { Login } from '../login';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup
  login: Login = new Login()
  

  constructor(private fb: FormBuilder,
    private router:Router,
    private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginForm = this.iniciarFormulario()
  }

  iniciarFormulario(): FormGroup {
    return this.fb.group({
      email: ['parcial22@eam.edu.co', [Validators.required]],
      password: ['654321', [Validators.required,Validators.minLength(5)]]
    })

  }

  onLogin() {
    if (this.loginForm.valid) {
      this.extractData()
      this.loginService.login(this.login).subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('dashboard')
        SwalUtils.customMessageOk('Bienvenido','login Correcto')        
      }, (error) => {
        this.router.navigateByUrl('dashboard')
        SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')        
        console.log(error);
        console.log("primer error")
        
      })      
    } else {
      this.router.navigateByUrl('dashboard')
      SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')   
      console.log("segundo error")     
    }
    console.log(this.loginForm);

  }

  extractData() {
    this.login.email = this.loginForm.get("email")?.value
    this.login.password = this.loginForm.value.password
  }
}
