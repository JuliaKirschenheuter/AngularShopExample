import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  @Input()
  public logo = '';

  @Output()
  public search: EventEmitter<string> = new EventEmitter();

  public searchBy({target}: Event): void {
    this.search.emit((target as HTMLInputElement).value);
  }

  public goToRegistration() {
    this._router.navigate(['registration'])
  }


}
