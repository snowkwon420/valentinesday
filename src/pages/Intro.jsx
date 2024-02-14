import React, { useState, useEffect } from 'react';
import './Heart.css';
import Main from './Main';

export default function Intro() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);
  return loading ? (
    <section id='introSection'>
      <div id='heart'></div>
    </section>
  ) : (
    <Main />
  );
}
