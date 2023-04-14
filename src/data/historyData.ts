export interface IHistory {
  id: number,
  symbol: string,
  time: number,
  status: string,
  successful: boolean,
  volume: number,
  sender: string,
  receiver: string,
  fee: number,
  tax: string
}

export const historyData: IHistory[] = [
  {
    id: 1,
    symbol: "BFC",
    time: 1681120522,
    status: "send",
    successful: true,
    volume: 125000,
    sender: "0x164...C8e6",
    receiver: "0x164...C8e6",
    fee: 0,
    tax: "0x164...C8e6"
  },
  {
    id: 2,
    symbol: "NFE",
    time: 1681034122,
    status: "receive",
    successful: true,
    volume: 2040000,
    sender: "0x164...C8e6",
    receiver: "0x164...C8e6",
    fee: 0,
    tax: "0x164...C8e6"
  },
  {
    id: 3,
    symbol: "SFE",
    time: 1681030522,
    status: "send",
    successful: true,
    volume: 3000000,
    sender: "0x164...C8e6",
    receiver: "0x164...C8e6",
    fee: 0,
    tax: "0x164...C8e6"
  },
  {
    id: 4,
    symbol: "BFC",
    time: 1681026922,
    status: "send",
    successful: true,
    volume: 8400000,
    sender: "0x164...C8e6",
    receiver: "0x164...C8e6",
    fee: 0,
    tax: "0x164...C8e6"
  },
  {
    id: 5,
    symbol: "ESF",
    time: 1681019722,
    status: "receive",
    successful: true,
    volume: 3425000,
    sender: "0x164...C8e6",
    receiver: "0x164...C8e6",
    fee: 0,
    tax: "0x164...C8e6"
  },
  {
    id: 6,
    symbol: "BFC",
    time: 1680933322,
    status: "send",
    successful: true,
    volume: 3425000,
    sender: "0x164...C8e6",
    receiver: "0x164...C8e6",
    fee: 0,
    tax: "0x164...C8e6"
  },
  {
    id: 7,
    symbol: "BFC",
    time: 1680846922,
    status: "send",
    successful: true,
    volume: 3425000,
    sender: "0x164...C8e6",
    receiver: "0x164...C8e6",
    fee: 0,
    tax: "0x164...C8e6"
  },
  {
    id: 5,
    symbol: "BFC",
    time: 1680839722,
    status: "receive",
    successful: true,
    volume: 3425000,
    sender: "0x164...C8e6",
    receiver: "0x164...C8e6",
    fee: 0,
    tax: "0x164...C8e6"
  }
]