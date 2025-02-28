import React from "react";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import PreviewCodeCard from "../components/preview-code-card";

import { Steppers } from "@/components/ui/steppers";
import Alertdemo from "./alertdemo";
import Usage from "../components/usage";
import Alert02 from "./usage/alerttwo";
import Alert03 from "./usage/alertthree";
import Alert04 from "./usage/alertfour";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <PageTemplate title="Animated Alert" className="mt-5">
        <PreviewCodeCard path="app/(docs)/docs/alert/alertdemo.tsx">
          <Alertdemo />
        </PreviewCodeCard>

        <PageSubTitle>Installation</PageSubTitle>
        <p className="text-gray-400">
          Edit tailwind.config.ts to add background grid
        </p>

        <Steppers
          className=""
          installScript="npm i framer-motion lucide-react npx shadcn@latest add alert
 "
          steps={[{ title: "Create feedback component & paste the code" }]}
          withInstall
          codePath="lib/utils.ts"
        />

        <PageSubTitle>Usage</PageSubTitle>
      
        <Usage path="app/(docs)/docs/alert/usage/alertthree.tsx">
          <Alert02 />
        </Usage>
        <Usage path="app/(docs)/docs/alert/usage/alertthree.tsx">
          <Alert03 />
        </Usage>
        <Usage path="app/(docs)/docs/alert/usage/alertfour.tsx">
          <Alert04 />
        </Usage>
        <div className="font-bold text-neutral-500 flex gap-4">
          <h1>Credits -</h1>
          <Link href="https://kokonut.dev/">
          kokonut UI
          </Link>
        </div>
      </PageTemplate>
    </div>
  );
};

export default page;
