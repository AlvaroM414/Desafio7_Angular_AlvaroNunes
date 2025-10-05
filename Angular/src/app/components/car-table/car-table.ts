import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-table',
  imports: [],
  templateUrl: './car-table.html',
  styleUrl: './car-table.css'
})
export class CarTable {
  @Input() vin: string = "";
  @Input() km: number = 0;
  @Input() nivelCombustivel: number = 0;
  @Input() status: string = "";
  @Input() lat: number = 0;
  @Input() long: number = 0;

}
