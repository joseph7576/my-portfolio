import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Yousef Hosseini · Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <InterestsSection sectionId="skills" heading="Skills & Abilities" />
        <ProjectsSection sectionId="projects" heading="Projects & Working Experiences" />
        <ContactSection sectionId="contact" heading="More Contact Options" />
      </Page>
    </>
  );
}
