import { Link } from 'react-router-dom';

export default function GuestPostPricing() {
  return (
    <main className="bg-white text-gray-900">
      <section className="pt-32 pb-16">
        <div className="max-w-wrap mx-auto px-6 md:px-10">
          <p className="text-sm text-orange font-medium mb-4">
            GUEST POST PRICING & SEO
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl">
            Guest Post Pricing: What Should You Expect to Pay?
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-3xl">
            Guest post prices vary depending on website quality, relevant
            traffic, niche, and the value a placement can provide. Understanding
            these factors helps you make better decisions for your SEO budget.
          </p>

          <img src="/guest-post-pricing.png" alt="Guest Post Pricing and SEO Link Building" className="w-full max-w-5xl aspect-[16/9] object-cover rounded-sm border border-gray-200 mt-12" />

          <article className="max-w-3xl mt-14 space-y-8 text-gray-700 leading-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Why Do Guest Post Prices Differ?
              </h2>
              <p>
                Not all websites offer the same value. Pricing can depend on
                domain authority metrics, organic traffic, audience relevance,
                editorial standards, and the website's reputation. A relevant
                website with genuine readers may provide more value than a
                website with impressive metrics but little real engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                What Factors Affect the Price?
              </h2>
              <p>
                Important factors include organic traffic, domain rating (DR),
                niche competitiveness, content requirements, and whether the
                publisher includes writing or editing. Some websites charge
                more because they have a strong audience or strict editorial
                standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Is a Higher Price Always Better?
              </h2>
              <p>
                No. A higher price does not automatically guarantee better SEO
                results. Review the website's topic, traffic quality, content,
                and audience before making a decision. Avoid choosing a site
                based on a single metric alone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                How to Plan Your Guest Post Budget
              </h2>
              <p>
                Set a budget based on your goals and compare relevant websites
                before ordering placements. Ask publishers about the total
                price, publishing time, content rules, and link policy. Clear
                communication helps prevent unexpected costs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Choose Value, Not Just Cost
              </h2>
              <p>
                A smart guest posting decision balances price, relevance,
                transparency, and genuine value for readers. LinkNest aims to
                help users explore guest post opportunities and make informed
                decisions for their link-building campaigns.
              </p>
            </section>

            <div className="border-l-2 border-orange pl-6 mt-12">
              <p className="font-medium text-gray-900">
                Compare website quality and relevance before choosing a guest
                post placement.
              </p>
            </div>

            <div className="pt-8">
              <Link
                to="/"
                className="inline-flex items-center border border-gray-300 px-5 py-3 text-sm font-medium hover:border-gray-900 transition-colors"
              >
                ← Back to LinkNest
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}