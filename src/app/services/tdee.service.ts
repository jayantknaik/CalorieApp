import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class TdeeService {
  constructor(private webRequestService: WebRequestService) {}
  getResult(weight: number, bodyFat: number, activity: number) {
    return this.webRequestService.post('tdees', { weight, bodyFat, activity });
  }
}
