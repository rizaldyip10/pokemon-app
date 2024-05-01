import Navbar from '../components/navbar-components'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='h-full'>
        <Navbar />
        <div className='pt-12'>
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout