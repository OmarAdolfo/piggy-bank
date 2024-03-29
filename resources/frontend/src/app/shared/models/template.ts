import { Payment } from './payment';
import { Revenue } from './revenue';

export class Template {
    id: number;
    anno: number;
    mes: number;
    created_at: Date;
    updated_at: Date;
    pagos: Payment[];
    ingresos: Revenue[];
}