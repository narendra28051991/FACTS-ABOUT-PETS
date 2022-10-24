import { useMode } from "../hooks/useMode"

import modeIcon from '../assets/icons/mode-icon.svg'

// styles
import './ModeSelector.css'

export default function ModeSelector() {
  const { changeMode, mode } = useMode()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="mode-selector">
      <div className="mode-toggle">
        <img 
          onClick={toggleMode}
          src={modeIcon}
          style={{ filter: mode === 'light' ? 'invert(100%)' : 'invert(20%)' }}
          alt="dark/light toggle icon"
        />
      </div>
    </div>
  )
}