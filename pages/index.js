import { useEffect, useState } from "react"

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/sites").then(res => res.json()).then(res => setData(res));
  }, [])

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map(item => {
        const [name, meta] = item;
        const firstChar = meta.domain.substring(0, 1);
        return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", background: "white", width: 100, height: 100, margin: 10 }} key={name}>
          <img style={{ width: 32, height: 32 }} src={`https://2fa.directory/img/${firstChar}/${meta.domain}.svg`} />
          <p style={{ fontWeight: "bold" }}>{name}</p>

        </div>
      })}
    </div>

  )
}
