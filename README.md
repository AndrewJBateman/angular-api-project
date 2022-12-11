# :zap: Angular API Project

* App using a DataService with httpClient to get a JSON Observable data stream from an API and display it using the Angular async pipe.
* App also submits a simple typed Contact form.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-api-project?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-api-project?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-api-project?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-api-project?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular API Project](#zap-angular-api-project)
  * [:page\_facing\_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal\_strength: Technologies](#signal_strength-technologies)
  * [:floppy\_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status \& To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file\_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Routing module allows user to navigate between Home, About and Contact pages.
* API json/image data displayed: firstname, lastname, email and avatar.
* Angular FormBuilder used to allow user to submit a form with name and message. Form uses validation.
* Styling is pure SCSS

## :camera: Screenshots

![Example screenshot](./imgs/home.png).
![Example screenshot](./imgs/contact-form.png).

## :signal_strength: Technologies

* [Angular v15](https://angular.io/)
* [RxJS Library v7](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observable](http://reactivex.io/documentation/observable.html).
* [The HttpClient in @angular/common/http](https://angular.io/guide/http) offers a simplified client HTTP API for Angular applications that rests on the XMLHttpRequest interface exposed by browsers.

## :floppy_disk: Setup

* Run `npm i` to install dependencies
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## :computer: Code Examples

* `data.service.ts` ES6 arrow function to return observable from API using `apiResponse` interface

```typescript
getUsers = (): Observable<apiResponse> => {
  return this.http.get<apiResponse>("https://reqres.in/api/users");
}
```

* `home.component.ts` ng init. function to get observable data for the template async pipe - note: using an ES6 arrow function here would result in nothing being displayed, due the use of 'this'

```typescript
ngOnInit () {
  this.users$ = this.data.getUsers();
};
```

## :cool: Features

* API web link could be changed to get different and more complex data.

## :clipboard: Status & To-Do List

* Status: Working.
* To-Do: Nothing.

## :clap: Inspiration

* This was a Gary Simon [here is a link to his designcourse.com](https://designcourse.com/) but it is no longer available on-line

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@gmail.com
