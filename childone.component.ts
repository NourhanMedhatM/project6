import { Component ,Output , EventEmitter} from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent {
  @Output() empltrans:EventEmitter<Employee> =new EventEmitter<Employee>();

  Employees: Employee [] = [
    {
      id: 1,
      name: "Medhat",
      city: "eg",
      add: "Helwan",
      age:57,
      useername:"MD",
    },
    {
      id: 2,
      name: "Nourhan",
      city: "eg",
      add: "Helwan",
      age:25,
      useername:"NM",
    },
    {
      id: 3,
      name: "Mariam",
      city: "eg",
      add: "maadi",
      age:18,
      useername:"MA",
    },
    {
      id: 4,
      name: "Ahmed",
      city: "eg",
      add: "maadi",
      age:27,
      useername:"AS",
    },
    {
      id: 5,
      name: "Toka",
      city: "eg",
      add: "maadi",
      age:22,
      useername:"TM",
    },
    {
      id: 6,
      name: "shosho",
      city: "eg",
      add: "maadi",
      age:47,
      useername:"sho",
    },
  ]

  addemployee(par:any){
    this.Employees.push({
      id: 1, name: par, city: "test", add: 'test', age: 0,
      useername: 'test'
    })  ;
    console.log(par);
     
  }
  emplytransfer(pat:Employee){
    this.empltrans.emit(pat)
  }


}
