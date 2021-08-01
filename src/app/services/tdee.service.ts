import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class TdeeService {
  constructor(private webRequestService: WebRequestService) {}
  getResult(weight: number, bodyFat: number, activity: number) {
    this.webRequestService.post('tdee', { weight, bodyFat, activity });
    let bmr = 21.6 * (weight - (bodyFat / 100) * weight) + 370;
    let tdee = bmr * activity;
    const result = {
      BMR: bmr,
      TDEE: tdee,
    };
    return result;
  }
}
