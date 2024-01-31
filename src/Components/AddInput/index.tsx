import { FC, useState, useCallback } from "react";
import { Checkbox, Input, RadioChangeEvent } from "antd";
import { AddItemFnType } from "../../Type";

export type AddInputPropsType = {
  onAdd: AddItemFnType;
};

const AddInput: FC<AddInputPropsType> = ({ onAdd }) => {
  const [inputVal, setInputVal] = useState<string>("");
  const [radioVal, setRadioVal] = useState<boolean>(false);

  const addItemFn = useCallback(() => {
    if (!inputVal) {
      return;
    }
    onAdd(inputVal, radioVal);
    setInputVal("");
    setRadioVal(false);
  }, [inputVal, onAdd, radioVal]);

  const setVal = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>(
    (e) => {
      setInputVal(e.target.value);
    },
    [],
  );

  const enterDown = useCallback<
    (e: React.KeyboardEvent<HTMLInputElement>) => void
  >(
    (e) => {
      if (e.key === "Enter") {
        addItemFn();
      }
    },
    [addItemFn],
  );

  const radioChange = useCallback<(e: RadioChangeEvent) => void>((e) => {
    setRadioVal(e.target.checked);
  }, []);

  return (
    <div className="w-full bg-white h-10 leading-10 rounded-md px-4 flex">
      <Checkbox checked={radioVal} onChange={radioChange} />
      <Input
        className="text-gray-500"
        type="text"
        onChange={setVal}
        onKeyDown={enterDown}
        value={inputVal}
        variant="borderless"
      />
    </div>
  );
};

export default AddInput;
