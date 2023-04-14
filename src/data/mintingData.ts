export interface IMinting {
  id: number,
  name: string,
  symbol: string,
  volume: number,
  price: number,
  quantity: number,
  fee: number
}

export const mintingData: IMinting[] = [
  {
    id: 1,
    name: "Community",
    symbol: "C2E",
    volume: 32128,
    price: 100,
    quantity: 1,
    fee: 92.81
  },
  {
    id: 2,
    name: "Bifrost",
    symbol: "BFC",
    volume: 22128,
    price: 100,
    quantity: 1,
    fee: 92.81
  },
  {
    id: 3,
    name: "Community1",
    symbol: "C2E1",
    volume: 128,
    price: 100,
    quantity: 1,
    fee: 92.81
  },
  {
    id: 4,
    name: "Community2",
    symbol: "C2E2",
    volume: 28,
    price: 100,
    quantity: 1,
    fee: 92.81
  },
  {
    id: 5,
    name: "Community",
    symbol: "C2E",
    volume: 32128,
    price: 100,
    quantity: 1,
    fee: 92.81
  },
  {
    id: 6,
    name: "Community",
    symbol: "C2E",
    volume: 32128,
    price: 100,
    quantity: 1,
    fee: 92.81
  }
];