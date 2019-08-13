import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Discussion } from 'app/models/discussion.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }

  getDiscussions(){
    return this.firestore.collection('discussions').snapshotChanges();
  }

  addDiscussion(discussion: Discussion){
    return this.firestore.collection('discussions').add(discussion);
  }

  updateDiscussion(discussion: Discussion){
    this.firestore.doc('discussions/' + discussion.id).update(discussion);
  }

  deleteDiscussion(discussion: Discussion){
    this.firestore.doc('discussions/' + discussion.id).delete();
  }
}
