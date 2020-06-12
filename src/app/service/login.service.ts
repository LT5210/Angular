import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService{
    constructor(private httpClient: HttpClient){}
    public login(userId: string, password: string) {
        const body = {
            userId: userId,
            password: password
        };
       // return this.httpClient.post('http://localhost:8080/login', body);
       return this.httpClient.get<boolean>('assets/testJson/login.json');

    }
}