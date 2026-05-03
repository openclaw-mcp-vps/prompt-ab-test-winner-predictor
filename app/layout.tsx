import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt A/B Test Winner Predictor — Stop Waiting for Significance',
  description: 'Predict A/B test winners early using Bayesian analysis and early stopping algorithms. Built for AI product managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f9322831-6a28-4378-a29f-1a4db2b25af5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
