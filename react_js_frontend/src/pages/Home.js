import React from 'react';
import './Home.css';

// PUBLIC_INTERFACE
export default function Home() {
  /** 
   * This is the Home landing page component for the Taskflow Management app.
   * It presents a modern, light-themed UI with sidebar navigation, a top bar,
   * and a main content area highlighting key features: user authentication,
   * dashboard overview, Kanban boards, and sprint/backlog management.
   */
  return (
    <div className="home-shell">
      <aside className="home-sidebar" aria-label="Sidebar Navigation">
        <div className="brand">
          <div className="brand-logo" aria-hidden="true">TF</div>
          <div className="brand-name">Taskflow</div>
        </div>

        <nav className="nav">
          <div className="nav-section">Navigation</div>
          <button className="nav-item active" aria-current="page">
            <span className="nav-dot" aria-hidden="true" /> Home
          </button>
          <button className="nav-item">
            <span className="nav-dot" aria-hidden="true" /> Projects
          </button>
          <button className="nav-item">
            <span className="nav-dot" aria-hidden="true" /> Boards
          </button>
          <button className="nav-item">
            <span className="nav-dot" aria-hidden="true" /> Backlog
          </button>
          <button className="nav-item">
            <span className="nav-dot" aria-hidden="true" /> Sprints
          </button>

          <div className="nav-section">Shortcuts</div>
          <button className="nav-chip">+ New Project</button>
          <button className="nav-chip">+ New Issue</button>
        </nav>

        <div className="sidebar-footer">
          <div className="tip">
            <div className="tip-accent" />
            <div className="tip-body">
              <div className="tip-title">Tip</div>
              <div className="tip-text">Use filters to find tasks faster.</div>
            </div>
          </div>
        </div>
      </aside>

      <div className="home-main">
        <header className="home-topbar" aria-label="Top Bar">
          <div className="search">
            <span className="search-icon" aria-hidden="true">🔎</span>
            <input
              className="search-input"
              placeholder="Search projects, issues, or people"
              aria-label="Search"
            />
          </div>

          <div className="top-actions">
            <button className="btn ghost">Docs</button>
            <button className="btn ghost">Help</button>
            <div className="user">
              <div className="avatar" aria-hidden="true">JD</div>
              <div className="user-meta">
                <div className="user-name">Jane Doe</div>
                <div className="user-role">Project Manager</div>
              </div>
            </div>
          </div>
        </header>

        <main className="home-content">
          <section className="hero">
            <div className="hero-eyebrow">Project Management Platform</div>
            <h1 className="hero-title">Plan, track, and ship with confidence</h1>
            <p className="hero-sub">
              A lightweight, modern interface inspired by Jira to help your team
              create, manage, and track tasks, issues, and projects.
            </p>

            <div className="hero-cta">
              <button className="btn primary">Create Project</button>
              <button className="btn outline">View Boards</button>
            </div>
          </section>

          <section className="feature-grid" aria-label="Core Features">
            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">🔐</div>
              <h3 className="feature-title">User Authentication</h3>
              <p className="feature-text">
                Secure sign-in and role-based access to keep your projects protected.
              </p>
              <button className="link">Set up auth →</button>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">📊</div>
              <h3 className="feature-title">Dashboard Overview</h3>
              <p className="feature-text">
                Get a quick snapshot of project health, recent activity, and team load.
              </p>
              <button className="link">Open dashboard →</button>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">🗂️</div>
              <h3 className="feature-title">Kanban Boards</h3>
              <p className="feature-text">
                Visualize workflows and move tasks across columns with ease.
              </p>
              <button className="link">Go to boards →</button>
            </article>

            <article className="feature-card">
              <div className="feature-icon" aria-hidden="true">🏃</div>
              <h3 className="feature-title">Sprints & Backlog</h3>
              <p className="feature-text">
                Plan sprints, prioritize backlog, and track progress across iterations.
              </p>
              <button className="link">Manage sprints →</button>
            </article>
          </section>

          <section className="panel-row">
            <div className="panel">
              <div className="panel-head">
                <div className="panel-title">Recent Projects</div>
                <button className="btn ghost sm">View all</button>
              </div>
              <ul className="list">
                <li className="list-item">
                  <div className="dot" />
                  <div className="list-body">
                    <div className="list-title">Website Revamp</div>
                    <div className="list-sub">12 issues · 2 active sprints</div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="dot" />
                  <div className="list-body">
                    <div className="list-title">Mobile App v2</div>
                    <div className="list-sub">8 issues · Sprint planning</div>
                  </div>
                </li>
                <li className="list-item">
                  <div className="dot" />
                  <div className="list-body">
                    <div className="list-title">Onboarding Flow</div>
                    <div className="list-sub">5 issues · Backlog grooming</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="panel">
              <div className="panel-head">
                <div className="panel-title">Quick Actions</div>
              </div>
              <div className="quick-actions">
                <button className="qa">
                  <span className="qa-icon">➕</span>
                  <span className="qa-text">Create Issue</span>
                </button>
                <button className="qa">
                  <span className="qa-icon">👥</span>
                  <span className="qa-text">Invite Members</span>
                </button>
                <button className="qa">
                  <span className="qa-icon">⚙️</span>
                  <span className="qa-text">Project Settings</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
