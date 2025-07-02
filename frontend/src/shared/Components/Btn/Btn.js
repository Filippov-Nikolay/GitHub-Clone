import React from 'react';
import './btn.css';

export default function Btn({ btnHref = "#", btnText, onClick }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); // Отменяем переход по ссылке
      onClick(e);
    }
  };

  return (
    <a href={btnHref} className="btn" onClick={handleClick}>
      {btnText}
    </a>
  );
}