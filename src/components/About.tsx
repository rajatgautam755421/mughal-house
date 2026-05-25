"use client";

import React, { useState } from "react";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

const pillars = [
  {
    title: "Government-licensed agency",
    description:
      "Registered with the Government of India, license RAS838225. Compliant with all Malaysian recruitment regulations.",
  },
  {
    title: "Full pre-departure support",
    description:
      "Medical examinations, documentation, e-visa processing and pre-departure orientation handled in-house.",
  },
  {
    title: "Individual placement attention",
    description:
      "Each candidate is matched to a role on skill, language and aptitude — never on volume.",
  },
  {
    title: "Zero-fee worker policy",
    description:
      "Workers pay nothing to us. Costs are borne by the employer, with transparent written contracts on both sides.",
  },
];

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section id="about" className="section-padding" style={{ background: "#faf8f3" }} aria-labelledby="about-heading">
        <div className="container-xl">

          <span className="eyebrow">About the firm</span>

          <div className="mt-4 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            <div className="lg:col-span-7">
              <h2
                id="about-heading"
                className="font-display font-medium text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.015em] text-balance"
              >
                A house built on trust, scaled by reputation.
              </h2>

              <p className="mt-6 text-ink-soft text-lg leading-[1.65] text-pretty drop-cap">
                We have worked in overseas recruitment for the past two decades, and officially
                registered Mughal House Manpower Consultancy in 2023. From our office in Pandua,
                Hooghly &mdash; West Bengal &mdash; we have deployed over ten thousand skilled workers
                from India to Malaysia across plantation, construction, manufacturing and hospitality.
              </p>

              <p className="mt-5 text-ink-soft text-base leading-[1.65]">
                Both founders are personally involved in every deployment. There is no call centre,
                no intermediary, no commission chain. When you speak to Mughal House, you speak to
                the people who sign your contract.
              </p>

              <dl className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-7">
                {pillars.map(({ title, description }) => (
                  <div key={title}>
                    <dt className="text-ink font-semibold text-[15px] tracking-tight">{title}</dt>
                    <dd className="mt-1.5 text-ink-soft text-[14px] leading-[1.6]">{description}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                <a href="#process" className="btn btn-primary">Read our process</a>
                <a href="#services" className="btn-link">Sectors we recruit for</a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pt-3">
              <figure className="m-0">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="block w-full focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src="/images/team/sahamed-imac-desk.jpeg"
                      alt="S. Ahamed, Chairman and Founder of Mughal House Manpower Consultancy"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 90vw, 440px"
                    />
                  </div>
                </button>
                <figcaption className="mt-3 text-ink-muted text-xs leading-snug">
                  <span className="font-semibold text-ink">S. Ahamed (Raju)</span> &mdash; Chairman and
                  Founder. Pandua, West Bengal.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <ImageLightbox
          src="/images/team/sahamed-imac-desk.jpeg"
          alt="S. Ahamed, Chairman & Founder"
          caption="S. Ahamed"
          subcaption="Chairman & Founder · Mughal House Manpower Consultancy"
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
