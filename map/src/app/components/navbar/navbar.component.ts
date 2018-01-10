import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

import {Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
spec:string;

  constructor(private authService:AuthService,
  			  private router : Router) { }

  ngOnInit() {
  }
  onSubmit(){
  	console.log(this.spec);
  	this.router.navigate(['/showone/'+this.spec]);
  }

}
