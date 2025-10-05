import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { veiculo, VinInfos } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class Dashboard {
  http = inject(HttpClient);

  getVeiculos(): Observable<veiculo[]> {
    return this.http.get<veiculo[]>('http://localhost:3001/vehicles');
  }

  getVinInfos(vin: string){
     return this.http.post<VinInfos>('http://localhost:3001/vehicleData', { vin });

  }
}
