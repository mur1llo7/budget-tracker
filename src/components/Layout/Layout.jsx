// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import styles from "./Layout.module.css";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ), },
  { id: "transactions", label: "Transactions", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"/>
        <line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/>
        <circle cx="3" cy="6" r="1" fill="currentColor"/>
        <circle cx="3" cy="12" r="1" fill="currentColor"/>
        <circle cx="3" cy="18" r="1" fill="currentColor"/>
      </svg>
    ), },
  { id: "add", label: "Add", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    ), },
];

function Layout({ currentView, onNavigate, children }) {
  return (
    <div className={styles.app}>
      {/* Desktop Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Budg.io</div>
        <nav className={styles.sidebarNav}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`${styles.sidebarItem} ${currentView === item.id ? styles.active : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className={styles.main}>
        <div className={styles.desktopHeader}>
          <div>
            <p className={styles.desktopGreeting}>Good Morning</p>
            <h1 className={styles.desktopTitle}>Carlos 👋</h1>
          </div>
          <p className={styles.desktopDate}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        {children}
      </main>

      {/* Mobile bottom nav */}
      <nav className={styles.bottomNav}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`${styles.bottomNavItem} ${currentView === item.id ? styles.active : ""}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            <span className={styles.bottomNavLabel}>{item.label}</span>
          </button>
        ))}
        <button className={styles.fab} onClick={() => onNavigate("add")}>
          +
        </button>
      </nav>
    </div>
  );
}

export default Layout;
