
export default function Sites(){
  const sites = [
    {id:'BA-1042', name:'Hansdiha Main', level:'HUB_L1', hub:true, direct:3, total:11},
    {id:'BA-1043', name:'Saraiyahat', level:'HUB_L2', hub:true, direct:2, total:4},
    {id:'BA-1044', name:'Nonihat', level:'SPUR', hub:false, direct:0, total:0},
  ]
  return <div style={{padding:20}}><h2>Sites Master - 487 sites</h2>
  <table style={{width:'100%', marginTop:12, borderCollapse:'collapse'}}><thead><tr style={{background:'#f3f4f6'}}><th style={{textAlign:'left', padding:8}}>Site ID</th><th>Name</th><th>Level</th><th>Is Hub</th><th>Direct/Total</th></tr></thead>
  <tbody>{sites.map(s=><tr key={s.id} style={{borderTop:'1px solid #eee'}}><td style={{padding:8}}>{s.id}</td><td>{s.name}</td><td>{s.level}</td><td>{s.hub?'Yes':'No'}</td><td>{s.direct}/{s.total}</td></tr>)}</tbody></table></div>
}
