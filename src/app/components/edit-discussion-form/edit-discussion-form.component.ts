import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from 'app/services/data.service';
import { Discussion } from 'app/models/discussion';

@Component({
  selector: 'app-edit-discussion-form',
  templateUrl: './edit-discussion-form.component.html',
  styleUrls: ['./edit-discussion-form.component.scss']
})
export class EditDiscussionFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditDiscussionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private FirebaseData: DataService) { }


  dataObject:object;
  title:string;

  ngOnInit() {
    this.dataObject = this.data;
  }

  EditDiscussion(discussion: Discussion){
    this.FirebaseData.updateDiscussion(discussion)
    this.dialogRef.close();
  }

}
