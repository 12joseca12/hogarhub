import { appConfig } from '@/constants/AppConfig';
import { createMockHomeFeedState } from '@/mocks/homeFeedMock';
import { HomeFeedService } from '@/services/HomeFeedService/HomeFeedService';

import type { HomeFeedState } from '@/hooks/useHomeFeed/homeFeedTypes';

export type HomeFeedDataSource = {
  getHomeFeed: () => Promise<HomeFeedState>;
};

const homeFeedMockDataSource: HomeFeedDataSource = {
  async getHomeFeed() {
    return createMockHomeFeedState();
  },
};

const homeFeedRealDataSource: HomeFeedDataSource = {
  async getHomeFeed() {
    return HomeFeedService.getHomeFeed();
  },
};

export const AppDataSource = {
  homeFeed: appConfig.useMocks ? homeFeedMockDataSource : homeFeedRealDataSource,
};

