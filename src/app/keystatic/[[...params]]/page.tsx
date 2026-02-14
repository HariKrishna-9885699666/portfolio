"use client";

import { makePage } from "@keystatic/next/ui/app";
import config from "../../../../keystatic.config";

type Props = {
  params: {
    params?: string[];
  };
};

const KeystaticApp = makePage(config);

export default function Page(props: Props) {
  return <KeystaticApp {...props} />;
}
