import './styles.css'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <body>
      <div className='center'>
        <div className='topbar'>
          <Navbar />
        </div>
      </div>
      <div className='top1'>
        <h1>Why us?</h1>
      </div>
    </body>
  )
}
