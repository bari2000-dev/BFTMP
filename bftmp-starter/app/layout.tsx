
export const metadata = { title: 'BFTMP - BTS Fault & Traffic Monitoring Portal', description: 'Telecom NOC Portal' }
export default function RootLayout({ children }: { children: React.ReactNode }){
  return (<html lang="en"><body style={{fontFamily:'Inter, system-ui'}}>{children}</body></html>)
}
