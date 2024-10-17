import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service available throughout the app
})
export class DataService {
  getDefaultData() {
    return {
      name: 'Joanna',
      surname: 'Krupa',
      dateOfBirth: new Date('2000-03-18'),
      interests: ['tennis', 'programming', 'photography']
    };
  }
}
