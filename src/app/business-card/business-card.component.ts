import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowDateComponent } from '../show-date/show-date.component';
import { CommonModule } from '@angular/common';
import { ManageInterestsComponent } from '../manage-interests/manage-interests.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [FormsModule, ShowDateComponent, CommonModule, ManageInterestsComponent],
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css'] // Fix typo here from styleUrl to styleUrls
})
export class BusinessCardComponent {
  name: string = '';
  surname: string = '';
  dateOfBirth: Date = new Date();
  interests: string[] = []; // Initialize as an empty array
  selected: number = -1;

  constructor(private dataService: DataService) { // Inject the DataService
    this.reset(); // Call reset to initialize values
  }

  selectInterest(which: number): void {
    this.selected = which;
  }

  reset(): void {
    const defaultData = this.dataService.getDefaultData();
    this.name = defaultData.name;
    this.surname = defaultData.surname;
    this.dateOfBirth = defaultData.dateOfBirth;
    this.interests = defaultData.interests;
    this.selected = -1;
  }
}
