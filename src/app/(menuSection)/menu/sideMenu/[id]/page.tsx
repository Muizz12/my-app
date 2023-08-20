"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function SideMenu({ params }: any) {
  const router = useRouter();
  console.log(params);

  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const address = searchParams.get("address");
  const cast = searchParams.get("cast");

  useEffect(() => {
    if (params) {
      let item = localStorage?.setItem("id", params?.id);
    }
  }, []);

  console.log(name, address, cast);
  return (
    <div
      onClick={() => {
        router?.push("/dashboard/profile/" + params?.id);
      }}
    >
      SideMenu
    </div>
  );
}

export default SideMenu;
