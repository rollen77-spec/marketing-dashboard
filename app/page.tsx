import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="relative h-10 w-[180px] shrink-0">
            <Image
              src="/logo.png"
              alt="Hostopia"
              fill
              className="object-contain object-left"
              priority
              sizes="180px"
            />
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 md:flex">
            <a href="#solutions" className="hover:text-zinc-900">Solutions</a>
            <a href="#platform" className="hover:text-zinc-900">Platform</a>
            <a href="#resources" className="hover:text-zinc-900">Resources</a>
            <a href="#company" className="hover:text-zinc-900">Company</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-amber-300 px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-amber-200"
          >
            Become a Partner
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white" id="hero">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-zinc-100 to-transparent" />
        <div className="absolute right-[15%] top-[20%] h-32 w-32 rounded-lg bg-sky-100/80" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="mb-4 h-0.5 w-12 bg-teal-500" />
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              Wholesale &amp; White-Label Digital Services
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
              The Platform{" "}
              <span className="text-teal-600">Behind the</span>
              <br />
              Brands That Power Small Business.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
              Hostopia gives telcos, resellers, and distributors a complete white-label platform to launch digital services, drive new revenue, and become true digital advisors to the small businesses they serve.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-md bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-amber-200"
              >
                Become a Partner
              </a>
              <a
                href="#solutions"
                className="rounded-md border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-zinc-200 bg-zinc-50/50">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <p className="text-2xl font-bold text-teal-600 md:text-3xl">500+</p>
              <p className="mt-1 text-sm font-medium text-zinc-700">Service Provider Partners</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-teal-600 md:text-3xl">99.99%</p>
              <p className="mt-1 text-sm font-medium text-zinc-700">Platform Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-teal-600 md:text-3xl">20M+</p>
              <p className="mt-1 text-sm font-medium text-zinc-700">Mailboxes Migrated</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-teal-600 md:text-3xl">24/7</p>
              <p className="mt-1 text-sm font-medium text-zinc-700">Multilingual Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Foundation */}
      <section className="mx-auto max-w-6xl px-6 py-20" id="platform">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">Our Foundation</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Everything You Need.<br />Nothing You Don&apos;t.
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Three pillars that give service providers a complete, turnkey solution for selling digital services to SMBs.
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold text-teal-600">01</p>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900">Platforms</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Enterprise-grade, battle-tested platforms for email, web presence, ecommerce, and digital marketing — fully white-labeled and ready for your brand identity. You set the pricing. We power everything underneath.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold text-teal-600">02</p>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900">People</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Dedicated teams who live and breathe the service provider business. From large-scale migrations to bilingual customer support, our people become an invisible extension of your team.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-bold text-teal-600">03</p>
            <h3 className="mt-2 text-xl font-semibold text-zinc-900">Technology</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Cutting-edge infrastructure powering millions of mailboxes and websites at proven scale. Built for reliability, security, and the enterprise demands of telcos and national resellers.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="bg-zinc-50 py-20" id="resources">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">Who We Partner With</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Built for Service Providers
          </h2>
          <p className="mt-4 text-zinc-600">If you sell to small businesses, Hostopia was built for you.</p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900">Telcos &amp; Carriers</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Add high-margin digital services to your connectivity bundle. Retain customers with email, web, and ecommerce — products SMBs use every single day.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900">Resellers &amp; Distributors</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Expand your catalog with in-demand SMB digital tools. White-label Hostopia&apos;s platform and offer a complete suite without building anything from scratch.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900">Domain Registrars</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Complement your domain business with email hosting, website builders, and online stores. Turn one-time sales into monthly recurring revenue.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900">ISPs &amp; Hosting Cos.</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Move up the value chain. Add SMB-focused digital marketing, ecommerce, and professional services on top of your infrastructure business.
              </p>
            </div>
          </div>
          <p className="mt-10 text-center">
            <a href="#contact" className="font-semibold text-teal-600 hover:text-teal-700">Don&apos;t see your category? Let&apos;s talk</a>
          </p>
        </div>
      </section>

      {/* White-Label Solutions / Products */}
      <section className="mx-auto max-w-6xl px-6 py-20" id="solutions">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">White-Label Solutions</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Everything Your Customers<br />Need to Succeed Online
        </h2>
        <p className="mt-4 text-zinc-600">You set the pricing. We power the platform.</p>
        <div className="mt-12 space-y-8">
          {[
            { num: "01", tag: "Core Revenue Driver", title: "Business Email", desc: "Professional email hosting at enterprise scale. Advanced spam filtering, calendar sync, and full admin controls. All under your brand." },
            { num: "02", tag: "SMB Essential", title: "Website Builder", desc: "Drag-and-drop builder with modern templates, SEO tools, and full white-label customization for your brand." },
            { num: "03", tag: "High-Value Upsell", title: "Ecommerce", desc: "Full-featured online store platform with inventory management, payment processing, and marketing tools — built in." },
            { num: "04", tag: "Stickiness Creator", title: "Digital Marketing", desc: "SEO, social media management, Google Ads, and reputation management — packaged and branded as your own suite." },
            { num: "05", tag: "Unique Differentiator", title: "Bilingual Support", desc: "Full English and French bilingual customer support, delivered in your brand's voice." },
          ].map((item) => (
            <div key={item.num} className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm md:flex-row md:items-start md:gap-8">
              <p className="text-sm font-bold text-teal-600">{item.num}</p>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase text-zinc-500">{item.tag}</p>
                <h3 className="mt-1 text-xl font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center">
          <a href="#contact" className="inline-block rounded-md bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-200">Become a partner →</a>
        </p>
      </section>

      {/* Migration Capabilities */}
      <section className="bg-zinc-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Migration Capabilities</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Large-Scale<br />Migrations. Zero Drama.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-300">
            Switching platforms is one of the biggest risks for any service provider. Hostopia eliminates that risk entirely — at any scale.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div><p className="text-2xl font-bold text-teal-400">20M+</p><p className="text-sm text-zinc-400">Mailboxes Migrated</p></div>
            <div><p className="text-2xl font-bold text-teal-400">99.99%</p><p className="text-sm text-zinc-400">Uptime Guaranteed</p></div>
            <div><p className="text-2xl font-bold text-teal-400">0</p><p className="text-sm text-zinc-400">Minutes of Downtime</p></div>
            <div><p className="text-2xl font-bold text-teal-400">100%</p><p className="text-sm text-zinc-400">Data Integrity</p></div>
          </div>
          <div className="mt-12 rounded-xl bg-zinc-800/50 p-8">
            <h3 className="text-lg font-semibold text-white">The Migration Problem — Solved</h3>
            <p className="mt-3 text-zinc-300">
              Migrating thousands of customers from an old platform to a new one used to mean risk, complaints, and churn. Hostopia has engineered that risk out of the equation entirely — so you can make the switch confidently and at any scale.
            </p>
            <p className="mt-3 text-zinc-300">
              Every email, contact, calendar event, and file is validated pre- and post-migration. Your customers never know the switch happened. Business continues uninterrupted.
            </p>
          </div>
        </div>
      </section>

      {/* Bilingual Support */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">Bilingual Support</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Support That<br />Sounds Like You.
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-600">
          We believe exceptional customer interactions can provide your business a meaningful competitive advantage. Our team delivers high-quality support on your behalf while maintaining your brand voice.
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-4 text-center">
            <p className="text-2xl font-bold text-teal-600">EN/FR/SP</p>
            <p className="text-sm text-zinc-600">Multilingual</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-4 text-center">
            <p className="text-2xl font-bold text-teal-600">24/7</p>
            <p className="text-sm text-zinc-600">Availability</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-4 text-center">
            <p className="text-2xl font-bold text-teal-600">&lt; 60s</p>
            <p className="text-sm text-zinc-600">First Reply SLA</p>
          </div>
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-6 py-4 text-center">
            <p className="text-2xl font-bold text-teal-600">98%</p>
            <p className="text-sm text-zinc-600">CSAT</p>
          </div>
        </div>
        <p className="mt-10">
          <a href="#contact" className="font-semibold text-teal-600 hover:text-teal-700">Talk to Us About Support</a>
        </p>
      </section>

      {/* Go-to-Market */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">Go-to-Market Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            We Help You Sell It,<br />Not Just Build It.
          </h2>
          <p className="mt-4 text-zinc-600">
            Our go-to-market expertise helps service providers accelerate adoption, increase ARPU, and reduce churn from day one.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Co-Branded Marketing", desc: "Ready-to-use campaigns, assets, and messaging. Digital ads, email campaigns, landing pages, and more." },
              { title: "Sales Enablement", desc: "Battle cards, pitch decks, and training programs that arm your sales teams to confidently sell digital services." },
              { title: "Product Positioning", desc: "Strategic guidance on packaging, pricing, and positioning to maximize ARPU and minimize churn." },
              { title: "Partner Success Management", desc: "A dedicated team that reviews your metrics, identifies growth opportunities, and ensures you're maximizing value." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hostopia */}
      <section className="mx-auto max-w-6xl px-6 py-20" id="company">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">Why Hostopia</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          We Don&apos;t Just Give You a Platform.<br />We Help You Win.
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Hostopia is more than a technology provider. We&apos;re a strategic partner who understands the service provider business — the pressures, the opportunities, and what it takes to make SMBs loyal customers for life.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <p className="font-semibold text-zinc-900">You brand it. We build and run it.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <p className="font-semibold text-zinc-900">You set the pricing. We power the platform.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <p className="font-semibold text-zinc-900">You own the customer. We handle the complexity.</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6">
            <p className="font-semibold text-zinc-900">You grow the revenue. We ensure the reliability.</p>
          </div>
        </div>
        <p className="mt-10">
          <a href="#contact" className="inline-block rounded-md bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-200">Talk to a Partner Expert</a>
        </p>
      </section>

      {/* Contact / Ready to Grow */}
      <section className="bg-zinc-50 py-20" id="contact">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">Ready to Grow?</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Let&apos;s Build Your Digital Revenue Engine.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-600">
            Join hundreds of service providers who trust Hostopia. Talk to our team and discover what&apos;s possible. No long-term contracts required. Dedicated partner success manager. Go live in as little as 30 days.
          </p>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">Talk to a Partner Expert</h3>
              <ContactForm />
              <p className="mt-4 text-sm text-zinc-600">Or email us directly at <a href="mailto:partners@hostopia.com" className="font-medium text-teal-600 hover:underline">partners@hostopia.com</a></p>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-zinc-700">Call Us</p>
              <p className="mt-1 text-xl font-bold text-zinc-900">1-800-322-9438</p>
              <p className="mt-6 text-sm font-semibold text-zinc-700">Email Us</p>
              <p className="mt-1"><a href="mailto:learnmore@hostopia.com" className="text-teal-600 hover:underline">learnmore@hostopia.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">Frequently Asked Questions</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-6">
          {[
            { q: "What white-label digital services does Hostopia provide?", a: "Hostopia provides a comprehensive suite including website solutions, e-commerce, productivity tools, cloud services, and customer lifecycle management platforms." },
            { q: "How can telecom providers grow recurring revenue with Hostopia?", a: "We help telecom providers expand beyond connectivity with digital services bundles tailored to SMB customers, supporting cross-sell, subscription management, and lifecycle marketing." },
            { q: "Is Hostopia's platform fully white-labeled?", a: "Yes. From storefronts and onboarding to customer communications and support, we ensure a seamless branded experience that strengthens customer loyalty." },
            { q: "How quickly can service providers launch with Hostopia?", a: "Our modular platform and proven onboarding enable rapid deployment. Many partners launch new digital products in a matter of weeks." },
          ].map((faq) => (
            <div key={faq.q} className="rounded-xl border border-zinc-200 bg-white p-6">
              <h3 className="font-semibold text-zinc-900">{faq.q}</h3>
              <p className="mt-2 text-sm text-zinc-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-300">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <div>
              <div className="relative h-10 w-[180px]">
                <Image src="/logo.png" alt="Hostopia" fill className="object-contain object-left brightness-0 invert opacity-90" sizes="180px" />
              </div>
              <p className="mt-4 max-w-xs text-sm text-zinc-400">Behind the brands that power small business. Hostopia is a global wholesale white-label provider of digital services for service providers worldwide.</p>
              <p className="mt-4 text-sm"><a href="tel:1-800-322-9438" className="text-teal-400 hover:underline">1-800-322-9438</a></p>
              <p className="text-sm"><a href="mailto:learnmore@hostopia.com" className="text-teal-400 hover:underline">learnmore@hostopia.com</a></p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <h4 className="font-semibold text-white">Solutions</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li><a href="#solutions" className="hover:text-white">Business Email</a></li>
                  <li><a href="#solutions" className="hover:text-white">Website Builder</a></li>
                  <li><a href="#solutions" className="hover:text-white">Ecommerce</a></li>
                  <li><a href="#solutions" className="hover:text-white">Digital Marketing</a></li>
                  <li><a href="#solutions" className="hover:text-white">Bilingual Support</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white">Partners</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li><a href="#contact" className="hover:text-white">Become a Partner</a></li>
                  <li><a href="#contact" className="hover:text-white">Partner Portal</a></li>
                  <li><a href="#contact" className="hover:text-white">API Documentation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white">Company</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li><a href="#company" className="hover:text-white">About Hostopia</a></li>
                  <li><a href="#company" className="hover:text-white">Careers</a></li>
                  <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white">Legal</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white">CASL Compliance</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
            © 2026 Hostopia. All rights reserved. A HostPapa Company.
          </div>
        </div>
      </footer>
    </div>
  );
}
