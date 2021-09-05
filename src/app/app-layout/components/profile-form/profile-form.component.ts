import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  public profileForm:FormGroup;
  public showError;

  constructor(
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.profileForm=this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phoneNo:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
    })
  }

  addAddress(){
    if(this.profileForm.invalid){
      this.showError=true;
    }
    else{
      this.showError=false;
    }
  }

}
