import { Component } from '@angular/core';
import { GitHubService} from '../services/github.service';


@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,

})
export class ProfileComponent  {

  constructor(private _gitHubService: GitHubService){
      this._gitHubService.getUser().subscribe(user => {
        console.log(user)
      });
  }

}
