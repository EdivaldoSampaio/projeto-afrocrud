import './styles/global.scss';
import './styles/app.scss';

import { Shape } from './components/Shape';

export function App() {
  return (
    <>
      <header>
        <h1>afro<span>crud</span></h1>
      </header>

      <Shape />
    </>
  )
}