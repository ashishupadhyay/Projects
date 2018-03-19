import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'tree-dropdown',
    templateUrl: './treeDropdown.component.html',
    styleUrls: ['./treeDropdown.component.css']
})

export class TreeDropdownComponent implements OnInit {

    @Input() treeData: Array<any>;
    @Output() selectedData: EventEmitter<any> = new EventEmitter<any>();

    selectedOrgs: Array<any> = new Array<any>();

    ngOnInit() {

    }

    onDataSelection(org: any) {

        if(org.checked) {
            this.selectedOrgs.push(org.org);
        } else {

            var index: number = this.selectedOrgs.length - 1;

            while(index >= 0) {

                if(this.selectedOrgs[index].id == org.org.id) {

                    this.selectedOrgs.splice(index, 1);
                    break;
                }

                --index;
            }
        }

        console.log(this.selectedOrgs);
        
        this.selectedData.emit(this.selectedOrgs)
    }
}