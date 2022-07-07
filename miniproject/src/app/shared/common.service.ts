import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http :HttpClient ) { }

  url : string = "http://localhost:3000/Employee"

  saveEmp(emp : Employee)
  {
    return this.http.post(this.url,emp)
  }

  getAllData() :Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.url)
  }

  deleteData(emp :Employee)
  {
    return this.http.delete(this.url + "/" + emp.id )
  }

  get1Employee(id:number) :Observable<Employee>
  {
    return this.http.get<Employee>(this.url+"/"+id)
  }

  updateData(emp :Employee)
  {
    return this.http.put(this.url+"/"+emp.id ,emp)
  }


  url1 :string = "http://localhost:3001/company"

  registerComp(comp:Company)
  {
    return this.http.post(this.url1 , comp)
  }

  getallcomp() :Observable<Company[]>
  {
    return this.http.get<Company[]>(this.url1)
  }

  deleteComp(company:Company)
  {
    return this.http.delete(this.url1+"/"+ company.id)
  }
}
