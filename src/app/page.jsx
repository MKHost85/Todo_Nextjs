import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

import AddTodo from "@/components/AddTodo/AddTodo"
import TodoList from "@/components/ListTodo/ListTodo";
export default function Home() {

  return (
    <main className="container mx-auto  bg-[#eff1f2] py-[24px] px-[24px] mt-[150px] xl:max-w-[1000px]">
      <div className="pb-3 mb-3">
        <h3 className="text-[24px] sm:text-[32px] xl:text-[40px] underline font-semibold text-[#3871CA] flex gap-x-[10px] text-center justify-center items-center">
          <FontAwesomeIcon icon={faSquareCheck} className="size-[28px]" />
          My Todo-s
        </h3>
      </div>
      <AddTodo />
      <TodoList />
    </main>
  );
}
