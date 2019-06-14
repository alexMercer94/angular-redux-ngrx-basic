import * as fromCount from '../contador/count.actions';

export function countReducer(state: number = 10, action: fromCount.actions) {
  switch (action.type) {
    case fromCount.INCREMENTAR:
      return (state += 1);

    case fromCount.DECREMENTAR:
      return state - 1;

    case fromCount.MULTIPLICAR:
      return state * action.payload;

    case fromCount.DIVIDIR:
      return state / action.payload;

    case fromCount.RESET:
      return (state = 0);

    default:
      return state;
  }
}
