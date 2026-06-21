import { useEffect, useState } from "react";

const STORAGE_KEY = "md-cookie-consent-v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  date: string;
};

function loadConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function saveConsent(c: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  } catch {
    /* noop */
  }
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = loadConsent();
    if (!existing) setOpen(true);
    else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }
  }, []);

  const persist = (a: boolean, m: boolean) => {
    saveConsent({
      necessary: true,
      analytics: a,
      marketing: m,
      date: new Date().toISOString(),
    });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Nastavení cookies"
      className="fixed bottom-3 left-3 z-50 sm:bottom-6 sm:left-6"
    >
      <div className="w-[min(calc(100vw-1.5rem),24rem)] rounded-2xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-base font-semibold text-foreground sm:text-lg">
              Používáme cookies
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Nezbytné cookies potřebujeme pro správný chod webu. S vaším souhlasem
              používáme i analytické a marketingové cookies, abychom mohli web vylepšovat.
              Souhlas můžete kdykoliv změnit.
            </p>
          </div>

          {details && (
            <div className="space-y-3 rounded-xl border border-border bg-muted/30 p-4 text-sm">
              <label className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium text-foreground">Nezbytné</div>
                  <div className="text-muted-foreground">
                    Vyžadovány pro základní funkce webu. Nelze vypnout.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4 accent-primary"
                />
              </label>
              <label className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium text-foreground">Analytické</div>
                  <div className="text-muted-foreground">
                    Anonymní statistiky o návštěvnosti webu.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-primary"
                />
              </label>
              <label className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium text-foreground">Marketingové</div>
                  <div className="text-muted-foreground">
                    Pro personalizaci obsahu a reklam.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-primary"
                />
              </label>
            </div>
          )}

          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => setDetails((v) => !v)}
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {details ? "Skrýt nastavení" : "Nastavení cookies"}
            </button>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => persist(false, false)}
                className="inline-flex items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Odmítnout vše
              </button>
              {details && (
                <button
                  type="button"
                  onClick={() => persist(analytics, marketing)}
                  className="inline-flex items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Uložit volbu
                </button>
              )}
              <button
                type="button"
                onClick={() => persist(true, true)}
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
