"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Metopen122140114() {
  const redirect_url = "https://youtube.com";
  const { push } = useRouter();
  useEffect(() => {
    push(redirect_url);
  }, []);

  return <div />;
}

export default Metopen122140114;
