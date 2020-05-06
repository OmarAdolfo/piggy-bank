import { User } from './user';
import { TypeProfit } from './type-profit';
import { Revenue } from './revenue';

export class Profit {
    id: number;
    nombre: string;
    user: User;
    id_tipo_ganancia: TypeProfit;
    created_at: Date;
    updated_at: Date;
    ingresos: Revenue[];
}