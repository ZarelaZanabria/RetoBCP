import { Component, OnInit } from '@angular/core';
import { agencias } from '../../data/agencias'
import { Router } from '@angular/router';


@Component({
  selector: 'app-agencias-list',
  templateUrl: './agencias-list.component.html',
  styleUrls: ['./agencias-list.component.scss']
})


export class AgenciasListComponent implements OnInit {

  public agenciasArrayNew;

  constructor(private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('Agencias')) {
      const arrayAgencias = JSON.parse(localStorage.getItem('Agencias'));
      this.agenciasArrayNew = this.newArrayAgencias(arrayAgencias);
    } else {
      this.agenciasArrayNew = this.newArrayAgencias(agencias);
    }

  }

  newArrayAgencias(arrAgencias) {
    return arrAgencias.map((items, index) => {
      return {
        id: index + 1,
        agencia: items.agencia,
        distrito: items.distrito,
        provincia: items.provincia,
        departamento: items.departamento,
        direccion: items.direccion,
        lat: items.lat,
        lon: items.lon
      }
    });

  }


  getDetails(agenciaId: any) {
    this.router.navigate(['/agencia/', agenciaId]);
    localStorage.setItem('Agencias', JSON.stringify(this.agenciasArrayNew));
  }





}
