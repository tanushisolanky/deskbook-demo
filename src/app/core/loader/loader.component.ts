import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  loader: boolean | undefined;

  constructor(private _ls: LoaderService) {
    this._ls.loader.subscribe((res) => {
      this.loader = res;
    });
  }
}
