import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html'
})
export class GithubComponent implements OnInit {
  user: any;
  repos: any;

  constructor(private _githubService: GithubService) {

    this._githubService.getUser().subscribe(user =>{
        //console.log(user);
        this.user = user;
    });

    this._githubService.getRepos().subscribe(repos =>{
        console.log(repos);
        this.repos = repos;
    });

   }

  ngOnInit() {
  }

}
