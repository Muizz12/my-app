"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Menu() {
  const router = useRouter();
  let person = {
    id: "131012",
    name: "ehtisham",
    address: "Atd",
    cast: "pathan",
  };
  const gotoSideMenu = () => {
    router.push(`/menu/sideMenu/${person?.id}?${new URLSearchParams(person)}`);
  };
  const showSomething = async () => {
    await console.log("showSomething");
  };
  return <div onClick={gotoSideMenu}>menu</div>;
}

export default Menu;
