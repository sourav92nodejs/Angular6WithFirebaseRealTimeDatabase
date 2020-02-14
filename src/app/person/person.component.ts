import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/person.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private personService: PersonService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.personService.form.controls;



  ngOnInit() {

  }   

  onSubmit() {
    this.submitted = true;
    if (this.personService.form.valid) { 

      if (this.personService.form.get('$key').value == null)
        this.personService.insertPerson(this.personService.form.value);

      else
        this.personService.updatePerson(this.personService.form.value);

        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
        this.submitted = false;
        
    }
  }



     resetForm() {
        if (this.personService.form != null)

          this.personService.form.reset();

          this.personService.form.setValue({
            $key: null,
            Name: '',
            Password: '',
            Phone: '',
            User_name: '',
            User_type: ''

        });

    }

  }
