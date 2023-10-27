export interface ICoin{
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: number;
    maxSupply: number;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: number;
    changePercent24Hr: string;
    vwap24Hr: string;
    explorer: string;
}

export interface ICoinData {
  data: ICoin[];
  timestamp: number;
}
