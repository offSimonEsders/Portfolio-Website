import { AfterViewInit, Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {

  skills = ['Angular', 'Typescript', 'Javascript', 'HTML', 'Firebase', 'Git', 'CSS', 'Rest-Api', 'Scrum', 'Material design'];

  skillscontent!: HTMLDivElement;
  skillsymbolcontainer!: HTMLDivElement;
  skilltextcontainer!: HTMLDivElement;
  resizeObserver!: ResizeObserver;

  ngAfterViewInit(): void {
    this.skillsymbolcontainer = <HTMLDivElement>document.querySelector('.skillsymbol-container');
    this.skilltextcontainer = <HTMLDivElement>document.querySelector('.skill-text-container');
    this.skillscontent = <HTMLDivElement>document.querySelector('.skillscontent');
    this.setMarginofSkillsymbolContainer();
    window.addEventListener('resize', () => this.setMarginofSkillsymbolContainer());
    this.observeSkilltextcontainerWidth();
  }

  setMarginofSkillsymbolContainer(): void {
    if (window.innerWidth <= 1400 && window.innerWidth >= 520 || this.skilltextcontainer.offsetWidth >= 500 && window.innerWidth <= 1700 && window.innerWidth >= 520) {
      this.skillsymbolcontainer.style.marginTop = this.skilltextcontainer.offsetHeight + 35 - 37 + 'px';
    } else {
      this.skillsymbolcontainer.style.marginTop = 0 + 'px';
    }
  }

  setMarginofSkillsymbolContainerNoStatement(state: boolean): void {
    if (state) {
      this.skillsymbolcontainer.style.marginTop = this.skilltextcontainer.offsetHeight + 35 - 37 + 'px';
    } else {
      this.skillsymbolcontainer.style.marginTop = 0 + 'px';
    }
  }

  observeSkilltextcontainerWidth() {
    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.contentRect.width >= 500 && window.innerWidth <= 1700 && window.innerWidth >= 520) {
          this.styleWhenTextisTranslated();
        } else {
          this.styleWhenTextisNotTranslated();
        }
      }
    });
    this.resizeObserver.observe(this.skilltextcontainer);
  }

  styleWhenTextisTranslated() {
    this.skillscontent.classList.add('skillscontent-translated');
    this.skillsymbolcontainer.classList.add('skillsymbol-container-translated');
    this.skilltextcontainer.classList.add('skill-text-container-translated');
    this.setMarginofSkillsymbolContainerNoStatement(true);
  }

  styleWhenTextisNotTranslated() {
    this.skillscontent.classList.remove('skillscontent-translated');
    this.skillsymbolcontainer.classList.remove('skillsymbol-container-translated');
    this.skilltextcontainer.classList.remove('skill-text-container-translated');
    this.setMarginofSkillsymbolContainerNoStatement(false);
  }

}
