export class Project {
    name: string;
    usedskills: string;
    description: string;
    livelink: string;
    githublink: string;
    
    constructor(name: string, usedskills: string, description: string, livelink: string, githublink: string) {
        this.name = name;
        this.usedskills = usedskills;
        this.description = description;
        this.livelink = livelink;
        this.githublink = githublink;
    }
}
