import { NavBar } from '@/components/NavBar';
import { Toaster } from 'sonner';

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <header>
        <h1>Expenses App</h1>
      </header>
      <NavBar />
      <main>
        { children }
        <Toaster />
      </main>
    </>
  )
}