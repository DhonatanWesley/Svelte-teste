import { writable } from "svelte/store";

/*
export class itemCarrinhoBean {
    id         : string;
    quantidade : number;
    valortotal : number;

    constructor(id: string, quantidade: number, valortotal: number) {
        this.id         = id;
        this.quantidade = quantidade;
        this.valortotal = valortotal;
      }

}
*/

//type itemCarrinho  = { id: string, qtd: Number, valor: Number };

export const listaItemCarrinho = writable([]);
export default listaItemCarrinho;