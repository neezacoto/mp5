"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import getLink from "../../../lib/getLink";

const AliasPage = () => {
  const router = useRouter();
  //   https://www.linkedin.com/pulse/encountering-directly-accessed-param-warning-after-upgrading-rahman-gkaif/
  // the first comment actually has the correct solution
  const { alias } = useParams();
  const [status, setStatus] = useState("Redirecting...");
  useEffect(() => {
    const fetchAndRedirect = async () => {
      const url = await getLink(alias as string);
      if (url) {
        window.location.href = url;
      } else {
        setStatus("404: Your lil ol' link don't exist!!!");
      }
    };

    fetchAndRedirect();
  }, [alias, router]);

  return <div>{status}</div>;
};

export default AliasPage;
