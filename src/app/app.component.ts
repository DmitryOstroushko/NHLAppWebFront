import { Component } from '@angular/core';

enum FormQuery {
  NullCaphitBySeason,
  NullCaphitByDate
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'NHLAppWebFront';

  constructor() {
  }

}
