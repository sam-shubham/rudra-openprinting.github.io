"use client";

import Link from "next/link";
import {
  Printer,
  FileText,
  Filter,
  FolderOpen,
  Code,
  ExternalLink,
  ArrowRight,
  Database,
  Package,
} from "lucide-react";
import Footer from "@/components/footer";

interface DownloadItem {
  title: string;
  description: string;
  details: string[];
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  enabled: boolean;
  external?: boolean;
}

const downloadItems: DownloadItem[] = [
  {
    title: "PPD Files",
    description:
      "PostScript Printer Description files organized by manufacturer for use with CUPS.",
    details: [
      "Brother, Canon, Dell, Epson, HP",
      "Kyocera, Lexmark, Oki, Ricoh",
      "Samsung, Sharp, Toshiba, Xerox & more",
    ],
    icon: FileText,
    href: "https://www.openprinting.org/download/PPD/",
    enabled: false,
    external: true,
  },
  {
    title: "CUPS Filters",
    description:
      "Source tarballs for cups-filters, the OpenPrinting filter and backend package for CUPS.",
    details: [
      "Latest: cups-filters-1.28.x",
      "Legacy versions from 1.0 onwards",
      "Available as .tar.gz, .tar.bz2, .tar.xz",
    ],
    icon: Filter,
    href: "https://www.openprinting.org/download/cups-filters/",
    enabled: false,
    external: true,
  },
  {
    title: "Foomatic",
    description:
      "Browse the Foomatic printer database — search across 6,600+ printers with driver compatibility info.",
    details: [
      "Search & filter printers",
      "Driver compatibility details",
      "Print quality & feature ratings",
    ],
    icon: Printer,
    href: "/foomatic",
    enabled: true,
  },
  {
    title: "All Downloads",
    description:
      "Full download directory with all OpenPrinting resources and archives.",
    details: [
      "PPD files, CUPS filters, Foomatic DB",
      "IJS drivers, test files, legacy tools",
      "Meeting notes & documentation",
    ],
    icon: FolderOpen,
    href: "https://www.openprinting.org/download/",
    enabled: false,
    external: true,
  },
  {
    title: "IJS Drivers",
    description:
      "Printer drivers compatible with the IJS (Inkjet Server) raster protocol.",
    details: [
      "HPIJS v1.0+",
      "Gutenprint (Gimp-Print 4.2.1+)",
      "Epson EPL5x00L v0.2.2+",
    ],
    icon: Code,
    href: "https://www.openprinting.org/download/ijs/",
    enabled: false,
    external: true,
  },
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero header */}
      <div className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
              <Database className="h-4 w-4" />
              Resources & Tools
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Downloads
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Printer drivers, filters, PPD files, and tools from the
              OpenPrinting project.
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Featured item - Foomatic */}
          {downloadItems
            .filter((item) => item.enabled)
            .map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group block mb-8"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-gray-900/80 to-gray-900/80 p-8 sm:p-10 hover:border-primary/50 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="relative flex flex-col sm:flex-row items-start gap-6">
                      <div className="shrink-0 p-4 rounded-2xl bg-primary/15 border border-primary/25 group-hover:border-primary/40 transition-colors">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                            {item.title}
                          </h2>
                        </div>
                        <p className="text-gray-400 text-base sm:text-lg mb-4 max-w-2xl">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {item.details.map((detail) => (
                            <span
                              key={detail}
                              className="inline-flex items-center px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 self-center hidden sm:block">
                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                          <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

          {/* Other items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {downloadItems
              .filter((item) => !item.enabled)
              .map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="shrink-0 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                        <Icon className="h-6 w-6 text-gray-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2.5 mb-1">
                          <h3 className="text-lg font-semibold text-gray-300">
                            {item.title}
                          </h3>
                          {item.external && (
                            <ExternalLink className="h-3.5 w-3.5 text-gray-600" />
                          )}
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1.5 mb-5">
                      {item.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <div className="h-1 w-1 rounded-full bg-gray-600 shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-500 text-sm font-medium">
                      <Package className="h-3.5 w-3.5" />
                      Coming Soon
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
