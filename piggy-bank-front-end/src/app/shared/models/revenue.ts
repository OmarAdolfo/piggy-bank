import { Profit } from './profit';

export class Revenue {
    id: number;
    cantidad: number;
    fecha: Date;
    ganancia_id: Profit;
    created_at: Date;
    updated_at: Date;
    plantilla_id: number;
}