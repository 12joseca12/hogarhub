import { createMockHomeFeedState } from '@/mocks/homeFeedMock';

import { homeFeedReducer } from './homeFeedReducer';

describe('homeFeedReducer', () => {
  it('moves a completed pending task into approvals with pending tokens', () => {
    const initial = createMockHomeFeedState();
    const taskId = initial.pendingTasks[0]?.id;
    expect(taskId).toBeTruthy();
    const next = homeFeedReducer(initial, { type: 'COMPLETE_PENDING_TASK', taskId: taskId! });
    expect(next.pendingTasks.find((t) => t.id === taskId)).toBeUndefined();
    expect(next.approvalRequests.some((a) => a.taskTitle === initial.pendingTasks[0]?.title)).toBe(
      true
    );
  });

  it('removes an approval after approve', () => {
    const initial = createMockHomeFeedState();
    const withApproval = homeFeedReducer(initial, {
      type: 'COMPLETE_PENDING_TASK',
      taskId: initial.pendingTasks[0]!.id,
    });
    const id = withApproval.approvalRequests[0]!.id;
    const next = homeFeedReducer(withApproval, { type: 'APPROVE_REQUEST', id });
    expect(next.approvalRequests.find((a) => a.id === id)).toBeUndefined();
  });

  it('increments shopping quantity', () => {
    const initial = createMockHomeFeedState();
    const id = initial.shoppingItems[0]!.id;
    const next = homeFeedReducer(initial, { type: 'INCREMENT_SHOPPING', id });
    expect(next.shoppingItems.find((s) => s.id === id)?.quantity).toBe(
      initial.shoppingItems.find((s) => s.id === id)!.quantity + 1
    );
  });
});
