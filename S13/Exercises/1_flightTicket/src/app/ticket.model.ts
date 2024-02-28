export interface Ticket {
    NomePassageiro: string;
    numeroVoo: string;
    dataPartida: string;
    dataChegada: string;
    aeroportoPartida: string;
    aeroportoChegada: string;
    id?: string;
}