# Tree Dropdown for Angular 2 and above (Bootstrap v4 dropdown)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

# How to Use

 - Install this using npm install ng-tree-dropdown --save
 - Include 'TreeDropdownModule'
- Use as <tree-dropdown [treeData]="treeData" (selectedData)="onDataSelection($event)"></tree-dropdpwn>
- treeData is your data that you need to pass
- selectedData is an eventEmitter to which you can listen. The $event will be the output data that is   the values selected in the dropdown
- Sample data format that needs to be passed:
    treeData = [
      {
        id: 0, name: 'tree 1', childData: [
          {id: 1, name: 'child 1', childData:[]},
          {id: 2, name: 'child 2', childData:[
            {id: 3, name: 'subChild 1', childData:[]}
          ]}
        ]
      },
      {
        id: 4, name: 'org 2', childData: [
          {id: 5, name: 'child 3', childData:[]},
          {id: 6, name: 'child 4', childData:[]}
        ]
      },
      {
        id: 7, name: 'tree 3', childData: []
      }
    ]

## Further help

Please leave comments and I will get back to you.
