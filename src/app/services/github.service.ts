import { Injectable} from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'alexlondon07';
    // OAuth Github
    private cliente_id = '447ffba182857834b283';
    private cliente_secret = 'd5d063924416d0c94b1623ac3308709ff205c313';

    constructor(private _http:Http){
        console.log('Github service Init...');
    }
    
    /**
     * Function to get a Github user information
     */
    getUser(){
        return this._http.get('https://api.github.com/users/' + this.username)
            .map(res => res.json());
    }

    /**
     * Function to get Github repos information
     */
    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos')
        .map(res =>res.json());
    } 

    /**
     * Function for update username to get information 
     */
    updateUsername(username){
        this.username = username;
    }
}