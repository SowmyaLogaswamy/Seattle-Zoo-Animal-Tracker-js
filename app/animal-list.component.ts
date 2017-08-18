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
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" src="{{currentAnimal.image}}" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">{{currentAnimal.name}}</h4>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
        <p>(Scroll down to look at the edit form!)</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Species:</strong> {{currentAnimal.species}}</li>
        <li class="list-group-item"><strong>Name:</strong> {{currentAnimal.name}}</li>
        <li class="list-group-item"><strong>Age:</strong> {{currentAnimal.age}}</li>
        <li class="list-group-item"><strong>Diet:</strong> {{currentAnimal.diet}}</li>
        <li class="list-group-item"><strong>Location:</strong> {{currentAnimal.location}}</li>
        <li class="list-group-item"><strong>Caretakers:</strong> {{currentAnimal.caretakers}}</li>
        <li class="list-group-item"><strong>Sex:</strong> {{currentAnimal.sex}}</li>
        <li class="list-group-item"><strong>Likes:</strong> {{currentAnimal.likes}}</li>
        <li class="list-group-item"><strong>Dislikes:</strong> {{currentAnimal.dislikes}}</li>
      </ul>
    </div>
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
