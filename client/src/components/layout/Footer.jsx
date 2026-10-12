import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-foreground/60">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
