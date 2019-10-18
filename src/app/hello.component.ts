import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'hello',
  templateUrl : './hello.component.html',
  styles: [`h1 { font-family: Lato;}`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  testInput: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.testInput = this.fb.group({
      nom: ['', { validators: [Validators.required , Validators.maxLength(10),  Validators.pattern("^[a-zA-Zà-ÿÀ-Ÿ '-]*$")], updateOn: 'blur'}],
      prenom: ['', { validators: [Validators.required , Validators.maxLength(10),  Validators.pattern("^[a-zA-Zà-ÿÀ-Ÿ '-]*$")], updateOn: 'blur'}]
    })
  }

get nom() { return this.testInput.get('nom'); }
get prenom() { return this.testInput.get('prenom'); }

  
  onFormSubmit(): void {
    this.submitted = true;
    console.log("form valid : "+ this.testInput.valid);
    if (this.testInput.valid)
    {
    console.log(this.testInput.value)
    }
  }
}
