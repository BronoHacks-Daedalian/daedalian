export class TodoItem {
    constructor(
        public title: string,
        public description: string,
    ) { }

    getSummary() {
        return `${this.title}: ${this.description}`
    }
}