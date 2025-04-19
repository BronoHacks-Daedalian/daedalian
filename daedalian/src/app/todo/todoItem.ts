export class TodoItem {
    constructor(
        public title: string,
        public description: string,
        public time: string,
        public dueDate: Date
    ) { }

    getSummary() {
        return `${this.title}: ${this.description}, due: ${this.dueDate}, total time to complete: ${this.time}`
    }

    getDueDate() {
        return `temp`
    }
}