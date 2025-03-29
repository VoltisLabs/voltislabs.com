"use client"
import dynamic from "next/dynamic";

const BgRemover = dynamic(() => import("../my-bg-remover/src/app/page"), { ssr: false });

const BgRemoverPage = () => {
  return <BgRemover />;
};

export default BgRemoverPage;