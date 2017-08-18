import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class = "jumbotron">
      <h1>Seattle Zoo - Animal Tracker</h1>
      </div>
      <animal-list [childAnimalList]="animals" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
  `
})

export class AppComponent {

  selectedAnimal = null;

  animals: Animal[] = [
    new Animal("http://www.enr.gov.nt.ca/sites/enr/files/styles/horizontal_large/public/arctic_fox.jpg?itok=UzN0116i","Artic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("http://i.imgur.com/xS2pcvPh.jpg", "Ocelot", "Prince", 1, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("https://s3.amazonaws.com/media.jungledragon.com/images/2559/34664_medium.jpg?AWSAccessKeyId=05GMT0V3GWVNE7GGM1R2&Expires=1504137610&Signature=TAX7QhQwb743dWjc0m9wVpj1pt4%3D", "Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises"),
  ];

  editAnimal(clickedAnimal) {
  this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.animals.push(newAnimalFromChild);
  }

}
