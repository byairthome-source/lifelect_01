import HeroBanner from "@/components/HeroBanner";
import JsonLd from "@/components/JsonLd";
import { getProducts } from "@/lib/products";
import HomeClient from "../HomeClient";

export const dynamic = "force-dynamic";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lifelect",
  url: "https://lifelect.com",
  logo: "https://lifelect.com/images/logo/logo7.png",
  description:
    "Professional-grade window cleaning robots for commercial and residential buildings. B2B wholesale, OEM/ODM, and distribution partnerships worldwide.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#6-2 Alley 2, 25th Block, Tangwei Community, Fuyong Subdistrict",
    addressLocality: "Shenzhen",
    addressRegion: "Guangdong",
    addressCountry: "CN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+86-15986725116",
    email: "info@lifelect.com",
    contactType: "sales",
    availableLanguage: ["English", "Chinese"],
  },
  sameAs: ["https://yectron.1688.com"],
} as const;

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lifelect",
  url: "https://lifelect.com",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://lifelect.com/products?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
} as const;

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={webSiteSchema} />
      <HeroBanner />
      <HomeClient products={products} />
    </>
  );
}
