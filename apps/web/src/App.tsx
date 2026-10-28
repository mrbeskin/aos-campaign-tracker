const ledgerSections = [
  {
    accent: "charcoal",
    eyebrow: "Order of Battle",
    title: "Armies",
    copy: "Create and maintain Path to Glory rosters for every force in the group.",
    status: "Sign in to view",
  },
  {
    accent: "ochre",
    eyebrow: "Campaign Record",
    title: "Campaigns",
    copy: "Join a campaign pack, follow its battleplan map, and mark each completed path.",
    status: "Sign in to view",
  },
  {
    accent: "teal",
    eyebrow: "Annals of War",
    title: "Battles",
    copy: "Record points, results, and the events that shaped each army's story.",
    status: "Sign in to view",
  },
];

export function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#ledger" aria-label="Path Ledger home">
          <span className="brand-seal" aria-hidden="true">
            <span>PL</span>
          </span>
          <span className="brand-copy">
            <strong>Path Ledger</strong>
            <small>Age of Sigmar Path to Glory Campaign Tracker</small>
          </span>
        </a>
        <button className="sign-in-button" type="button" disabled>
          <span className="button-rune" aria-hidden="true">✦</span>
          Google sign-in
          <small>Coming in Phase 1</small>
        </button>
      </header>

      <main id="ledger">
        <div className="cloth-banner" aria-hidden="true" />
        <section className="ledger-sheet" aria-labelledby="ledger-title">
          <div className="sheet-ornament" aria-hidden="true">
            <span />
            <i>✦</i>
            <span />
          </div>

          <div className="sheet-heading">
            <p>Campaign access</p>
            <h1 id="ledger-title">Path Ledger</h1>
            <div className="title-rule" aria-hidden="true">
              <span>◆</span>
            </div>
            <p className="sheet-subtitle">
              Age of Sigmar Path to Glory Campaign Tracker
            </p>
          </div>

          <div className="briefing-grid">
            <section className="access-panel" aria-labelledby="access-title">
              <div className="rules-band rules-band-crimson">
                <span aria-hidden="true">✦</span>
                <h2 id="access-title">Enter the Ledger</h2>
              </div>
              <div className="panel-body">
                <p className="drop-cap">
                  This ledger belongs to our gaming group. Sign in with your Google
                  account to view your armies, join a campaign, and record battle
                  results with the other players.
                </p>
                <p>
                  New accounts will only see campaigns they have been invited to join.
                </p>
                <button className="primary-action" type="button" disabled>
                  Continue with Google
                  <small>Authentication is the next build phase</small>
                </button>
              </div>
            </section>

            <aside className="campaign-docket" aria-labelledby="docket-title">
              <div className="rules-band rules-band-charcoal">
                <span aria-hidden="true">◇</span>
                <h2 id="docket-title">Campaign Docket</h2>
              </div>
              <div className="docket-body">
                <p className="docket-label">Campaign pack prepared</p>
                <h3>Blighted Wilds</h3>
                <dl>
                  <div>
                    <dt>Battleplans</dt>
                    <dd>12</dd>
                  </div>
                  <div>
                    <dt>Mapped routes</dt>
                    <dd>19</dd>
                  </div>
                  <div>
                    <dt>Players</dt>
                    <dd>2+</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>Awaiting muster</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>

          <section className="ledger-index" aria-labelledby="index-title">
            <header>
              <p>Contents of the ledger</p>
              <h2 id="index-title">Campaign Records</h2>
            </header>
            <div className="record-grid">
              {ledgerSections.map((section) => (
                <article key={section.title}>
                  <div className={`rules-band rules-band-${section.accent}`}>
                    <span aria-hidden="true">◆</span>
                    <p>{section.eyebrow}</p>
                  </div>
                  <div className="record-body">
                    <h3>{section.title}</h3>
                    <p>{section.copy}</p>
                    <span className="record-status">{section.status}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="sheet-ornament sheet-ornament-bottom" aria-hidden="true">
            <span />
            <i>✦</i>
            <span />
          </div>
        </section>
      </main>

      <footer>
        <p>Friends' campaign ledger</p>
        <span>Authentication and army rosters are next</span>
      </footer>
    </div>
  );
}
