
export type ItemType = {
  detail: string,
  id: number,
  createTime: number,
  deleteTime: null | number,
  isShow: boolean,
}

export type ListType = ItemType[];

export type AddItemFnType = (detail:string) => ItemType;

export type DelItemFnType = (id:string) => void;

export type AllCompletedFnType = () => void;

