import { Component, Input } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-childtow',
  templateUrl: './childtow.component.html',
  styleUrls: ['./childtow.component.css']
})
export class ChildtowComponent {
  @Input()employee! : Employee;

}
