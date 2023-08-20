"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

function Dashboard() {
  let person = {
    id: "123",
    name: "moiz",
    height: "6:2",
    address: "ATD",
  };
  const router = useRouter();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  //   const params = new URLSearchParams(searchParams);
  //   params.set(name, value);
  const createQueryString = () => {
    const params = new URLSearchParams(person);
    console.log(params);
    return params;
  };
  const gotoProfile = () => {
    // router.push("/dashboard/profile" + "?" + new URLSearchParams(person));
    router.push(
      `/dashboard/profile/${person?.id}?${new URLSearchParams(person)}`
    );
  };
  return <div onClick={gotoProfile}>Dashboard</div>;
}

export default Dashboard;
