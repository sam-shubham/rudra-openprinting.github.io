import Link from "next/link";
import { Github, Rss, Mail } from "lucide-react";

function MastodonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z" />
    </svg>
  );
}

const links = [
  {
    name: "GitHub",
    href: "https://github.com/OpenPrinting",
    icon: <Github className="h-4 w-4" />,
  },
  {
    name: "Mastodon",
    href: "https://ubuntu.social/tags/OpenPrinting",
    icon: <MastodonIcon />,
  },
  {
    name: "Mailing Lists",
    href: "https://lore.kernel.org/printing-users/",
    icon: <Mail className="h-4 w-4" />,
  },
  { name: "RSS", href: "/feed", icon: <Rss className="h-4 w-4" /> },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-gray-100">
              OpenPrinting
            </h3>
            <p className="mt-2 text-base text-gray-400">
              Open-source printing stack for Linux and Unix ecosystems.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 lg:justify-end">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("/") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("/") ? undefined : "noopener noreferrer"
                }
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700/80 bg-slate-900/40 px-3.5 py-2 text-xs text-gray-200 transition-colors hover:bg-slate-800/60 hover:text-white"
              >
                <span className="text-sm">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-5 text-xs text-gray-500">
          © {new Date().getFullYear()} OpenPrinting
        </div>
      </div>
    </footer>
  );
}
