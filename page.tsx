export default function Home() {
  return (
    <main style={{fontFamily:'sans-serif', textAlign:'center', padding:'40px', direction:'rtl'}}>
      <h1 style={{fontSize:'42px'}}>عربيتك 🚗</h1>
      <p style={{fontSize:'20px', color:'#555'}}>بيع واشتري عربيتك في مصر والوطن العربي</p>
      <div style={{marginTop:'30px', display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap'}}>
        <a href="/add-car" style={{background:'#16a34a', color:'#fff', padding:'12px 20px', borderRadius:'10px', textDecoration:'none'}}>اعرض عربيتك مجاناً</a>
        <a href="/brands/toyota" style={{background:'#111', color:'#fff', padding:'12px 20px', borderRadius:'10px', textDecoration:'none'}}>تصفح العربيات</a>
      </div>
      <div style={{marginTop:'40px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'15px', maxWidth:'700px', margin:'40px auto'}}>
        {['تويوتا كورولا 2022 - 850,000 ج','هيونداي النترا 2021 - 720,000 ج','كيا سبورتاج 2023 - 1,250,000 ج','نيسان صني 2020 - 480,000 ج'].map((c) => (
          <div key={c} style={{border:'1px solid #ddd', padding:'20px', borderRadius:'12px'}}>{c}</div>
        ))}
      </div
    </main>
  )
}
