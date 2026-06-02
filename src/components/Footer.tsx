import type { ReactElement } from "react"
import Image from "next/image"
import { footerColumns, socialLinks } from "@/data/footer"

// Headout logo SVG (extracted from Footer.html — purple wordmark)
function HeadoutLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 152 22"
      width="152"
      height="22"
      aria-label="Headout"
    >
      <path
        d="M 35.241 7.778 C 34.318 1.957 26.808 -0.692 19.79 0.415 C 16.151 0.991 11.373 3.415 7.69 6.111 C 7.535 5.891 7.32 5.72 7.07 5.617 C 6.493 5.383 0.514 4.963 0.066 5.935 C -0.379 6.901 1.543 10.649 2.378 11.533 C 2.11 12.085 1.998 12.593 2.067 13.031 C 2.138 13.476 2.402 13.926 2.822 14.37 C 2.302 15.48 1.635 19.619 2.359 20.398 C 3.087 21.182 8.642 18.939 9.118 18.537 C 9.346 18.342 9.508 18.082 9.581 17.791 C 11.459 18.359 13.378 18.778 15.322 19.044 L 16.847 20.548 C 17.353 21.048 18.03 21.34 18.74 21.352 C 19.815 21.366 20.889 21.287 21.95 21.114 C 23.259 20.899 24.55 20.586 25.812 20.177 C 26.514 19.951 27.097 19.458 27.438 18.803 L 28.238 17.261 C 32.64 15.209 35.884 11.838 35.241 7.778 Z M 20.835 2.858 C 26.702 1.927 31.285 4.146 32.821 6.807 C 30.73 6.117 27.713 5.283 21.403 6.282 C 15.29 7.251 9.798 9.214 6.354 10.732 C 8.871 8.17 14.673 3.833 20.832 2.858 Z M 22.319 16.485 C 16.033 17.481 9.247 15.101 6.354 13.545 C 10.061 13.833 16.197 13.988 22.466 12.995 C 27.783 12.154 31.322 10.639 33.225 9.36 C 32.494 12.298 28.237 15.546 22.32 16.482 Z M 43.642 21.355 L 43.75 0.311 L 47.028 0.311 L 46.923 8.558 C 47.744 6.363 49.349 5.148 51.842 5.148 C 55.323 5.148 57.438 7.411 57.435 11.665 L 57.429 21.355 L 54.052 21.355 L 54.058 11.833 C 54.058 9.336 53.002 8.018 50.818 8.018 C 48.325 8.018 46.924 10.079 46.921 13.724 L 46.918 21.355 Z M 67.676 21.356 C 62.726 21.356 59.657 18.116 59.657 13.219 C 59.662 8.291 62.974 4.88 67.549 4.88 C 72.294 4.88 75.125 8.02 75.122 13.05 L 75.122 14.266 L 63.003 14.266 C 63.206 17.001 64.947 18.656 67.677 18.656 C 70.407 18.656 71.603 17.338 72.22 15.785 L 75.188 16.933 C 74.095 19.399 71.807 21.356 67.676 21.356 Z M 62.937 11.767 L 71.676 11.767 C 71.54 9.034 70.006 7.582 67.478 7.582 C 65.056 7.582 63.28 9.168 62.935 11.767 Z M 82.492 21.356 C 79.044 21.356 76.929 19.5 76.93 16.765 C 76.932 13.186 79.629 12.375 83.214 11.599 C 85.946 11.026 87.618 10.856 87.961 9.979 L 87.961 9.742 C 87.961 8.426 86.972 7.412 84.514 7.412 C 82.124 7.412 80.827 8.492 80.688 10.282 L 80.688 10.485 L 77.31 10.485 C 77.415 6.905 80.282 4.745 84.55 4.745 C 88.68 4.745 91.136 6.568 91.135 10.619 L 91.13 18.487 L 91.162 20.951 L 87.92 20.951 L 87.92 18.553 C 86.828 20.444 84.813 21.356 82.492 21.356 Z M 83.109 18.824 C 85.463 18.824 87.682 17.642 87.958 14.537 L 87.958 12.577 C 86.968 13.252 85.262 13.521 83.691 13.893 C 81.847 14.365 80.345 14.94 80.344 16.628 C 80.344 17.944 81.332 18.823 83.107 18.823 Z M 100.155 21.356 C 96.024 21.356 92.919 18.284 92.923 13.118 C 92.926 8.053 96 4.745 100.199 4.745 C 102.418 4.745 104.226 5.792 105.386 7.48 L 105.465 0 L 108.742 0 L 108.655 21.019 L 105.378 21.019 L 105.378 18.687 C 104.251 20.377 102.407 21.356 100.155 21.356 Z M 101.009 18.52 C 103.774 18.52 105.551 16.291 105.553 13.118 L 105.553 12.847 C 105.554 9.708 103.85 7.582 101.015 7.582 C 98.285 7.582 96.441 9.572 96.439 13.017 L 96.439 13.254 C 96.436 16.662 98.244 18.519 101.009 18.519 Z M 119.006 21.356 C 114.262 21.356 110.988 18.013 110.989 13.153 C 110.993 8.291 114.34 4.88 119.083 4.88 C 123.829 4.88 127.139 8.291 127.136 13.153 C 127.133 17.947 123.751 21.356 119.006 21.356 Z M 119.008 18.555 C 121.91 18.555 123.754 16.494 123.756 13.254 L 123.756 13.118 C 123.759 9.775 121.95 7.683 119.083 7.683 C 116.216 7.683 114.371 9.775 114.37 13.118 L 114.37 13.254 C 114.367 16.529 116.14 18.555 119.008 18.555 Z M 134.641 21.356 C 131.023 21.356 128.875 18.892 128.876 14.841 L 128.882 5.151 L 132.261 5.151 L 132.257 14.672 C 132.255 17.136 133.346 18.487 135.53 18.487 C 138.193 18.487 139.424 16.225 139.427 12.781 L 139.43 5.151 L 142.775 5.151 L 142.766 21.087 L 139.421 21.087 L 139.422 18.352 C 138.535 20.311 136.962 21.356 134.641 21.356 Z M 148.955 21.358 C 146.02 21.222 145.27 19.906 145.237 17.373 L 145.243 8.256 L 145.258 7.229 L 145.243 6.206 L 145.243 5.422 L 145.246 2.315 L 148.489 0.323 L 148.486 5.422 L 151.969 5.422 L 151.967 8.258 L 148.484 8.258 L 148.48 16.968 C 148.48 17.98 148.889 18.454 149.912 18.454 L 151.824 18.454 L 151.823 21.358 Z"
        fill="rgb(128,0,255)"
      />
    </svg>
  )
}

