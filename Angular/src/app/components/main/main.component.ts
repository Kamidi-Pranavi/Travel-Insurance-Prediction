import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  list=[
    {
      id:0,
      label:'Government Sector',
    },
    {
      id:1,
      label:'Private Sector/Self Employed',
    }
  ]
  list2=[
    {
      id:0,
      label:'Yes',
    },
    {
      id:1,
      label:'No',
    }
  ]
  

title = 'demo';

  constructor(
    private serviceService: ServiceService
    ) { }

  Age:any=30;
  EmploymentType:any;
  GraduateOrNot:any;
  AnnualIncome:any=1400000;
  FamilyMembers:any=4;
  ChronicDiseases:any;
  FrequentFlyer:any;
  EverTravelledAbroad:any;
  formValue:any;
  

  onSubmit(form:any){
    this.formValue=form.value;
    console.log(form.value);

    console.log(this.formValue.Area); //

    this.getPrediction(form.value); 
  }

  data:any; 
  message:any;
  getPrediction(data: any) {
    return this.serviceService.predictInsurance(data).subscribe((response: {}) => {
      let data: any = response;
      this.data=data;
      
      console.log(this.data);

      console.log(this.data?.TravelInsurance);

      if (this.data?.TravelInsurance=="0"){
        this.message = "Generally, insurance is not preferred for you.";
      }else{
        this.message = "You're recommended to get an insurance policy.";
      }

    });
  } 


}