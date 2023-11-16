import { StatusBar } from 'expo-status-bar';
import { TabRoutes } from './src/routes/Routes';
import { Navbar } from './src/components/Navbar';

export default function App() {
  return (
    <>
      <StatusBar style="inverted" />
      <Navbar />
      <TabRoutes />
    </>
  );
}
;
