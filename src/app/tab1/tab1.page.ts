import { Component, OnInit } from '@angular/core';
import { FirebaseApiService } from '../api/firebase-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // sample json
  tools = [
    {
      name: 'kodavali',
      image: 'https://via.placeholder.com/350x250',
      prepSteps: 'steps to prepare',
      usage: 'usage is as follows and will be added',
      maintainability: 'to maintain steps need to be followed',
      makingCost: '100',
      bodyMaterial: 'Woood and iron',
      usabilityVideoUrl: 'https://dummyurl'
    },
    {
      name: 'kodavali',
      image: 'https://via.placeholder.com/350x220',
      prepSteps: 'steps to prepare',
      usage: 'usage is as follows and will be added',
      maintainability: 'to maintain steps need to be followed',
      makingCost: '100',
      bodyMaterial: 'Woood and iron',
      usabilityVideoUrl: 'https://dummyurl'
    }
  ];
  constructor(private firebaseApiService: FirebaseApiService) {}

  ngOnInit() {
    // sample firebase method call
    // this.firebaseApiService.getFirebaseCollection('name');
    // this.firebaseApiService.trackPageViewEvent('agro-tools');
  }

}
