import { SITE_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <>
      <div className="gold-line" />

      <footer
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0F1B3D 0%, #1B2A5B 100%)",
        }}
      >
        {/* Decorative glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 600px 300px at 50% 100%, rgba(201,168,76,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Main footer grid */}
        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-8 pb-9 pt-[50px] md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <h4 className="font-display text-[1.6rem] tracking-[0.12em] text-gold">
              {SITE_INFO.name}
            </h4>
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-silver">
              Học Nhanh · Thi Chắc · Since 2012
            </p>
            <p className="text-[0.82rem] leading-[1.7] text-white/70">
              Trung tâm luyện thi IELTS uy tín tại Hà Nội. Cam kết đầu ra,
              phương pháp giảng dạy hiệu quả, lộ trình cá nhân hoá cho từng học
              viên.
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h5 className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-gold">
              Liên Hệ
            </h5>
            <p className="py-1 text-[0.84rem] leading-relaxed text-white/70">
              📍 {SITE_INFO.address}
            </p>
            <FooterLink href={SITE_INFO.phoneHref}>
              📞 {SITE_INFO.phone}
            </FooterLink>
            <FooterLink href={`mailto:${SITE_INFO.email}`}>
              ✉ {SITE_INFO.email}
            </FooterLink>
            <FooterLink href={SITE_INFO.websiteHref} external>
              🌐 {SITE_INFO.website}
            </FooterLink>
          </div>

          {/* Links column */}
          <div>
            <h5 className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-gold">
              Liên Kết
            </h5>
            <FooterLink href={SITE_INFO.facebookHref} external>
              Facebook: {SITE_INFO.facebook}
            </FooterLink>
            <FooterLink href={SITE_INFO.registerLink} external>
              📋 Đăng ký học
            </FooterLink>
            <FooterLink href={SITE_INFO.achievementsLink} external>
              🏅 Thành tích học sinh
            </FooterLink>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 border-t border-gold/15 px-8 py-5">
          <p className="text-[0.75rem] text-white/50">
            © 2012–2026 VESTA Academy. Học nhanh — Thi chắc.
          </p>
          <a
            href={SITE_INFO.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            ✦ Đăng Ký Ngay
          </a>
        </div>
      </footer>
    </>
  );
}

function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block py-1 text-[0.84rem] leading-relaxed text-white/70 transition-colors hover:text-gold-light"
    >
      {children}
    </a>
  );
}