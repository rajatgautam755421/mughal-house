import { Building2 } from "lucide-react";

const clients = [
  { name: "Sime Darby", sector: "Plantation" },
  { name: "IOI Corporation", sector: "Agri-business" },
  { name: "FGV Holdings", sector: "Agriculture" },
  { name: "IJM Corporation", sector: "Construction" },
  { name: "Gamuda Berhad", sector: "Infrastructure" },
  { name: "YTL Corporation", sector: "Property" },
  { name: "WCT Holdings", sector: "Engineering" },
  { name: "Ahmad Zaki", sector: "Construction" },
  { name: "UEM Builders", sector: "Civil Works" },
  { name: "Kerjaya Prospek", sector: "Property" },
  { name: "Sunway Group", sector: "Property" },
  { name: "MRCB", sector: "Infrastructure" },
  { name: "Ekovest Berhad", sector: "Engineering" },
  { name: "TRC Synergy", sector: "Construction" },
];

export default function Clients() {
  return (
    <section
      className="relative py-12 sm:py-14 overflow-hidden"
      style={{ background: "rgba(7, 12, 22, 0.76)" }}
      aria-labelledby="clients-heading"
    >
      {/* Top & bottom border lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-500/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-500/15 to-transparent"
        aria-hidden="true"
      />

      <div className="container-xl mb-8 sm:mb-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg bg-royal-500/10 flex items-center justify-center"
              aria-hidden="true"
            >
              <Building2 className="w-4 h-4 text-royal-400" />
            </div>
            <div>
              <p className="text-royal-400 text-[10px] sm:text-xs tracking-[0.22em] uppercase font-semibold">
                Trusted Partners
              </p>
              <h2
                id="clients-heading"
                className="text-white font-semibold text-base sm:text-lg leading-tight"
              >
                Powering Malaysia&apos;s leading employers
              </h2>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/8 border border-emerald-500/15">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span className="text-emerald-400 text-xs font-medium">100+ active partnerships</span>
          </div>
        </div>
      </div>

      {/* ── Marquee track ── */}
      <div className="relative" role="list" aria-label="Client companies">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(7,12,22,0.76), transparent)" }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(7,12,22,0.76), transparent)" }}
          aria-hidden="true"
        />

        {/* Row 1 — scrolls left */}
        <div className="flex gap-3 sm:gap-4 overflow-hidden mb-3">
          <div
            className="flex gap-3 sm:gap-4 animate-marquee-left shrink-0"
            style={{ animationDuration: "30s" }}
          >
            {clients.map((client) => (
              <ClientCard key={`r1-${client.name}`} {...client} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div
            className="flex gap-3 sm:gap-4 animate-marquee-left shrink-0"
            aria-hidden="true"
            style={{ animationDuration: "30s" }}
          >
            {clients.map((client) => (
              <ClientCard key={`r1d-${client.name}`} {...client} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex gap-3 sm:gap-4 overflow-hidden">
          <div
            className="flex gap-3 sm:gap-4 animate-marquee-right shrink-0"
            style={{ animationDuration: "25s" }}
          >
            {[...clients].reverse().map((client) => (
              <ClientCard key={`r2-${client.name}`} {...client} />
            ))}
          </div>
          <div
            className="flex gap-3 sm:gap-4 animate-marquee-right shrink-0"
            aria-hidden="true"
            style={{ animationDuration: "25s" }}
          >
            {[...clients].reverse().map((client) => (
              <ClientCard key={`r2d-${client.name}`} {...client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientCard({ name, sector }: { name: string; sector: string }) {
  return (
    <div
      role="listitem"
      className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-dark-900/70 border border-white/6 hover:border-gold-500/20 hover:bg-dark-900 transition-all duration-200 whitespace-nowrap cursor-default shrink-0 group"
    >
      <div
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/15 transition-colors duration-200"
        aria-hidden="true"
      >
        <span className="font-display font-bold text-gold-500 text-xs leading-none">
          {name.charAt(0)}
        </span>
      </div>
      <div>
        <p className="text-white text-xs sm:text-sm font-semibold leading-tight">{name}</p>
        <p className="text-dark-400 text-[10px] sm:text-xs leading-tight">{sector}</p>
      </div>
    </div>
  );
}
