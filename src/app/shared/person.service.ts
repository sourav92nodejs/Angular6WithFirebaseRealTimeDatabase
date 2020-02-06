import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private firebase: AngularFireDatabase) { }
  personList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    Name: new FormControl('', Validators.required),
    Password: new FormControl('',  [Validators.required, Validators.minLength(8)]),
    Phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    User_name: new FormControl(''),
    User_type : new FormControl('')

  });


  getPersons () {
    this.personList = this.firebase.list('Persons');
    return this.personList.snapshotChanges();
  }


  insertPerson (person) {
    this.personList.push({
      Name: person.Name,
      Password: person.Password,
      Phone: person.Phone,
      User_name: person.User_name,
      User_type: person.User_type


    });
  }

  populateForm(person) {
    this.form.setValue(person);
  }


  updatePerson(person) {
    this.personList.update(person.$key,
      {
        Name: person.Name,
        Password: person.Password,
        Phone: person.Phone,
        User_name: person.User_name,
        User_type: person.User_type
  
      });
  }
  

  deletePerson($key: string) {
    this.personList.remove($key);
  }


}
