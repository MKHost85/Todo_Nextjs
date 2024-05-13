"use client";
import React, { useState } from "react";
import { useTodoContext } from "@/context/todo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function AddTodo() {
  const [text, setText] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [fieldEmpty, setFieldEmpty] = useState(false);

  const { state, dispatch } = useTodoContext();

  const onSubmit = (e) => {
    e.preventDefault();
    if (text && dueTime) {
      const newDate = {
        id: Date.now(),
        text: text,
        dueTime: new Date(dueTime).toLocaleString(),
        statusTime: "waiting",
      };

      dispatch({
        type: "ADD_TODO",
        payload: newDate,
      });
      setText("");
      setDueTime("");
    }
  };

  return (
    <div className="h-[110px] lg:h-[140px] lg:text-[20px]">
      <form
        onSubmit={onSubmit}
        className="bg-[#fff] flex flex-row justify-between items-center p-[16px] lg:p-[24px]  rounded"
      >
        <input
          className="w-full outline-none text-[16px] h-[40px] lg:h-[45px]"
          placeholder="Add Task"
          onChange={(e) => setText(e.target.value)}
          value={text}
          
        />
        <div className="flex flex-row items-center gap-x-[10px] lg:gap-x-[15px] ">
          <div className="h-[26px] lg:size-[25px] overflow-hidden relative">
            <input
              type="datetime-local"
              className="absolute top-0 left-0 w-full opacity-0  z-10"
              placeholder="add Time"
              onChange={(e) => setDueTime(e.target.value)}
              value={dueTime}
            />
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="w-[16px] h-[26px] lg:size-[25px]  text-[#3871CA] "
            />
          </div>
          <button
            type="submit"
            className="py-[7px] px-[25px] bg-[#3871CA] text-[#ffffff] rounded text-[14px] md:text-[16px]"
            onClick={() => {
              if (text && dueTime) {
                setFieldEmpty(false);
              } else {
                setFieldEmpty(true);
              }
            }}
          >
            Add
          </button>
        </div>
      </form>
      {fieldEmpty ? (
        <div className="text-left text-red-800 text-[14px] lg:text-[16px] pl-[20px] pt-[5px]">
          Not All Field Is Full
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
}
