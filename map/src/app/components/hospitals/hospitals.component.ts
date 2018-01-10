import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {hospital} from './model';
import {Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 28.6305;
  lng: number = 77.3721;
  zoom :number = 15;
  flag :number = 1;
  hospitald:hospital[];
  style1:string = 'style3';
  style2:string = 'style4';
  name:string='';
  address:string='';
  speciality:[string]=[''];
  services:[string]=[''];
  phone1:string='';
  phone2:string='';
  phone3:string='';
  _lastOpenIndex: number = -1;
  labelOptions = {
color: '#32CD32',
fontFamily: '',
fontSize: '14px',
fontWeight: 'bold',
text: 'My loc',
}



  constructor(private authService:AuthService,
          private router : Router) { }

  ngOnInit() {
  this.authService.getData()
        .subscribe(result =>{
        
        	this.hospitald=result;
        	console.log(this.hospitald);

        	},);
  };

clickedMarker(hospital:hospital , index:number)
{
  this.style1='style1';
  this.style2='style2';
  hospital['isOpen'] = true;
  if (this._lastOpenIndex > -1) this.hospitald[this._lastOpenIndex]['isOpen'] = false;
  this._lastOpenIndex = index;
  if(hospital && index)
	{
    this.name = hospital.name;
    this.address = hospital.address;
    this.speciality = hospital.speciality;
    this.services = hospital.services;
    this.phone1=hospital.phone1;
    this.phone2=hospital.phone2;
    this.phone3=hospital.phone3;
    

  }
}
}