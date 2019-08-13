import { Component,OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Discussion } from 'app/models/discussion.model';

declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {

    discussions: Discussion[];

    constructor(private data: DataService){

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
}
