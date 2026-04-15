import { Redirect } from 'expo-router';

/**
 * Root URL `/` must map to a real route. Tab screens live under `(tabs)/` as `/home`, etc.
 */
export default function Index() {
  return <Redirect href="/home" />;
}
