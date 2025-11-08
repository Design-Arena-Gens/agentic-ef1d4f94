import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Footer } from "@/components/Footer";

const features = [
  {
    title: "Adaptive dashboards",
    description: "Launch interactive dashboards that evolve with your KPIs using drag-and-drop layout editing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M4 5h16M4 12h9M4 19h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: "Automated insights",
    description: "Transform noisy product data into daily digests powered by explainable machine learning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 3v18M4 9h6M4 15h6M14 9h6M14 15h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    title: "Team intelligence",
    description: "Bring product, marketing, and ops together with collaborative notebooks for faster decisions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 7a5 5 0 110 10M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
];

const testimonials = [
  {
    quote: "Agentic Insights replaced three siloed tools and helped us uncover a 17% retention lift in under two weeks.",
    name: "Priya Desai",
    title: "VP Product, NovaStack"
  },
  {
    quote: "Our exec team syncs on the Monday digest. It's the first dashboard that actually explains why metrics move.",
    name: "Alan Chen",
    title: "COO, Harbor AI"
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 -top-24 h-64 bg-gradient-to-b from-primary-100/60 to-transparent blur-3xl" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-20 text-center sm:px-6 lg:flex-row lg:items-start lg:text-left">
            <div className="flex-1">
              <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-600">
                Product Intelligence
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Turn product data into the decisions your team needs tomorrow.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-7 text-slate-600">
                Agentic Insights harmonizes product analytics, customer feedback, and revenue data. The result? Actionable
                recommendations that show what to do next, not just what happened.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#waitlist"
                  className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-500"
                >
                  Join the waitlist
                </Link>
                <Link
                  href="#demo"
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary-200 hover:text-primary-600"
                >
                  Watch demo
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-6 text-left sm:grid-cols-4">
                <div>
                  <p className="text-3xl font-semibold text-slate-900">12m+</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">Events synced daily</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-slate-900">98%</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">Customer satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-slate-900">5x</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">Faster insight cycles</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-slate-900">45</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">Supported integrations</p>
                </div>
              </div>
            </div>
            <div className="relative mt-10 flex-1 lg:mt-0">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">Weekly Growth Pulse</p>
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-600">
                    +23%
                  </span>
                </div>
                <div className="mt-6 grid gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">Top lever</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Activation funnel optimization</p>
                    <p className="mt-2 text-sm text-slate-600">
                      New onboarding flow increased trial-to-subscription conversion. Double down on guided onboarding for
                      growth-stage accounts.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">Risk alert</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Churn spike in APAC enterprise</p>
                    <p className="mt-2 text-sm text-slate-600">
                      Support response times exceeded SLA last week. Recommend deploying rapid-response pod to high-touch
                      customers.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Forecast</p>
                    <div className="mt-3 flex items-end gap-3">
                      <p className="text-3xl font-semibold text-primary-600">$1.8M</p>
                      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Quarterly ARR impact</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">
                      Generated from regression across 2.4M datapoints. Confidence interval 87%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Everything you need to answer why.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Connect product telemetry, CRM data, and qualitative feedback into a unified semantic layer. Our agentic
                inference engine surfaces the most impactful experiments and anomalies, paired with recommended owners.
              </p>
              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Universal data connectors</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">
                    Bring Segment, Snowflake, BigQuery, HubSpot, Zendesk, and more directly into the workspace with zero-maintenance pipelines.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Explainable modeling</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">
                    Every recommendation includes clear drivers, confidence intervals, and suggested experiments to validate impact.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-900">Automated governance</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">
                    Access controls, PII redaction, and audit logs ship out of the box to satisfy compliance teams.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Operational excellence, unlocked.</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  From PLG to enterprise motion, Agentic Insights keeps your decisions proactive rather than reactive.
                </p>
              </div>
              <div className="lg:col-span-2 grid gap-8">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <h3 className="text-lg font-semibold text-slate-900">Product Growth</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Map friction points across activation, engagement, and retention. Auto-generated experiments with rollout plans accelerate learning velocity.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <h3 className="text-lg font-semibold text-slate-900">Revenue Intelligence</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Detect churn signals early, prioritize upsell opportunities, and coordinate GTM motions with forecasted impact.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <h3 className="text-lg font-semibold text-slate-900">Support Excellence</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Combine ticket sentiment, product usage, and health scores to equip support teams with the context they need instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stories" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Loved by modern product teams.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Teams using Agentic Insights ship meaningful updates faster and rally stakeholders around what matters most.
              </p>
            </div>
            <div className="grid flex-1 gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">Pricing that scales with your ambition.</h2>
                <p className="mt-4 text-base leading-7 text-slate-200">
                  Start with a collaborative workspace and unlock deeper automation as your team grows. Every plan includes
                  unlimited view-only stakeholders and SOC 2 Type II compliance.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur">
                  <h3 className="text-lg font-semibold text-white">Growth</h3>
                  <p className="mt-3 text-sm text-slate-200">From $1,200/mo billed annually</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200">
                    <li>Up to 50k monthly tracked users</li>
                    <li>Experiment recommendations</li>
                    <li>Weekly executive briefing</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-primary-300 bg-primary-600 p-8 shadow-xl">
                  <h3 className="text-lg font-semibold text-white">Enterprise</h3>
                  <p className="mt-3 text-sm text-primary-100">Custom pricing</p>
                  <ul className="mt-4 space-y-2 text-sm text-primary-50">
                    <li>Unlimited workspaces & seats</li>
                    <li>Dedicated success pod</li>
                    <li>On-prem & air-gapped deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Be first to try Agentic Insights.</h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Join the private beta waitlist to receive early access, program updates, and curated research on agentic analytics.
                </p>
                <p className="mt-6 text-sm text-slate-500">We review new requests every Friday.</p>
              </div>
              <form className="grid gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                />
                <select
                  name="team-size"
                  className="rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                  defaultValue="team"
                >
                  <option value="team" disabled>
                    Team size
                  </option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
                <button
                  type="submit"
                  className="rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-500"
                >
                  Request access
                </button>
                <p className="text-xs text-slate-500">
                  By submitting, you agree to receive product updates from Agentic Insights.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
