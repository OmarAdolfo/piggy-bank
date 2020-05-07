import { User } from './user';
import { TypeExpense } from './type-expense';
import { Payment } from './payment';

export class Expense {
    id: number;
    nombre: string;
    fecha_fin: Date;
    user: User;
    id_tipo_gasto: TypeExpense;
    created_at: Date;
    updated_at: Date;
    pagos: Payment[];
}