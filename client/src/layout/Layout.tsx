import { SlidersHorizontal } from 'lucide-react';

export default function Layout() {
  return (
    <>
      <header>
        <h1>Expenses App</h1>
      </header>
      <nav>
        <ul>
          <li><button>Metrics</button></li>
          <li><button>Expenses</button></li>
          <li><button>Watchlist</button></li>
          <li><button>Settings</button></li>
        </ul>
      </nav>
      <button><SlidersHorizontal /></button>
    </>
  )
}