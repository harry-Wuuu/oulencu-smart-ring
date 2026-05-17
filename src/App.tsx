import { Route, Routes } from 'react-router-dom'
import { Footer, Header } from './components/Layout'
import HomePage from './pages/HomePage'
import { PrivacyPage, SizingPage, SupportPage, TermsPage } from './pages/LegalPages'

export default function App() {
  return <><Header /><Routes><Route path="/" element={<HomePage />} /><Route path="/privacy" element={<PrivacyPage />} /><Route path="/terms" element={<TermsPage />} /><Route path="/support" element={<SupportPage />} /><Route path="/sizing" element={<SizingPage />} /></Routes><Footer /></>
}
