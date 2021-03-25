import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { PersonasService } from './service/personas.service';

//probar cambio

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {

  titulo:string = "Lista de personas";
  personas;
  cols;

  FormGuardarPersona:FormGroup;

  get dni() { return this.FormGuardarPersona.get('dni')};
  get nombre() { return this.FormGuardarPersona.get('nombre')};
  get apellido() { return this.FormGuardarPersona.get('apellido')};
  get fechaNac() { return this.FormGuardarPersona.get('fechaNac')};

  constructor(
    private personaService:PersonasService
  ) { 

    this.cols = [
      { field: 'dni', header: 'DNI' },
      { field: 'nombre', header: 'Nombre' },
      { field: 'apellido', header: 'Apellido' },
      { field: 'fechaNac', header: 'Fecha Nacimiento' }
    ];
  }

  ngOnInit() {

    this.getAll()
    this.FormGuardarPersona = this.FormCamposGuardarPersona();
  }

  getAll(){

    this.personaService.getAll()
    .subscribe(
      res => {
        this.personas = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

  FormCamposGuardarPersona() {
    return new FormGroup({
      'dni': new FormControl(null,[Validators.required]),
      'nombre': new FormControl(null,[Validators.required]),
      'apellido': new FormControl(null,[Validators.required]),
      'fechaNac': new FormControl(null,[Validators.required])
    });
  }

  validarCampos() {
    Object.keys(this.FormGuardarPersona.controls).forEach(field => {
      const control = this.FormGuardarPersona.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  savePersona(){

    this.validarCampos();
    if (this.FormGuardarPersona.invalid) {
      return;
    }

    console.log(this.FormGuardarPersona.value)
    this.personaService.create(this.FormGuardarPersona.value)
    .subscribe(
      res => {
        this.getAll();
      },
      err => {
        console.log(err.message)
      }
    );
  }

}
