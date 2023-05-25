import { Component, Input, OnInit } from '@angular/core';
import { ProfileStandardClaims } from 'oidc-client';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'header-ui',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  /** user profile data */
  @Input() userData!: ProfileStandardClaims;
  
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  public logout() {
    this._authService.logout();
  }
}
