import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'dropdown-item',
    templateUrl: './dropdownItem.component.html'
})

export class DropdownItemComponent implements OnInit {

    @Input() dropdownData: any;
    @Output() selectedData: EventEmitter<any> = new EventEmitter<any>();

    ngOnInit() {

    }

    onCheckboxClick(org: any, event: any) {

        this.selectedData.emit({ 'org': org, 'checked': event.target.checked});
    }

    onDataSelection(dataList: any) {

        this.selectedData.emit(dataList);
    }
}