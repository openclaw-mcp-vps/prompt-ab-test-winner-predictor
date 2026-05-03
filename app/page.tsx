export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For AI Product Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Predict A/B Test Winners{" "}
          <span className="text-[#58a6ff]">Before Significance</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop waiting weeks for statistical significance. Upload your prompt test data and get Bayesian-powered winner predictions in seconds — so you ship better AI faster.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Predicting — $39/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: "3×", label: "Faster decisions vs. waiting for significance" },
            { stat: "Bayesian", label: "Analysis with real-time posterior updates" },
            { stat: "CSV & API", label: "Ingest data however you already work" },
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-sm text-[#8b949e]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-end gap-2 mb-1">
            <span className="text-4xl font-bold text-white">$39</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to ship better prompts faster.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited A/B tests",
              "Bayesian early-stopping predictions",
              "CSV upload + REST API access",
              "Real-time posterior probability charts",
              "Email alerts when a winner is predicted",
              "7-day free trial",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does early winner prediction work?",
              a: "We use Bayesian A/B testing to continuously update the probability that each variant is the best. Once the posterior probability crosses a configurable threshold, we flag a predicted winner — often 2–3× sooner than frequentist significance.",
            },
            {
              q: "What data do I need to upload?",
              a: "Any CSV or JSON with variant labels and outcome metrics (e.g. task success rate, user rating, latency). You can also push data in real-time via our REST API.",
            },
            {
              q: "Is this only for LLM prompt testing?",
              a: "It works for any A/B test, but it's optimized for AI product teams testing prompts, model versions, and RAG configurations where fast iteration matters most.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Prompt A/B Test Winner Predictor. All rights reserved.
      </footer>
    </main>
  )
}