function SocialIcon({ icon }: { icon: string }) {
  const icons: Record<string, ReactElement> = {
    linkedin: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  }
  return icons[icon] ?? null
}

export default function Footer() {
  const [getHelpCol, citiesCol, headoutCol, partnersCol] = footerColumns

  return (
    <footer className="w-full border-t" style={{ borderColor: "rgb(226, 226, 226)", backgroundColor: "white" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Headout logo */}
        <div className="mb-10">
          <HeadoutLogo />
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1 — GET HELP 24/7 */}
          <div>
            <h3
              className="text-xs font-normal mb-4 uppercase tracking-wider"
              style={{ color: "#444", letterSpacing: "0.6px", fontFamily: "var(--font-text)" }}
            >
              {getHelpCol.title}
            </h3>
            <div className="flex flex-col gap-3 mb-6">
              {getHelpCol.links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline"
                  style={{ color: "#666", fontWeight: 300 }}
                >
                  {/* Per-link icon */}
                  {i === 0 && (
                    <svg viewBox="0 0 10 10" overflow="visible" width="14" height="14" style={{flexShrink: 0}}>
                      <g>
                        <path d="M 0 5 C 0 2.239 2.239 0 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 Z" fill="transparent" stroke="rgb(136,136,136)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M 3.75 3.75 C 3.75 3.124 4.213 2.594 4.834 2.511 C 5.454 2.428 6.041 2.817 6.206 3.421 C 6.371 4.025 6.064 4.657 5.487 4.901 C 5.232 5.01 5 5.224 5 5.5 L 5 5.75 M 5 7.5 L 5.005 7.5" fill="transparent" stroke="rgb(136,136,136)" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  )}
                  {i === 1 && (
                    <svg viewBox="0 0 10 8.5" overflow="visible" width="14" height="12" style={{flexShrink: 0}}>
                      <g>
                        <path d="M 0 1.25 L 3.457 3.208 C 4.731 3.93 5.269 3.93 6.543 3.208 L 10 1.25" fill="transparent" stroke="rgb(136,136,136)" strokeLinejoin="round" />
                        <path d="M 0.008 4.988 C 0.041 6.52 0.057 7.287 0.623 7.854 C 1.188 8.422 1.975 8.442 3.55 8.481 C 4.52 8.506 5.481 8.506 6.451 8.481 C 8.025 8.442 8.812 8.422 9.378 7.854 C 9.943 7.287 9.96 6.52 9.993 4.988 C 10.003 4.495 10.003 4.005 9.993 3.512 C 9.96 1.979 9.943 1.213 9.378 0.645 C 8.812 0.077 8.025 0.058 6.451 0.018 C 5.484 -0.006 4.517 -0.006 3.55 0.018 C 1.975 0.058 1.188 0.077 0.623 0.645 C 0.057 1.213 0.041 1.979 0.008 3.512 C -0.003 4.004 -0.003 4.496 0.008 4.988 Z" fill="transparent" stroke="rgb(136,136,136)" strokeLinejoin="round" />
                      </g>
                    </svg>
                  )}
                  {i === 2 && (
                    <svg viewBox="0 0 10.001 10" overflow="visible" width="14" height="14" style={{flexShrink: 0}}>
                      <path d="M 5.829 8.902 L 7.492 7.238 C 7.661 7.069 7.92 7.026 8.143 7.114 C 8.453 7.236 8.928 7.395 9.446 7.469 C 9.75 7.513 10.001 7.76 10.001 8.067 L 10.001 9.458 C 10.001 9.765 9.751 10.016 9.445 9.999 C 4.356 9.721 0.28 5.644 0.001 0.556 C -0.015 0.25 0.235 0 0.543 0 L 1.934 0 C 2.241 0 2.488 0.25 2.532 0.554 C 2.606 1.073 2.765 1.548 2.887 1.858 C 2.975 2.081 2.932 2.339 2.763 2.509 L 1.099 4.173" fill="transparent" stroke="rgb(136,136,136)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg viewBox="0 0 10 8.5" overflow="visible" width="14" height="12" style={{flexShrink: 0}}>
                      <g>
                        <path d="M 0 1.25 L 3.457 3.208 C 4.731 3.93 5.269 3.93 6.543 3.208 L 10 1.25" fill="transparent" stroke="rgb(136,136,136)" strokeLinejoin="round" />
                        <path d="M 0.008 4.988 C 0.041 6.52 0.057 7.287 0.623 7.854 C 1.188 8.422 1.975 8.442 3.55 8.481 C 4.52 8.506 5.481 8.506 6.451 8.481 C 8.025 8.442 8.812 8.422 9.378 7.854 C 9.943 7.287 9.96 6.52 9.993 4.988 C 10.003 4.495 10.003 4.005 9.993 3.512 C 9.96 1.979 9.943 1.213 9.378 0.645 C 8.812 0.077 8.025 0.058 6.451 0.018 C 5.484 -0.006 4.517 -0.006 3.55 0.018 C 1.975 0.058 1.188 0.077 0.623 0.645 C 0.057 1.213 0.041 1.979 0.008 3.512 C -0.003 4.004 -0.003 4.496 0.008 4.988 Z" fill="transparent" stroke="rgb(136,136,136)" strokeLinejoin="round" />
                      </g>
                    </svg>
                  )}
                  {link.label}
                </a>
              ))}
            </div>
            {/* QR / Download the Headout app card */}
            <div
              className="flex items-center gap-4 p-4 rounded-2xl"
              style={{ backgroundColor: "#F2F2F2" }}
            >
              <div className="flex-shrink-0">
                <Image
                  src="/QR.avif"
                  alt="Download the Headout app — QR code"
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
              </div>
              <p
                className="font-semibold leading-snug"
                style={{ color: "#666", fontSize: "14px", fontFamily: "var(--font-text)" }}
              >
                Download the<br />Headout app
              </p>
            </div>
          </div>

          {/* Column 2 — CITIES */}
          <div>
            <h3
              className="text-xs font-normal mb-4 uppercase tracking-wider"
              style={{ color: "#444", letterSpacing: "0.6px", fontFamily: "var(--font-text)" }}
            >
              {citiesCol.title}
            </h3>
            <div className="flex flex-col gap-3">
              {citiesCol.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                  style={{ color: "#666", fontWeight: 300 }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 — HEADOUT */}
          <div>
            <h3
              className="text-xs font-normal mb-4 uppercase tracking-wider"
              style={{ color: "#444", letterSpacing: "0.6px", fontFamily: "var(--font-text)" }}
            >
              {headoutCol.title}
            </h3>
            <div className="flex flex-col gap-3">
              {headoutCol.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                  style={{ color: "#666", fontWeight: 300 }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4 — PARTNERS + WE ACCEPT */}
          <div>
            <h3
              className="text-xs font-normal mb-4 uppercase tracking-wider"
              style={{ color: "#444", letterSpacing: "0.6px", fontFamily: "var(--font-text)" }}
            >
              {partnersCol.title}
            </h3>
            <div className="flex flex-col gap-3 mb-8">
              {partnersCol.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                  style={{ color: "#666", fontWeight: 300 }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* WE ACCEPT */}
            <div>
              <h3
                className="text-xs font-normal mb-3 uppercase tracking-wider"
                style={{ color: "#444", letterSpacing: "0.6px" }}
              >
                WE ACCEPT
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["VISA", "MC", "AMEX", "PP", "MA", "⬛"].map((icon, i) => (
                  <div
                    key={i}
                    className="px-2 py-1 rounded border text-xs font-medium"
                    style={{ borderColor: "#ddd", color: "#666", backgroundColor: "#fafafa" }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
          style={{ borderColor: "rgb(226,226,226)", color: "#999" }}
        >
          <span>
            © 2014–2025 Headout, 82 Nassau St #60351 New York, NY 10038 &nbsp;·&nbsp;
            <a href="https://www.headout.com/terms/" className="hover:underline">
              Terms of usage
            </a>
            &nbsp;·&nbsp;
            <a href="https://www.headout.com/privacy/" className="hover:underline">
              Privacy policy
            </a>
            &nbsp;·&nbsp;
            <a href="https://www.headout.com/company-details/" className="hover:underline">
              Company details
            </a>
          </span>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
