import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/person.service';



@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(private personService: PersonService) { }

  personArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";


  ngOnInit() {
    this.personService.getPersons().subscribe(
      list => {
        this.personArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.personService.deletePerson($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }



  filterCondition(person) {
    return person.Name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }




}
