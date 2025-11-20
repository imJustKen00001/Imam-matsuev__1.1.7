import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

const title = createElement(
  'h1',
  { className: 'title' },
  'you forgot a thousand things every day make sure this is one of them ©'
);

createRoot(document.getElementById('root')).render(<>{title}</>);
