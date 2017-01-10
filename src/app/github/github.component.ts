import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html'
})
export class GithubComponent implements OnInit {
  user: any;

  constructor(private _githubService: GithubService) {
    console.log('github component Init....');
    this._githubService.getUser().subscribe(user =>{
        console.log(user);
        this.user = user;
    });
   }

  ngOnInit() {
  }

}
