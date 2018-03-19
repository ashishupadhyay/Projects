import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  treeData: Array<any>;
  dropdownSelectedData: Array<any> = new Array<any>();

  ngOnInit() {

    this.treeData = [
      {
        id: 0, name: 'org 1', childData: [
          {id: 1, name: 'subOrg 1', childData:[]},
          {id: 2, name: 'subOrg 2', childData:[
            {id: 3, name: 'subSubOrg 1', childData:[]}
          ]}
        ]
      },
      {
        id: 4, name: 'org 2', childData: [
          {id: 5, name: 'subOrg 3', childData:[]},
          {id: 6, name: 'subOrg 4', childData:[]}
        ]
      },
      {
        id: 7, name: 'org 3', childData: []
      }
    ]

  }

  onDataSelection(data: any) {

    this.dropdownSelectedData = data;

  }

}
