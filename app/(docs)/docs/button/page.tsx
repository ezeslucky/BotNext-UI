/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import ButtonCollection from "@/components/botnextui/ButtonCollection";
import { PageSubTitle, PageTemplate } from "../components/page-template";
import { Steppers } from "@/components/ui/steppers";
const page = () => {
  return (
    <div>
      <PageTemplate title="Pre Design Button">
        <PageSubTitle>Installation</PageSubTitle>
        <Steppers
          withInstall
          codePath="components/botnextui/ButtonCollection.tsx"
          installScript="npx shadcn@latest add button"
         
          withEnd
        />
        <PageSubTitle>Usage</PageSubTitle>
        <div className="mt-12">
          <ButtonCollection />
        </div>
      </PageTemplate>
    </div>
  );
};

export default page;
