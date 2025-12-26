import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.html',
  styleUrls: ['./customers.css']
})
export class CustomersComponent {

  customers = [
    { id: 1, name: 'Yasmine', email: 'yasmine@email.com', city: 'Casablanca' },
    { id: 2, name: 'Omar', email: 'omar@email.com', city: 'Rabat' },
    { id: 3, name: 'Sara', email: 'sara@email.com', city: 'Marrakech' }
  ];

}
