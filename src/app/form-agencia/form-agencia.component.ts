import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-agencia',
  templateUrl: './form-agencia.component.html',
  styleUrls: ['./form-agencia.component.scss']
})
export class FormAgenciaComponent implements OnInit {
  public agenciaFormGroup : FormGroup;
  public agenciaList ;
  public idAgencia;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    this.agenciaList = JSON.parse(localStorage.getItem('Agencias'));    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idAgencia = params['id'];
    });
    this.buildForm();
  }
  private buildForm(){    
    const objectAgencia = this.findAgencia();   
    this.agenciaFormGroup = this.formBuilder.group({
      txtName : objectAgencia.agencia,
      txtDireccion : objectAgencia.direccion,
      txtDistrito : objectAgencia.distrito,
      txtLatitud : objectAgencia.lat,
      txtLongitud : objectAgencia.lon,
    });
   
  }
  updateDate(){
    const objIndex = this.agenciaList.findIndex((obj => obj.id == this.idAgencia));  
    let form = this.agenciaFormGroup.getRawValue();
    this.agenciaList[objIndex].agencia = form.txtName;
    this.agenciaList[objIndex].direccion = form.txtDireccion;
    this.agenciaList[objIndex].distrito = form.txtDistrito;
    this.agenciaList[objIndex].lat = form.txtLatitud;
    this.agenciaList[objIndex].lon = form.txtLongitud;

    const newArray = this.agenciaList.map((item)=>{  
      return {
        agencia : item.agencia.toUpperCase(),
        direccion : item.direccion,
        distrito : item.distrito,
        lat : item.lat,
        lon : item.lon,
      }        
  
      
    })
    console.log(newArray);
    
    localStorage.setItem('Agencias', JSON.stringify(newArray));

    this.router.navigate(['/listAgencia']);
    
  }

  findAgencia () {    
    const agencia = this.agenciaList.find(valor => valor.id == this.idAgencia );
    return agencia;
  }

}
