import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader/loader.service';
import { PostdataService } from './register/service/postdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desk-book';
  result : any;
  constructor(private _postdataService : LoaderService){

  }

  ngOnInit(): void {
    this._postdataService.loader.subscribe(res => {
      this.result = res;
      console.log(this.result);
      
    })
}
}
