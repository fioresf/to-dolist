export interface Task {
    _id: string;
    title: string;
    description: string;
    expirationDate: Date;
    category: string;
    state?: string;
}
