import { User } from '../models/User';
export interface Token_jwt extends User {
    token: string
}