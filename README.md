# Budget Tracker

A personal finance tracker to manage income and expense, visualize spending by category, and track your balance over time.
Inspired by the Vytrano design system

**Live demo:** Coming soon

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
  components/   UI components
  context/      Global state (useReducer + Context)
  hooks/        useBudget hook
  utils/        calculations, categories, localStorage helpers