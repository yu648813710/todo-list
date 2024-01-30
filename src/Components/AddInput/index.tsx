import { FC } from "react";
import { AddItemFnType } from '../../Type'

export type AddInputPropsType = {
  onAdd:AddItemFnType
}

const AddInput:FC<AddInputPropsType> = ({
  onAdd,
}) => {

  const addItemFn:AddItemFnType = () => {
  }

  const setVal

  return (
    <div>
      <input type="text" onInput={} />
    </div>
  )
}

export default AddInput;