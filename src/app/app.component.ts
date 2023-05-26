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
  loader: boolean;
  constructor(  
    private loaderService: LoaderService){
    this.loader = false;
   
  }

  ngOnInit(): void {
    // this._postdataService.loader.subscribe(res => {
    //   this.result = res;
    //   console.log(this.result);
      
    // })
    this.loaderService.status.subscribe((res) => {
      console.log('res : ' , res);
      
      
      this.loader = res;
    });
}
}
