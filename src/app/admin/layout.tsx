"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  useEffect(() => {

    const password = prompt("Enter Admin Password 🔐");

    if (password !== "laithy123") {
      router.push("/");
    }

  }, []);

  return (
    <>
      {children}
    </>
  );
}