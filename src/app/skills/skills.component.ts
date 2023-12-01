import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = ['Angular', 'Typescript', 'Javascript', 'HTML', 'Firebase', 'Git', 'CSS', 'Rest-Api', 'Scrum', 'Material design'];
}
