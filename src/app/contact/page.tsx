"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import ContactText from '@/components/sections/contact/ContactText';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Home", id: "/" },
              { name: "Shop", id: "/shop" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="EYE™"
          />
        </div>

        <div id="contact-section" data-section="contact-section">
          <ContactSplitForm
            useInvertedBackground={true}
            title="Direct Line"
            description="Questions regarding orders or wholesale inquiries."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
            ]}
            textarea={{ name: "message", placeholder: "How can we help?", rows: 4 }}
            imageSrc="http://img.b2bpic.net/free-photo/stylish-memphis-abstract-background-design_53876-102501.jpg"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactText
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            text="We are available Monday through Friday for all inquiries. Expect a response within 24 hours."
            buttons={[{ text: "Visit FAQ", href: "/faq" }]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Shop", href: "/shop" }, { label: "Contact", href: "/contact" }] },
              { items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
            ]}
            logoText="EYE™"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}