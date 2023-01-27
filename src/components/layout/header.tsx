import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import GroupIcon from '@mui/icons-material/Group'
import { drawerWidth } from '.'
import { Stack } from '@mui/material'
interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ open }) => ({
  width: 'calc(100% - 89px)',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
  }),
}))
interface Props {
  open: boolean
}
const Header = ({ open }: Props) => {
  return (
    <AppBar position='fixed' open={open} sx={{ boxShadow: 'none', height: '92px' }}>
      <Toolbar sx={{ justifyContent: 'space-between', height: '100%' }}>
        <IconButton sx={{ mr: 'auto' }}>
          <SearchIcon />
        </IconButton>
        <Stack direction='row' spacing='12px'>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <IconButton>
            <GroupIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
