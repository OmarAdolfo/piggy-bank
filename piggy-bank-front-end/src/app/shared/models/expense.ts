import { User } from './user';
import { TypeExpense } from './type-expense';

export class Expense {
    id: number;
    nombre: string;
    recordar: number;
    fecha_fin: Date;
    flexible: number;
    user: User;
    tipo_gasto: TypeExpense;
    created_at: Date;
    updated_at: Date;
}