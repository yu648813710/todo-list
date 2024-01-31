import { FC } from "react";
import { Checkbox, Button } from "antd";
import {
  ListType,
  AllCompletedFnType,
  ClearCompletedFnType,
  ItemCompleteFnType,
} from "../../Type";

type ListPropsType = {
  listData: ListType;
  allCompletedFn: AllCompletedFnType;
  clearCompletedFn: ClearCompletedFnType;
  itemCompleteFn: ItemCompleteFnType;
};

const List: FC<ListPropsType> = ({
  listData,
  allCompletedFn,
  clearCompletedFn,
  itemCompleteFn,
}) => {
  return (
    <div className="w-full bg-white mt-10 rounded-md p-4 drop-shadow-[0_15px_15px_rgba(101,78,163,0.25)]">
      <div className="h-[400px] overflow-y-auto">
        {listData.map((item) => {
          return (
            <div
              key={item.id}
              className=" text-ellipsis overflow-hidden w-full whitespace-nowrap leading-7 py-2 border-b border-gray-100"
            >
              <Checkbox
                checked={item.completed}
                onChange={() => {
                  itemCompleteFn(item.id);
                }}
              />
              {item.completed ? (
                <span
                  className="ml-4 cursor-pointer line-through text-gray-300"
                  onClick={() => {
                    itemCompleteFn(item.id);
                  }}
                >
                  {item.detail}
                </span>
              ) : (
                <span
                  className="ml-4 cursor-pointer"
                  onClick={() => {
                    itemCompleteFn(item.id);
                  }}
                >
                  {item.detail}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between pt-4">
        <div className="leading-8">{listData.length} item left</div>
        <Button type="link" onClick={allCompletedFn}>
          All Active Completed
        </Button>
        <Button type="link" onClick={clearCompletedFn}>
          Clear Completed
        </Button>
      </div>
    </div>
  );
};

export default List;
