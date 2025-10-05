import { Component } from '@angular/core';
import { BoasVindas } from "../../components/boas-vindas/boas-vindas";

@Component({
  selector: 'app-home',
  imports: [BoasVindas],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
