import { Injectable } from '@angular/core';


import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  url:any = "http://3.93.135.223/predictInsurance";

 
  predictInsurance(data:any): Observable<any> {
    
    this.url += "?Age="+data.Age+"&EmploymentType="+data.EmploymentType+"&GraduateOrNot="+data.GraduateOrNot+"&AnnualIncome="+
    data.AnnualIncome+"&FamilyMembers="+data.FamilyMembers+"&ChronicDiseases="+data.ChronicDiseases+"&FrequentFlyer="+data.FrequentFlyer+
    "&EverTravelledAbroad="+data.EverTravelledAbroad;

    console.log(this.url);

    return this.http
      .get<any>(this.url);
  }

}




