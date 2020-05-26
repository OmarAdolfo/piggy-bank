import { Expense } from './expense';

export class Payment {
    id: number;
    cantidad: number;
    fecha: Date;
    pagado: number;
    gasto_id: Expense;
    created_at: Date;
    updated_at: Date;
    plantilla_id: number;
}