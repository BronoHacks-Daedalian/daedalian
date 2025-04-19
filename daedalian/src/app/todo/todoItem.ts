export class TodoItem {
    constructor(
        public title: string,
        public description: string,
        public time: string,
        public dueDate: Date | null
    ) { }

    getSummary() {
        return `${this.title}: ${this.description}, due: ${this.getFormattedDueDate()}, total time to complete: ${this.time}`
    }

    getFormattedDueDate() {
        if (!this.dueDate) {
            return "Not set";
        }

        return this.dueDate.toLocaleString('en-US', {
            weekday: 'short',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    }
}