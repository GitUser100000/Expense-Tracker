# Expense Tracker

A full-stack expense tracking application to monitor subscriptions, recurring expenses, and price changes.

## Tech Stack

### Frontend
- **React 19** + TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **React Router** - Navigation
- **Recharts** - Data visualization
- **TanStack Table** - Data tables
- **Supabase** - Authentication

### Backend
- **Express.js** + TypeScript
- **Prisma** - ORM
- **PostgreSQL** - Database
- **Supabase** - Auth token verification

## Features

- User authentication (login/register)
- Add, edit, delete expenses
- Categorize expenses (Entertainment, Subscriptions, Food, Transport, etc.)
- Track recurring expenses (daily, weekly, monthly, yearly)
- Watchlist for price tracking
- Metrics dashboard with total spending and category breakdown
- Date range filtering
- Light/dark theme toggle
- Currency settings

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Supabase project (for auth)

### Environment Variables

**Server** (`server/.env`):
```env
DATABASE_URL="postgresql://..."
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

**Client** (`client/.env`):
```env
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-key"
VITE_API_URL="http://localhost:3000"
```

### Installation

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev
```

### Running

```bash
# Terminal 1 - Start server
cd server
npx tsx src/server.ts

# Terminal 2 - Start client
cd client
npm run dev
```

- Client: http://localhost:5173
- Server: http://localhost:3000

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── api/          # API client functions
│   │   ├── auth/         # Auth context & provider
│   │   ├── components/   # React components
│   │   ├── context/      # App state management
│   │   ├── helpers/      # Utility functions
│   │   ├── hooks/        # Custom React hooks
│   │   ├── pages/        # Page components
│   │   └── routes/       # Route configuration
│   └── ...
├── server/
│   ├── prisma/
│   │   └── schema.prisma # Database schema
│   ├── src/
│   │   ├── controllers/  # Route handlers
│   │   ├── database/     # Prisma & Supabase clients
│   │   ├── middleware/   # Auth & logging middleware
│   │   └── routes/       # Express routers
│   └── ...
└── README.md
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/expenses` | Get all user expenses |
| GET | `/expenses/:id` | Get expense by ID |
| POST | `/expenses` | Create expense |
| PUT | `/expenses/:id` | Update expense |
| DELETE | `/expenses/:id` | Delete expense |
| GET | `/users` | Get user settings |
| PUT | `/users` | Update user settings |
| GET | `/watchlist` | Get watchlist items |
| POST | `/watchlist` | Create watchlist item |
| PUT | `/watchlist/:id` | Update watchlist item |
| DELETE | `/watchlist/:id` | Delete watchlist item |

