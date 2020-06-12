import { LoginService } from './../service/login.service';
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'account-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public userId: string;
    public password: string;

    constructor(private router: Router, private loginService: LoginService){}

    public login() {
        this.loginService.login(this.userId, this.password).subscribe((result: boolean) => {
            if(result){
                this.router.navigate(['details']);
            }else{
                alert('用户名密码错误');
            }
        });
    }

}