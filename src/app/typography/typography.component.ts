import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Discussion } from 'app/models/discussion';
import { MatDialog } from '@angular/material';
import { EditDiscussionFormComponent } from 'app/components/edit-discussion-form/edit-discussion-form.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  discussions: Discussion[];

    constructor(private data: DataService, public dialog: MatDialog){

    }

    ngOnInit() { 
        this.getDiscussions();
    }

    getDiscussions(){
        this.data.getDiscussions().subscribe(data => {
            this.discussions = data.map(e => {
              return {
                id: e.payload.doc.id,
                ...e.payload.doc.data()
              } as Discussion;
            })
        });
    }

    openEditDialog(id:string, title:string, type:string, body:string, user_id:string, user_name:string, image_url:string, timestamp:string): void {
      const dialogRef = this.dialog.open(EditDiscussionFormComponent, {
        width: '500px',
        height: '500px',
        data: { id:id, title:title, type:type, body:body, user_id:user_id, user_name:user_name, image_url:image_url, timestamp:timestamp}
      });
  
      dialogRef.afterClosed().subscribe(result => {

      });
    }

    deleteDiscussion(id:string){
      
      if (confirm("Are you sure?")) {
        this.data.deleteDiscussion(id);
      } else {
        
      }
    }
}
