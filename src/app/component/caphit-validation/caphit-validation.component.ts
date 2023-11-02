import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-caphit-validation',
  template: `<div>Showing product details for validation forrm: {{ kind }}</div>`,
  styleUrls: ['./caphit-validation.component.css']
})
export class CaphitValidationComponent implements OnInit, OnDestroy {

  kind: number = 1;
  paramsSubscription: any;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.kind = +params['kind']; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
