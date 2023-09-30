//Definition of unusual type of "Money" based on number with unique symbol
export type TMoney = number & { readonly type: unique symbol };
