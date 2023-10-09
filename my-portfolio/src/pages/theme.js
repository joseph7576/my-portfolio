import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ThemePage() {
  return (
    <>
      <Seo title="Theme" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="theme" heading="About This Theme" />
      </Page>
    </>
  );
}
