import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public logo = '';

  @Output()
  public search: EventEmitter<string> = new EventEmitter();

  public searchBy({target}: Event): void {
    this.search.emit((target as HTMLInputElement).value);
  }


}
