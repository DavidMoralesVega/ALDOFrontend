import { Exception } from '../';

export interface PayloadStore<T> {
  payload: T | Exception | null
}
