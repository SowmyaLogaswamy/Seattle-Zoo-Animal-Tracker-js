import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <div class="panel panel-warning">
        <div class="panel-heading">
          <h4>Edit Animal -- {{childSelectedAnimal.name}}</h4>
        </div>
        <div class="panel-body">
        <div class="form-group">
          <label class="control-label col-sm-2">Enter Image URL:</label>
          <div class="col-sm-4">
            <input class="form-control" [(ngModel)]="childSelectedAnimal.image">
            </div>
        </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Species:</label>
            <div class="col-sm-4">
              <input class="form-control" [(ngModel)]="childSelectedAnimal.species">
              </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Name:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.name">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Age:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.age">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Diet:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.diet">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Location:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.location">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Caretakers:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Sex:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.sex">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Likes:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.likes">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Dislikes:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">
            </div>
          </div>
          <div class="col-sm-offset-2 col-sm-2">
            <button class="btn btn-danger" (click) = "doneButtonClicked()">Done</button>
          </div>
        </div>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();


  doneButtonClicked() {
     this.doneButtonClickedSender.emit();
   }
}
