import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() projects

  @Output() addAsset  = new EventEmitter();

  @Output() selectedd  = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  newPeoject() {
    this.addAsset.emit()
  }
  selectedPeoject(project) {
    this.selectedd.emit(project)
  }

}
