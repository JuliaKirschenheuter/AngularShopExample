import { Component, OnInit } from '@angular/core';

export class Person {
  public constructor( public firstName: string, public lastName: string) {}

  public getDate(): Date {
    return new Date();
  }
}
@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.css']
})
export class CdComponent implements OnInit {

  public person1: Person;
  public person2: Person;

  constructor() { }

  ngOnInit(): void {
    this.person1 = new Person('first', 'name1');
    this.person2 = new Person('second', 'name2');

    setTimeout(() => {
      this.person2 = new Person('new second', 'new name2');
    }, 5000);

    setTimeout(() => {
      this.person2 = new Person('Ivan', 'Petrov');
    }, 15000);

  }

}
