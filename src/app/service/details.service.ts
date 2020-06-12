import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class DetailsService {
    constructor(private httpClient: HttpClient){}

    public search(data: any) {
        return this.httpClient.get('assets/testJson/getDetails.json',{params: data});
    }
}