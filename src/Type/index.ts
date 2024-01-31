export type ItemType = {
  detail: string;
  id: number;
  createTime: number;
  deleteTime: null | number;
  completed: boolean;
};

export type ListType = ItemType[];

export type AddItemFnType = (detail: string, isCompleted: boolean) => void;

export type ItemCompleteFnType = (id: number) => void;

export type AllCompletedFnType = () => void;

export type ClearCompletedFnType = () => void;
