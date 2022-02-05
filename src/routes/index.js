// routes
import MainRoutes from './MainRoutes'
import config from 'config'
import { useRoutes } from 'react-router'

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes () {
  return useRoutes([MainRoutes], config.basename)
}
