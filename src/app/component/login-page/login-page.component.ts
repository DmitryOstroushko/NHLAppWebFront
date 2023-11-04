import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  aSub!: Subscription;

  constructor(private auth: AuthService, 
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.form = new FormGroup( {
        userName: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
      })
      this.route.queryParams.subscribe((params: Params) => {
        if (params['registered']) {
          // You cab enetr the system using your data
        } else if (params['accessDenied']) {
          // You have to authorize
        }
      })
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable();
    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(["/overview"]),
      error => {
        console.warn(error);
        this.form.enable;
      }
    );
  }

}
