import Drawer from '@mui/material/Drawer'
import DrawerHeader from './drawerHeader'
import { drawerWidth } from '.'
import { IconButton } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const SideBar = ({ open, setOpen }: Props) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Drawer
      sx={
        matches
          ? {
              width: open ? drawerWidth : '88px',
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: open ? drawerWidth : '88px',
                boxSizing: 'border-box',
                borderRight: '1px dashed rgba(145, 158, 171, 0.24)',
              },
            }
          : { width: '280px' }
      }
      variant={matches ? 'permanent' : 'temporary'}
      anchor='left'
      open={open}
      onClose={() => setOpen(false)}
    >
      {matches && (
        <IconButton
          onClick={() => setOpen((open) => !open)}
          sx={{
            position: 'fixed',
            left: open ? '272px' : '80px',
            top: '32px',
            width: '16px',
            height: '16px',
            p: '4px',
            borderRadius: '50%',
            border: '1px dashed rgba(145, 158, 171, 0.24)',
            fontSize: '18px',
            '& svg': {
              width: '16px',
              height: '16px',
            },
          }}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      )}
      <DrawerHeader></DrawerHeader>
    </Drawer>
  )
}

export default SideBar
