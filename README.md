# Budget Tracker

A personal finance tracker to manage income and expense, visualize spending by category, and track your balance over time.
Inspired by the Vytrano design system

**Live demo:** Coming soon

![Budget Tracker Screenshot](./public/ss%20desktop.png)
![Budget Tracker Screenshot](./public/ss%20mobile.png)

## Tech Stack
React · Vite · Recharts · CSS Modules · localStorage · Vercel

## Features
- Add, edit, and delete transactions
- Income and expense tracking
- Spending breakdown donut chart
- Transactions grouped by date
- Persistent data via localStorage
- Responsive - mobile app layout + desktop dashboard

## Getting started
1. Clone the repo: `git clone https://github.com/yourname/budget-tracker`
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`

## Project Structure
src/
components/
Dashboard/        Balance summary + spending chart
Transactions/     Transaction list grouped by date
TransactionForm/  Add and edit form
Layout/           Responsive shell — mobile nav + desktop sidebar
UI/               Button, CategoryIcon primitives
context/            BudgetContext — useReducer + localStorage sync
hooks/              useBudget — clean public API for state
utils/              calculations, categories, localStorage helpers

## What I learned

- `useReducer` + Context for app-wide state management
- Separation of concerns — services, hooks, components each with one job
- Professional Git workflow — feature branches, conventional commits, PRs
- Mobile-first responsive CSS — same codebase, two completely different layouts
- Translating a Figma design system directly into CSS variables