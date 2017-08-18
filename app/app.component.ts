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
    new Animal("Artic Fox", "Moon", 2, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 4, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises"),
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
