import type { HomeFeedState } from '@/hooks/useHomeFeed/homeFeedTypes';
import type { IsoDateString, IsoDateTimeString, RewardId, ShoppingItemId, TaskId } from '@/types/Types';

function asTaskId(id: string) {
  return id as unknown as TaskId;
}

function asRewardId(id: string) {
  return id as unknown as RewardId;
}

function asShoppingItemId(id: string) {
  return id as unknown as ShoppingItemId;
}

function asIsoDateString(value: string) {
  return value as unknown as IsoDateString;
}

function asIsoDateTimeString(value: string) {
  return value as unknown as IsoDateTimeString;
}

export function createMockHomeFeedState(): HomeFeedState {
  const currentUser = { id: 'user-1', displayName: 'Alex Martín' };

  return {
    currentUser,
    pendingTasks: [
      {
        id: asTaskId('t1'),
        title: 'Regar el jardín',
        dueDate: asIsoDateString('2026-04-18'),
        priority: 'high',
        tokenReward: 12,
        status: 'pending',
        estimatedMinutes: 25,
        assigneeDisplayName: currentUser.displayName,
      },
      {
        id: asTaskId('t2'),
        title: 'Vaciar la secadora',
        dueDate: asIsoDateString('2026-04-19'),
        priority: 'medium',
        tokenReward: 8,
        status: 'in_progress',
        estimatedMinutes: 15,
        assigneeDisplayName: currentUser.displayName,
      },
      {
        id: asTaskId('t3'),
        title: 'Reponer leche de avena',
        dueDate: asIsoDateString('2026-04-20'),
        priority: 'low',
        tokenReward: 4,
        status: 'pending',
        estimatedMinutes: 10,
        assigneeDisplayName: currentUser.displayName,
      },
      {
        id: asTaskId('t4'),
        title: 'Plan semanal de comidas',
        dueDate: asIsoDateString('2026-04-21'),
        priority: 'medium',
        tokenReward: 10,
        status: 'pending',
        estimatedMinutes: 40,
        assigneeDisplayName: currentUser.displayName,
      },
      {
        id: asTaskId('t5'),
        title: 'Revisar caducidades del frigorífico',
        dueDate: asIsoDateString('2026-04-22'),
        priority: 'low',
        tokenReward: 6,
        status: 'pending',
        estimatedMinutes: 20,
        assigneeDisplayName: currentUser.displayName,
      },
    ],
    reminders: [
      {
        id: 'r1',
        title: 'Pago suministro de luz — revisar factura',
        dueAt: asIsoDateTimeString('2026-04-17T18:00:00Z'),
      },
    ],
    approvalRequests: [],
    taskActivities: [
      {
        id: 'a1',
        kind: 'comment',
        actorName: 'María',
        taskTitle: 'Comprar leche entera y pan de molde',
        summary: 'Si puedes, marca sin lactosa. Gracias.',
      },
      {
        id: 'a2',
        kind: 'rating',
        actorName: 'Lucía',
        taskTitle: 'Sacar basura orgánica',
        summary: 'Valoración',
        ratingValue: 4,
      },
    ],
    tokenSummary: { balance: 128, weeklyDeltaPercent: 12 },
    participation: { headlinePercent: 62, trend: 'up' },
    redeemableReward: {
      id: asRewardId('rw1'),
      title: 'Cena delivery (20 €)',
      tokenCost: 40,
    },
    devices: [
      { id: 'd1', name: 'Luces salón', room: 'Salón' },
      { id: 'd2', name: 'Enchufe cocina', room: 'Cocina' },
    ],
    shoppingItems: [
      { id: asShoppingItemId('s1'), name: 'Yogur griego', quantity: 2 },
      { id: asShoppingItemId('s2'), name: 'Aguacates', quantity: 3 },
      { id: asShoppingItemId('s3'), name: 'Agua con gas', quantity: 6 },
    ],
    recipes: [
      {
        id: 'rp1',
        title: 'Salteado de verduras',
        ingredientsSummary: 'Brócoli, pimientos, salsa de soja, jengibre, ajo',
        saved: false,
      },
      {
        id: 'rp2',
        title: 'Pasta carbonara',
        ingredientsSummary: 'Huevos, pecorino, guanciale, pimienta, espaguetis',
        saved: true,
      },
    ],
    pantryItems: [
      { id: 'p1', name: 'Café en grano', quantityLabel: '15%', lowStock: true },
      { id: 'p2', name: 'Pasta ecológica', quantityLabel: '85%', lowStock: false },
      { id: 'p3', name: 'Huevos', quantityLabel: 'Lleno', lowStock: false },
    ],
    weekEvents: [
      {
        id: 'e1',
        title: 'Visita técnica caldera',
        startsAt: asIsoDateTimeString('2026-04-16T10:00:00Z'),
        isTask: false,
      },
      {
        id: 'e2',
        title: 'Recogida paquete en punto Pack',
        startsAt: asIsoDateTimeString('2026-04-17T09:00:00Z'),
        isTask: true,
      },
    ],
  };
}

