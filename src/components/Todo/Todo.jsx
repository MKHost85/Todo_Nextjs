"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPencil,
  faCircleInfo,
  faClipboardList,
  faHourglassHalf,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todo, handleOnChangeEdit, handleOnDeleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const [dueTime, setDueTime] = useState(todo.dueTime);
  const [statusTime, setStatusTime] = useState(todo.statusTime);

  let todoStatus;
  if (statusTime === "waiting") {
    todoStatus = (
      <>
        <FontAwesomeIcon
          icon={faClipboardList}
          className="mt-[5px] text-indigo-600"
        />
      </>
    );
  }
  if (statusTime === "inTime") {
    todoStatus = (
      <>
        <FontAwesomeIcon icon={faHourglassHalf} className="mt-[5px]" />
      </>
    );
  }
  if (statusTime === "done") {
    todoStatus = (
      <>
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="mt-[5px] text-green-600"
        />
      </>
    );
  } 

  let todoContent;
  if (isEditing) {
    todoContent = (
      <div className="flex flex-col lg:flex-row gap-y-[20px] gap-x-[10px]">
        <div className="flex flex-row gap-x-[10px]">
          {todoStatus}

          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleOnChangeEdit({ ...todo, text: e.target.value });
            }}
            className="pl-[10px] w-full rounded-sm"
          />
        </div>
        <input
          type="datetime-local"
          className="bg-transparent w-[210px] text-[18px] outline-none cursor-pointer"
          onChange={(e) => {
            setDueTime(e.target.value);
            handleOnChangeEdit({ ...todo, dueTime: e.target.value });
          }}
          value={dueTime}
        />
        <div className="flex items-end ">
          <select
            name="statusTime"
            id="statusTime"
            className="w-[110px] px-[10px] py-[5px] rounded-sm border border-[#ddd] outline-[#ddd]"
            value={statusTime}
            onChange={(e) => {
              setStatusTime(e.target.value);
              handleOnChangeEdit({ ...todo, statusTime: e.target.value });
            }}
          >
            <option value="done">Done</option>
            <option value="inTime">In Time</option>
            <option value="waiting">Waiting</option>
          </select>
        </div>
        <button
          onClick={() => setIsEditing(false)}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[4px] px-4 rounded"
        >
          Save
        </button>
      </div>
    );
  } else {
    todoContent = (
      <div className="flex flex-row">
        {todoStatus}
        <p className="bg-transparent pl-[10px] text-left text-wrap break-words md:max-w-[430px] lg:max-w-[600px] xl:max-w-[650px]">
          {text}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col py-[4px] gap-x-[10px] text-[18px]">
        {todoContent}
      </div>
      <div className="flex flex-row w-[240px] justify-end ml-auto">
        <div className="flex flex-row gap-x-[10px] items-start">
          <div
            id="createdDate"
            className="flex flex-row gap-x-[4px] text-[14px] items-center cursor-pointer relative  after:content-['Created-Date'] after:absolute after:hidden after:top-[-40px] after:rounded-sm after:bg-[#676363] after:text-[#fff] after:text-center after:w-full after:h-[38px] after:pt-[7px]  hover:after:block"
          >
            <FontAwesomeIcon icon={faCircleInfo} className="" />
            <span id="datetime">{new Date(dueTime).toLocaleString()}</span>
          </div>
          <div className="flex flex-row justify-end gap-x-[15px] pl-[10px]">
            <button onClick={() => handleOnDeleteTodo(todo.id)}>
              <FontAwesomeIcon
                icon={faTrashCan}
                id="delete"
                className="cursor-pointer "
              />
            </button>
            <button
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <FontAwesomeIcon
                icon={faPencil}
                id="edit"
                className="cursor-pointer "
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
