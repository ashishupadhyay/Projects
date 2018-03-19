import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TreeDropdownComponent } from "../tree-dropdown/treeDropdown.component";
import { DropdownItemComponent } from "../tree-dropdown/dropdown-item/dropdownItem.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TreeDropdownComponent, DropdownItemComponent
    ],
    exports: [
        TreeDropdownComponent
    ]
})

export class TreeDropdownModule {
    
}