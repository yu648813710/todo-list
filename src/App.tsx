import { useCallback, useState } from "react";
import AddInput from "./Components/AddInput";
import List from "./Components/List";
import Footer from "./Components/Footer";

import { ListType } from "./Type";

const mockData = [
  {
    id: 1,
    detail: "test",
    completed: false,
    createTime: new Date().getTime(),
    deleteTime: null,
  },
  {
    id: 2,
    detail: "test2",
    completed: true,
    createTime: new Date().getTime(),
    deleteTime: null,
  },
];

function App() {
  const [listData, setListData] = useState<ListType>(mockData);

  const addList = useCallback<(detail: string, isCompleted: boolean) => void>(
    (detail, isCompleted) => {
      const newList = {
        id: listData.length + 1,
        detail,
        completed: isCompleted,
        createTime: new Date().getTime(),
        deleteTime: null,
      };
      setListData([...listData, newList]);
    },
    [listData],
  );

  const allCompletedFn = useCallback(() => {
    const newList = listData.map((item) => {
      item.completed = true;
      return item;
    });
    setListData(newList);
  }, [listData]);

  const clearCompletedFn = useCallback(() => {
    const newList = listData.filter((item) => {
      return !item.completed;
    });
    setListData(newList);
  }, [listData]);

  const itemCompleteFn = useCallback<(id: number) => void>(
    (id) => {
      const newList = listData.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      setListData(newList);
    },
    [listData],
  );

  return (
    <div className="w-full h-[100vh] bg-white">
      <div className="w-full h-[300px] absolute left-0 top-0 bg-[url('./assets/bg.png')] bg-no-repeat bg-cover bg-bottom"></div>
      <div className="absolute left-0 top-0 w-full h-[300px]  bg-gradient-to-br from-[rgb(101,78,163)] to-[#eaafc8] text-white opacity-65"></div>
      <div className="w-full absolute flex justify-center">
        <div className="w-[600px]">
          <h2 className="text-white text-2xl my-10 font-bold">TODO</h2>
          <div className="text-gray-500 text-sm font-semibold">
            <AddInput onAdd={addList} />
            <List
              listData={listData}
              allCompletedFn={allCompletedFn}
              clearCompletedFn={clearCompletedFn}
              itemCompleteFn={itemCompleteFn}
            />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
