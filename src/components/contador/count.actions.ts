import { Action } from '@ngrx/store';
export const INCREMENTAR = '[Count] Incrementar';
export const DECREMENTAR = '[Count] Decrementar';
export const MULTIPLICAR = '[Count] Multiplicar';
export const DIVIDIR = '[Count] Dividir';
export const RESET = '[Count] Reset';

export class IncrementarAction implements Action {
  readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
  readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action {
  readonly type = MULTIPLICAR;
  constructor(public payload: number) {}
}

export class DividirAction implements Action {
  readonly type = DIVIDIR;
  constructor(public payload: number) {}
}

export class ResetAction implements Action {
  readonly type = RESET;
}
export type actions = IncrementarAction | DecrementarAction | MultiplicarAction | DividirAction | ResetAction;
