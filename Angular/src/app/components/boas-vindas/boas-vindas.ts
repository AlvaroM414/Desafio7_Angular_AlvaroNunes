import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuLateral } from "../menu-lateral/menu-lateral";

@Component({
  selector: 'app-boas-vindas',
  imports: [MenuLateral],
  templateUrl: './boas-vindas.html',
  styleUrl: './boas-vindas.css'
})
export class BoasVindas {
  
}
