# Tree Dropdown for Angular 2 and above (Bootstrap v4 dropdown)

Bootstrap(v4) Dropdown to show items in tree hierarchy

[DEMO] (https://plnkr.co/edit/iPw0cO?p=preview)

# How to Use

**Step 1:** Install ng-tree-dropdown 
 - using npm:

  ```
  command 'npm install ng-tree-dropdown --save'
  ```

- or add package in "package.json":

```
  "devDependencies": {
    "ng-tree-dropdown": "*"
  }
```

**Step 2:** "app.module.ts"

```
  import { TreeDropdownModule } from 'ng-tree-dropdown';

  @NgModule({
    declarations: [
        TreeDropdownModule
    ]
  })  
```

**Step 3:** "app.component.html":

```
<tree-dropdown [treeData]="treeData" (selectedData)="onDataSelection($event)"></tree-dropdown>
```

**Step 4:** "app.component.ts":

```
import { OnInit } from "@angular/core";

export class AppComponent  implements OnInit{
    
  treeData: Array<any>;
  dropdownSelectedData: Array<any> = new Array<any>();

  ngOnInit() {

    this.treeData = [
      {
        id: 0, name: 'tree 1', childData: [
          {id: 1, name: 'child 1', childData:[]},
          {id: 2, name: 'child 2', childData:[
            {id: 3, name: 'subChild 1', childData:[]}
          ]}
        ]
      },
      {
        id: 4, name: 'tree 2', childData: [
          {id: 5, name: 'child 3', childData:[]},
          {id: 6, name: 'child 4', childData:[]}
        ]
      },
      {
        id: 7, name: 'tree 3', childData: []
      }
    ]

  }

  onDataSelection(data: any) {

    this.dropdownSelectedData = data;

  }

}
```

## Further help

Please leave comments and I will get back to you.
