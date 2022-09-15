import { Box } from '@mui/material';
import HeaderNotifications from './Notifications';
//  import HeaderSearch from '../Search/index';
// import LanguageSwitcher from './LanguageSwitcher';
import Chat from './Chat';

function HeaderButtons() {
  return (
    <Box>
      {/* <HeaderSearch /> */}
      <HeaderNotifications />
       <Chat /> 
    </Box>
  );
}

export default HeaderButtons;
