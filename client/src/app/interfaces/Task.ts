export interface Task {
    _id: string;
    title: string;
    description: string;
    expirationDate: Date;
    category:'Personal' | 'Trabajo' | 'Estudios' | 'Ocio';
    state?: 'Pendiente' | 'En progreso' | 'Completada';
}
