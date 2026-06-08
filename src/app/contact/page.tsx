"use client";

import React from "react";
import SubpageLayout from "@/components/shared/subpage-layout";
import ContactSection from "@/components/canvas/contact-section";

export default function ContactPage() {
  return (
    <SubpageLayout
      title="Connect with SARGVISION"
      subtitle="Whether you're an institution, organization, business, government body, or potential partner, we'd love to hear from you and explore how we can work together."
      tagline="SARGVISION PARTNERSHIP"
      accentColor="cyan"
    >
      <ContactSection isSubpage={true} />
    </SubpageLayout>
  );
}
