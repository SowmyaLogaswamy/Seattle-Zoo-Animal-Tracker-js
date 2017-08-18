import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="matureAnimals">Mature Animals</option>
  </select>
  <ul>
    <li [class]="priceColor(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
      <ul>
        <li><strong>Species:</strong> {{currentAnimal.species}}</li>
        <li><strong>Name:</strong> {{currentAnimal.name}}</li>
        <li><strong>Age:</strong> {{currentAnimal.age}}</li>
        <li><strong>Diet:</strong> {{currentAnimal.diet}}</li>
        <li><strong>Location:</strong> {{currentAnimal.location}}</li>
        <li><strong>Caretakers:</strong> {{currentAnimal.caretakers}}</li>
        <li><strong>Sex:</strong> {{currentAnimal.sex}}</li>
        <li><strong>Likes:</strong> {{currentAnimal.likes}}</li>
        <li><strong>Dislikes:</strong> {{currentAnimal.dislikes}}</li>
      </ul>
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  priceColor(currentAnimal){
    if (currentAnimal.age < 2){
      return "bg-danger";
    } else {
      return "bg-info";
    }
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
