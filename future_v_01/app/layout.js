// works only on NextJS 13 
import { Fira_Code, Inter, Inconsolata } from '@next/font/google'


// 👇 Attach font to global JSX node  
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
  })

const inconsolata = Inconsolata({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inconsolata',
})

const fira_code = Fira_Code({
    subsets: ['latin-ext'],
    display:'swap', 
    variable: '--font-fira-code',
})

export default function RootLayout({ children }) {
    return (
      // 👇 Attach font to global JSX node
      <html lang="en" className={`${fira_code.variable} ${inconsolata.variable} ${inter.variable}`}>
        <body>{children}</body>
      </html>
    )
  }