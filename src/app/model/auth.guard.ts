import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { Observable, of } from "rxjs";

@Injectable( {
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private auth: AuthService,
                private router: Router) {

    }

    canActivate(): Observable<boolean> {
        if (!this.auth.isAuthenticated()) {
            return of(true);
        } else {
            this.router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            })
            return of(false);
        }
    }

    canActivateChild(): Observable<boolean> {
        return this.canActivate();
    }
}
