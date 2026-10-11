import { useEffect, useState } from "react";

function parseCSV(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (ch === '"' && quoted && text[i + 1] === '"') {
      cell += '"';
      i++;
    } else if (ch === '"') {
      quoted = !quoted;
    } else if (ch === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((ch === "\n" || ch === "\r") && !quoted) {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += ch;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  const headers = rows.shift() || [];
  return rows.map((values) =>
    Object.fromEntries(headers.map((header, i) => [
      header.trim(),
      (values[i] || "").trim()
    ]))
  );
}

export default function GuestPostSites() {
  const [websites, setWebsites] = useState([]);
  const [search, setSearch] = useState("");
  const [niche, setNiche] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/linknest_public_guest_post_sites.csv")
      .then((response) => {
        if (!response.ok) throw new Error("CSV file not found");
        return response.text();
      })
      .then((text) => setWebsites(parseCSV(text)))
      .catch(() => setError("Website list could not be loaded. Please check the CSV file."));
  }, []);

  const niches = [
    "All",
    ...new Set(websites.map((site) => site.Niche).filter(Boolean))
  ];

  const filteredSites = websites.filter((site) => {
    const query = search.toLowerCase();
    const matchesSearch =
      (site.Website || "").toLowerCase().includes(query) ||
      (site.Niche || "").toLowerCase().includes(query);

    return matchesSearch && (niche === "All" || site.Niche === niche);
  });

  return (
    <main className="min-h-screen bg-gray-950 text-white px-5 py-16 md:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 mb-3">
          LinkNest Marketplace
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Guest Post Websites
        </h1>

        <p className="text-gray-300 max-w-2xl mb-8">
          Explore publishing websites, compare metrics and find the right
          guest post or link insertion opportunity.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search websites or niches..."
            className="w-full sm:flex-1 rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-white"
          />

          <select
            value={niche}
            onChange={(event) => setNiche(event.target.value)}
            className="rounded-md bg-gray-900 border border-gray-700 px-4 py-3 text-white"
          >
            {niches.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All niches" : item}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="text-red-400 py-6">{error}</p>}

        {!error && websites.length === 0 && (
          <p className="text-gray-300 py-6">Loading websites...</p>
        )}

        <p className="text-gray-400 mb-5">
          Showing {filteredSites.length} websites
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredSites.map((site, index) => (
            <article
              key={`${site.Website}-${index}`}
              className="rounded-xl border border-gray-800 bg-gray-900 p-6"
            >
              <h2 className="text-xl font-bold mb-2 break-words">
                {site.Website}
              </h2>

              <a
                href={site.Website}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 text-sm break-all hover:underline"
              >
                Visit website
              </a>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div>
                  <p className="text-gray-400 text-sm">Domain Rating</p>
                  <p className="text-2xl font-semibold">
                    {site.DR || "—"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Monthly Traffic</p>
                  <p className="text-2xl font-semibold">
                    {site.Traffic || "—"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Niche</p>
                  <p>{site.Niche || "General"}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Turnaround</p>
                  <p>{site["Turnaround Time"] || "Ask us"}</p>
                </div>
              </div>

              {(site["Guest Post Price"] || site["Link Insertion Price"]) && (
                <div className="border-t border-gray-800 pt-4 space-y-3">
                  {site["Guest Post Price"] && (
                    <div className="flex justify-between gap-3">
                      <span className="text-gray-300">Guest Post</span>
                      <strong>{site["Guest Post Price"]}</strong>
                    </div>
                  )}
                  {site["Link Insertion Price"] && (
                    <div className="flex justify-between gap-3">
                      <span className="text-gray-300">Link Insertion</span>
                      <strong>{site["Link Insertion Price"]}</strong>
                    </div>
                  )}
                </div>
              )}

              <a
                href="/contact"
                className="mt-6 w-full bg-emerald-700 hover:bg-emerald-600 rounded-md px-4 py-3 font-semibold flex justify-center transition-colors"
              >
                Ask About This Website
              </a>
            </article>
          ))}
        </div>

        {!error && websites.length > 0 && filteredSites.length === 0 && (
          <p className="text-gray-300 py-10">
            No websites found. Try another search.
          </p>
        )}
      </div>
    </main>
  );
}
