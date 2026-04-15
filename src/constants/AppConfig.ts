type AppConfig = {
  /**
   * When true, the app should prefer mock data sources.
   * Use `EXPO_PUBLIC_USE_MOCKS=1` to force-enable.
   */
  useMocks: boolean;
};

function readUseMocksFlag(): boolean {
  const flag = process.env.EXPO_PUBLIC_USE_MOCKS;
  if (flag === '1' || flag === 'true') return true;
  if (flag === '0' || flag === 'false') return false;
  return __DEV__;
}

export const appConfig: AppConfig = {
  useMocks: readUseMocksFlag(),
};

