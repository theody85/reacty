import { Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import { Layout } from '@/components/common/Layout'
import { LandingPage } from '@/pages/LandingPage'
import { ComponentsJSX } from '@/pages/ComponentsJSX'
import { PropsState } from '@/pages/PropsState'
import { Hooks } from '@/pages/Hooks'
import { Events } from '@/pages/Events'
import { Conditional } from '@/pages/Conditional'
import { ListsKeys } from '@/pages/ListsKeys'
import { Lifecycle } from '@/pages/Lifecycle'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="react-concepts-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="components-jsx" element={<ComponentsJSX />} />
            <Route path="props-state" element={<PropsState />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="events" element={<Events />} />
            <Route path="conditional" element={<Conditional />} />
            <Route path="lists-keys" element={<ListsKeys />} />
            <Route path="lifecycle" element={<Lifecycle />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

export default App
