import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <div class="panel panel-info">
      <div class="panel-heading">
        <h1>New Animal</h1>
      </div>
      <div class="panel-body">
      <div class="form-group">
        <label class="control-label col-sm-2">Enter Image URL:</label>
        <div class="col-sm-4">
          <input class="form-control" #newImages>
          </div>
      </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Enter Species:</label>
          <div class="col-sm-4">
            <input class="form-control" #newSpecies>
            </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Enter Name:</label>
          <div class="col-sm-4">
            <input  class="form-control" #newName>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Enter Age:</label>
          <div class="col-sm-4">
            <input  class="form-control" #newAge>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Enter Diet:</label>
          <div class="col-sm-4">
            <input  class="form-control" #newDiet>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Enter Location:</label>
          <div class="col-sm-4">
            <input  class="form-control" #newLocation>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Enter Caretakers:</label>
          <div class="col-sm-4">
            <input  class="form-control" #newCaretakers>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Enter Sex:</label>
          <div class="col-sm-4">
            <input  class="form-control" #newSex>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Enter Likes:</label>
          <div class="col-sm-4">
            <input  class="form-control" #newLikes>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">Enter Dislikes:</label>
          <div class="col-sm-4">
            <input  class="form-control" #newDislikes>
          </div>
        </div>
        <div class="col-sm-offset-2 col-sm-2">
            <button class="btn btn-danger" (click)= "submitForm(newImages.value, newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newImages.value=''; newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value='';newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
        </div>
      </div>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(image: string, species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(image, species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
