import { Component, OnInit, Input, Output } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() Projects: Object;

  @Input() Project: Object;

  addTab = false


  constructor(private projects: ProjectsService ) { }

  ngOnInit() {
   this.loadingProjects()
  }

  loadingProjects() {
    this.projects.getProjects().subscribe(
      res => {
        this.Projects = res.projects
      })
    }

    addProjectTab() {
  
   this.addTab === true ? this.addTab = false : this.addTab = true
    }

    selected(project) {
      this.Project = project

    }
}
