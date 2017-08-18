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
            <label class="control-label col-sm-2">Enter Animal Species:</label>
            <div class="col-sm-10">
              <input class="form-control" [(ngModel)]="childSelectedAnimal.species">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Animal Name:</label>
            <div class="col-sm-10">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.name">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Animal Age:</label>
            <div class="col-sm-10">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.age">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Animal Diet:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.diet">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Animal Location:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.location">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Animal Caretakers:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.caretakers">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Animal Sex:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.sex">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Animal Likes:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.likes">
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2">Enter Animal Dislikes:</label>
            <div class="col-sm-4">
              <input  class="form-control" [(ngModel)]="childSelectedAnimal.dislikes">
            </div>
          </div>
          <div class="col-sm-offset-2 col-sm-10">
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
