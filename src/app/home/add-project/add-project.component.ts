import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

@Output() childEvent = new EventEmitter();
@Output() addAsset  = new EventEmitter();


  checkForm;

  constructor( private formBuilder: FormBuilder, private projectsService: ProjectsService ) { }

  ngOnInit() {
    this.checkForm = this.formBuilder.group({
      name: '',
      color: '',
      icon: '',
    })
}

onSubmit() {
  const {name, color, icon } = this.checkForm.value

  let params = {
    "title": `${icon} ${name}`,
    "color": color,
    "tasks": [
  ]
  }
  this.projectsService.addProject(params).subscribe (
   res => {
      this.childEvent.emit(res)
      this.addAsset.emit()
     }
 ) 

 // this.checkoutForm.reset();
 this.checkForm.reset();
}
}

