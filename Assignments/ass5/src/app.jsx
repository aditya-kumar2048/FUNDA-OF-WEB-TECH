// src/App.jsx
import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import './index.css';

export default function App() {
  const [url, setUrl] = useState('https://api.escuelajs.co/api/v1/products');
  const { data, loading, error, refetch } = useFetch(url);

  return (
    <div className="app-root">
      <header className="header">
        <h1>useFetch Hook — Demo</h1>
        <p className="subtitle">Fetching products from a public dummy API</p>
      </header>

      <section className="controls">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input"
          placeholder="Enter API endpoint URL"
        />
        <div>
          <button className="btn" onClick={() => refetch()} disabled={loading}>
            Refresh
          </button>
        </div>
      </section>

      <main>
        {loading && (
          <div className="center">
            <div className="spinner" aria-hidden="true"></div>
            <div>Loading...</div>
          </div>
        )}

        {error && <div className="error">Error: {error.message || String(error)}</div>}

        {!loading && !error && Array.isArray(data) && (
          <div className="grid">
            {data.slice(0, 12).map((p) => (
              <article key={p.id} className="card">
                <img src={p.images?.[0]} alt={p.title} className="thumb" />
                <h3 className="title">{p.title}</h3>
                <p className="price">₹ {p.price}</p>
              </article>
            ))}
          </div>
        )}

        {!loading && !error && data && !Array.isArray(data) && (
          <pre className="pre">{JSON.stringify(data, null, 2)}</pre>
        )}
      </main>

      <footer className="footer">
        <small>Hook: useFetch • Demo built for assignment</small>
      </footer>
    </div>
  );
}
