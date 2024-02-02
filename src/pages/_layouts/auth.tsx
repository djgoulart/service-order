import { ListChecks } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 antialiased md:grid-cols-2">
      <div className="hidden h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground md:flex">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <ListChecks className="h-5 w-5" />
          <span className="font-semibold">Central de Serviços</span>
        </div>
        <footer className="text-sm">
          Central de Serviços &copy; - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
