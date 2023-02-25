import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-picker-selector',
  templateUrl: './picker-selector.component.html',
  styleUrls: ['./picker-selector.component.sass']
})
export class PickerSelectorComponent implements OnChanges {
  @Input() allOpt: any;
  @Input() selectedOpt: any;
  @Input() nameOption: string;
  @Output() selectedOptChange: EventEmitter<any>;
  backupData: any;

  constructor() {
    this.allOpt = [];
    this.selectedOpt = [];
    this.nameOption = "";
    this.selectedOptChange = new EventEmitter<any>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['allOpt'].currentValue) {
      this.backupData = changes['allOpt'].currentValue.map((x: any) => {x["hidden"] = false; return x});
    }
    if (!!changes['selectedOpt'].currentValue) {
      this.selectedOpt = changes['selectedOpt'].currentValue.map((x: any) => {x["hidden"] = false; return x});
      console.log(this.selectedOpt);      
    }
    if (this.selectedOpt?.length > 0 && this.allOpt?.length > 0) {
      this.updateItems();
    }
  }

  removeSelected(itm: any, index: number) {
    this.selectedOpt.splice(index, 1).sort((x: any) => x[this.nameOption]);
    this.allOpt.push(itm);
    this.allOpt.sort((x: any, y: any) => this.sortingOperation(x[this.nameOption], y[this.nameOption]));
    this.selectedOptChange.emit(this.selectedOpt.map((x: any) => {delete x['hidden']; return x}));
  }

  addSelected(itm: any, index: number) {
    this.allOpt.splice(index, 1).sort((x: any) => x[this.nameOption]);
    this.selectedOpt.push(itm);
    this.selectedOpt.sort((x: any, y: any) => this.sortingOperation(x[this.nameOption], y[this.nameOption]));
    this.selectedOptChange.emit(this.selectedOpt.map((x: any) => {delete x['hidden']; return x}));
  }

  filtrarItems(txt: string) {
    this.allOpt.map((x: any) => x['hidden'] = x[this.nameOption].toString().includes(txt) ? false : true );
    this.selectedOpt.map((x: any) => x['hidden'] = x[this.nameOption].toString().includes(txt) ? false : true );
  }

  updateItems() {
    this.allOpt = this.backupData.filter((x: any) => !(this.selectedOpt.filter((y: any) => y[this.nameOption] === x[this.nameOption]).length > 0)).sort((x: any, y: any) => this.sortingOperation(x[this.nameOption], y[this.nameOption]));
    this.selectedOpt.sort((x: any, y: any) => this.sortingOperation(x[this.nameOption], y[this.nameOption]));
  }

  sortingOperation(a: any, b: any) {
    if (a < b)
      return -1;
    if (a > b)
      return 1;
    return 0;
  }
}
