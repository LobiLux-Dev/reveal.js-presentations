import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Presentation } from './Presentation.tsx'

import 'reveal.js/dist/reset.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/night.css'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Presentation />
	</StrictMode>
)
