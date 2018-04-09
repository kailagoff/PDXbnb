import { Injectable } from '@angular/core';
import { Data } from './data.model';
import { DATA } from './mock-data';

@Injectable()
export class DataService {

  constructor() { }

  getData() {
   return DATA;
 }


}
