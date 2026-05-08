// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import styles from "./Layout.module.css";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "🏠" },
  { id: "transactions", label: "Transactions", icon: "📋" },
  { id: "add", label: "Add", icon: "➕" },
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
            className={`$styles.bottomNavItem ${currentView === item.id ? styles.active : ""}`}
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
