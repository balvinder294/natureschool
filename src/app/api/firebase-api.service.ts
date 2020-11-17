import { Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor(private firebaseX: FirebaseX) { }

  // sample method
  getFirebaseCollection(collectionName: string) {
    this.firebaseX
    .fetchFirestoreCollection(collectionName, this.getCollectionSuccess.bind, this.getCollectionError.bind)
    .then(res => {
      console.log('res');
    })
    .catch(err => {
      console.error(err);
    });
  }

  getCollectionSuccess(res) {
    console.log(res);
  }

  getCollectionError(res) {
    console.log(res);
  }

  // to track page views
  // call during method/navigation
  trackPageViewEvent(pageName) {
    this.firebaseX.logEvent('page_view', pageName)
      .then()
      .catch();
  }
}
