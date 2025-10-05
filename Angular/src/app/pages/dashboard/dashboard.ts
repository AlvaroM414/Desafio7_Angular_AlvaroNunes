import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Card } from "../../components/card/card";
import { CarTable } from "../../components/car-table/car-table";
import { Dashboard as DashboardService } from '../../services/dashboard';
import { veiculo, VinInfos } from '../../models/car';
import { MenuLateral } from "../../components/menu-lateral/menu-lateral";

@Component({
  selector: 'app-dashboard',
  imports: [Card, CarTable, MenuLateral],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  dashboardService = inject(DashboardService);
  cdr = inject(ChangeDetectorRef);

  veiculos: veiculo[] = [];
  veiculoSelected: veiculo = {
    id: 0,
    connected: 0,
    volumetotal: 0,
    softwareUpdates: 0,
    vehicle: '',
    img: '',
    vin: ''
  }

  vinInfos: VinInfos = { 
    id: 0,
    odometro: 0,
    nivelCombustivel: 0,
    status: '',
    lat: 0,
    long: 0
  };
  
  ngOnInit() {
    this.dashboardService.getVeiculos().subscribe({
      error: (err) => {
        console.error('Erro ao buscar veículos:', err);
      },
      next: (vehicles) => {
        this.veiculos = Object.values(vehicles) as veiculo[];
        if (this.veiculos.length > 0) {
          this.veiculoSelected = this.veiculos[0];
        }

        if (this.veiculoSelected && this.veiculoSelected.vin) {
          this.dashboardService.getVinInfos(this.veiculoSelected.vin).subscribe({
            error: (err) => {
              console.error('Erro ao buscar informações do VIN:', err);
            },
            next: (vinInfos) => {
              this.vinInfos = vinInfos;
              this.cdr.detectChanges();
            },
          });
        }
      }
    });
  }

  onSelectVeiculo(event: Event) {
    const id = Number((event.target as HTMLSelectElement).value);
    const veiculo = this.veiculos.find(v => v.id === id);
    if (veiculo) {
      this.veiculoSelected = veiculo;
      
      this.dashboardService.getVinInfos(this.veiculoSelected.vin).subscribe({
        error: (err) => {
          console.error('Erro ao buscar informações do VIN:', err);
        },
        next: (vinInfos) => {
          this.vinInfos = vinInfos;
          this.cdr.detectChanges();
        },
      });
    }
  }

  onEditVin() {
     
  }
}