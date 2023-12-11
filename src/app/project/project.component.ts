import { Component } from '@angular/core';
import { Project } from '../project';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  join = new Project('Join', 'Javascript | HTML | CSS', 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', 'join.simon-esders.de', '');
  projects = [this.join];

  notWorkingyet() {
    alert("Ich überarbeite das projekt gerade nochmal deswegen hab ich es noch nicht auf Github hochgeladen.")
  }

}
