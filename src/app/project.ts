export class Project {
    name: string;
    usedskills: string;
    description: string;
    link: string;
    constructor(name: string, usedskills: string, description: string, link: string) {
        this.name = name;
        this.usedskills = usedskills;
        this.description = description;
        this.link = link;
    }
}
