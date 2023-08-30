// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@mf-nx-react/shared';
import { Typography } from '@mui/material';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <Typography>Welcome to NSER!</Typography>
      <Button variant="contained">This is a shared button</Button>
    </div>
  );
}

export default App;
