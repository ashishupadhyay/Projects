import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'tree-dropdown',
    templateUrl: './treeDropdown.component.html',
    styleUrls: ['./treeDropdown.component.css']
})

export class TreeDropdownComponent implements OnInit {

    @Input() treeData: Array<any>;
    @Output() selectedData: EventEmitter<any> = new EventEmitter<any>();

    selectedDataObject: Array<any> = new Array<any>();

    ngOnInit() {

    }

    onDataSelection(org: any) {

        if(org.checked) {
            this.selectedDataObject.push(org.org);
        } else {

            var index: number = this.selectedDataObject.length - 1;

            while(index >= 0) {

                if(this.selectedDataObject[index].id == org.org.id) {

                    this.selectedDataObject.splice(index, 1);
                    break;
                }

                --index;
            }
        }

        console.log(this.selectedDataObject);
        
        this.selectedData.emit(this.selectedDataObject)
    }
}