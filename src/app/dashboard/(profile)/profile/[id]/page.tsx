"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

function page({ params }: any) {
  console.log(params);
  const searchParams = useSearchParams();
  const name = searchParams.get("height");
  console.log(name);
  let id = localStorage?.getItem("id");
  return <div>DashBoard {id}</div>;
}

export default page;
