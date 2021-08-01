import { activityLevel } from './../models/activityLevel.model';
import { Component, OnInit } from '@angular/core';
import { TdeeService } from 'src/app/services/tdee.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  activityLevel: activityLevel[] = [
    { val: 1.2, viewValue: 'sedentary' },
    { val: 1.375, viewValue: 'lightly active' },
    { val: 1.55, viewValue: 'moderately active' },
    { val: 1.725, viewValue: 'very active' },
    { val: 1.9, viewValue: 'extra active' },
  ];
  tdee: any = [];
  result: any;
  constructor(private tdeeService: TdeeService) {}

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm() {
    this.tdee = {
      weight: null,
      bodyFat: null,
      activity: null,
      tdeeVal: null,
      bmr: null,
    };
  }
  calculate() {
    this.result = this.tdeeService.getResult(
      this.tdee.weight,
      this.tdee.bodyFat,
      this.tdee.activity
    );
    this.tdee.tdeeVal = this.result.TDEE;
    this.tdee.bmr = this.result.BMR;
  }
}
