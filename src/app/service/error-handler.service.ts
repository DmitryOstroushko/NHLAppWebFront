import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {

  constructor(private snackBar: MatSnackBar, private zone: NgZone) { }

  handleError(error: unknown) {
    this.zone.run(() => {
      this.snackBar.open(
        "Error with remote server was detection!",
        "Close",
        {
          duration: 2000
        }
      );  
    });
    console.warn("Caught by the Application Error Handler", error);
  }
}
