<img src="http://static1.squarespace.com/static/5524448ee4b0d6f6b83ab9e2/t/57cf3de246c3c4d2933aa57c/1473199586535/epicodus-logo-300.png?format=1000w" align="right" height="100" />

# Seattle-Zoo Animal-Tracker

#### _JavaScript - Week3 independent project, 08/18/2017_

#### By _**Sowmya Devi Logaswamy**_

## Description

Seattle Zoo Animal-Tracker is a application for keeping track of animals in the zoo.

## Planning

### Specs
  * Spec 1: Users (zoo staff), should be able to add newly-admitted animals to the app.
  * Spec 2: User wants to log a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike
  * Spec 3: User wants to view a list of animals I have logged
  * Spec 4: User wants options to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).
  * Spec 5: User wants to click an animal to edit its name, age or caretakers.
  
## Future functionalities
  * Display of the total number of caretakers needed in a day.
  * Add a property that records when each animal was admitted. The user could enter a date and time, or the app can generate a timestamp.
  * Expand the application to differentiate between animals' species. Group the animals into those categories. Then include a component to display the total needed caretakers for whichever species the user selects.
  * Add a new master component to average the total age for each species.
Show animals based on diet type. Then, show all animals who eat meat (carnivores AND omnivores)

## What's included
Within the repository you'll find the following directories and files:

```
Seattle-Zoo-Animal_tracker
├──app
|    └── app.component.ts (app/animal.model.ts)
|    └── app.module.ts
|    └── edit-animal.component.ts
|    └── animal-list.component.ts   
|    └── animal.model.ts
|    └── main.ts    
|    └── new-animal.component.ts  
|    └── age.pipe.ts
├── .gitignore
├── bower.json
├── gulpfile.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
└── systemjs.config.js
└── tsconfig.json

```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Angular](https://angularjs.org/)
* [PhantomJS](http://phantomjs.org/)

### Setup/Installation Requirements

* _In the command line, run:_
```
git clone https://github.com/SowmyaLogaswamy/Seattle-Zoo-Animal-Tracker-js.git
cd Seattle-Zoo-Animal-Tracker-js
npm install
bower install

```
* _In the command line, run:_
```
gulp serve
```
* _Then, in any modern browser, navigate to:_
```
localhost:3000
```

### Known Bugs

No known bugs yet.

## Technologies Used

HTML

SCSS

Bootstrap

TypeScript

Angular.js

Node js


### License

*MIT*

Copyright (c) 2017 **_Sowmya Devi Logaswamy_**
