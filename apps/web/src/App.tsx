const campaignSteps = [
  { label: "Forge an army", state: "available" },
  { label: "Enter the wilds", state: "locked" },
  { label: "Record the battle", state: "locked" },
];

export function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Path Ledger home">
          <span className="brand-mark" aria-hidden="true">
            PL
          </span>
          <span>
            <strong>Path Ledger</strong>
            <small>Narrative campaign tracker</small>
          </span>
        </a>
        <button className="sign-in-button" type="button" disabled>
          Google sign-in coming next
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Your armies. Your battles. One living chronicle.</p>
            <h1 id="hero-title">Chart a path through the wilds.</h1>
            <p className="hero-lede">
              Build a free-form Path to Glory roster, invite a friend, and follow
              every victory, defeat, and turning point across a branching campaign.
            </p>
            <div className="hero-actions">
              <button type="button" className="primary-action" disabled>
                Create your first army
              </button>
              <a href="#foundation">View the foundation</a>
            </div>
          </div>

          <aside className="campaign-card" aria-label="Campaign route preview">
            <div className="card-heading">
              <div>
                <p>Campaign preview</p>
                <h2>Blighted Wilds</h2>
              </div>
              <span className="status-pill">Foundation</span>
            </div>
            <ol className="route-preview">
              {campaignSteps.map((step, index) => (
                <li key={step.label} className={step.state}>
                  <span className="route-number">{index + 1}</span>
                  <span>{step.label}</span>
                </li>
              ))}
            </ol>
            <div className="card-footer">
              <span>12 battleplans</span>
              <span>19 routes</span>
              <span>2 players</span>
            </div>
          </aside>
        </section>

        <section className="foundation" id="foundation" aria-labelledby="foundation-title">
          <div>
            <p className="eyebrow">Phase 0</p>
            <h2 id="foundation-title">The campaign foundation is in place.</h2>
          </div>
          <div className="feature-grid">
            <article>
              <span aria-hidden="true">01</span>
              <h3>Reusable armies</h3>
              <p>One living roster can enter many campaigns without losing its identity.</p>
            </article>
            <article>
              <span aria-hidden="true">02</span>
              <h3>Confirmed results</h3>
              <p>Both players submit the battle record before the campaign advances.</p>
            </article>
            <article>
              <span aria-hidden="true">03</span>
              <h3>Versioned paths</h3>
              <p>Campaign packs keep their own immutable graph, routes, and rules.</p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>Original campaign-tracking interface for private play between friends.</p>
        <span>Phase 0 · Foundation</span>
      </footer>
    </div>
  );
}

