
import Link from 'next/link'
export default function Home(){
  return (
    <div style={{padding:40, maxWidth:1100, margin:'0 auto'}}>
      <h1 style={{fontSize:32, fontWeight:800}}>BFTMP - BTS Fault & Traffic Monitoring Portal v2.0</h1>
      <p style={{marginTop:10, color:'#555'}}>Circle/BA level telecom operations - Fault, Traffic, RMA, HUB Tree, BTS Near Me</p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px,1fr))', gap:16, marginTop:24}}>
        {[
          {k:'Total Sites', v:'487'},
          {k:'Open P1', v:'3', color:'#ef4444'},
          {k:'Open P2', v:'8', color:'#f97316'},
          {k:'SLA Breached', v:'2', color:'#dc2626'},
          {k:'RMA >21d', v:'5', color:'#7c3aed'},
          {k:'Hub Down (11 dependents)', v:'1', color:'#ef4444'},
          {k:'Low Traffic', v:'26', color:'#eab308'},
        ].map(c=>(
          <div key={c.k} style={{border:'1px solid #e5e7eb', borderRadius:12, padding:16, background: c.color ? `${c.color}15` : 'white'}}>
            <div style={{fontSize:12, color:'#666'}}>{c.k}</div>
            <div style={{fontSize:28, fontWeight:700, color: c.color || '#111'}}>{c.v}</div>
          </div>
        ))}
      </div>
      <div style={{marginTop:24, display:'flex', gap:12}}>
        <Link href="/dashboard/dashboard" style={{background:'#111', color:'white', padding:'10px 16px', borderRadius:8}}>Open Dashboard</Link>
        <Link href="/dashboard/sites" style={{border:'1px solid #111', padding:'10px 16px', borderRadius:8}}>Sites</Link>
      </div>
      <div style={{marginTop:32, padding:16, background:'#f9fafb', borderRadius:8}}>
        <h3 style={{fontWeight:600}}>Next Steps - No AI prompt needed</h3>
        <ol style={{marginTop:8, paddingLeft:20}}>
          <li>Create Supabase project in Mumbai (ap-south-1) free tier</li>
          <li>Add .env with Supabase URL/Keys + DATABASE_URL</li>
          <li>Run: npm install → npx prisma generate → npx prisma db push → npm run db:seed</li>
          <li>Run: npm run dev</li>
          <li>Deploy to Vercel free - import this folder</li>
        </ol>
      </div>
    </div>
  )
}
