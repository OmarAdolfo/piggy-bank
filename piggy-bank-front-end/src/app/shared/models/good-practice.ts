import { User } from './user';

export class GoodPractice {
    id: number;
    palabras_clave: string;
    porcentaje: number;
    user: User;
    created_at: Date;
    updated_at: Date;
}