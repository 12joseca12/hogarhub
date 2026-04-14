# HogarHub

**HogarHub** es una aplicación móvil de **gestión integral del hogar** diseñada para organizar tareas, coordinar la convivencia, gestionar la compra, controlar incidencias domésticas y centralizar acciones del hogar conectado en una sola experiencia.

La aplicación está pensada para **parejas**, **familias con adolescentes**, **pisos compartidos** y también para **personas que viven solas** y quieren una herramienta clara, moderna y útil para mantener su hogar bajo control.

---

## Qué es HogarHub

HogarHub no es solo una app de tareas del hogar.

Es un sistema pensado para ayudar a gestionar la vida diaria en casa de forma más ordenada, equilibrada y tranquila, combinando:

- organización de tareas
- reparto justo de responsabilidades
- recompensas mediante tokens y vales
- lista de la compra y despensa
- recetas sugeridas
- incidencias y mantenimiento
- calendario doméstico
- normas, votaciones y convivencia
- acceso rápido mediante widgets
- integración ligera con dispositivos inteligentes

La intención del producto es reducir fricción, mejorar la coordinación y convertir la gestión del hogar en algo más claro, medible y sostenible.

---

## Objetivo del producto

HogarHub busca resolver problemas cotidianos como:

- no saber qué tareas están pendientes
- sentir que el reparto del trabajo en casa es injusto
- olvidar productos necesarios al hacer la compra
- perder control sobre incidencias o mantenimiento del hogar
- depender de varias apps distintas para coordinar tareas, compra y convivencia
- no tener una visión general clara del estado del hogar

La aplicación está diseñada para que, al abrirla, el usuario entienda rápidamente:

- qué tiene pendiente
- qué necesita atención en casa
- qué está esperando aprobación o revisión
- qué acciones puede resolver en pocos segundos

---

## Propuesta de valor

HogarHub combina en una sola aplicación:

### 1. Gestión seria de tareas del hogar
Las tareas se gestionan con un enfoque operativo y estructurado, con:
- responsable
- tiempo estimado
- estado
- revisión
- comentarios
- historial
- recompensa en tokens

### 2. Reparto equilibrado
La carga del hogar no se mide solo por número de tareas, sino por **tiempo estimado y esfuerzo**, ayudando a visualizar de forma más justa quién asume más carga.

### 3. Sistema de tokens y vales
Los miembros del hogar pueden ganar tokens al completar tareas y usarlos para solicitar vales o recompensas configuradas por la propia casa.

### 4. Compra, despensa y recetas
La app permite gestionar:
- lista de la compra compartida
- estado de la despensa
- sugerencias de reposición
- recetas sugeridas según ingredientes faltantes

### 5. Coordinación del hogar
Incluye herramientas para:
- incidencias y mantenimiento
- calendario doméstico
- miembros y carga
- chat
- votaciones
- normas de convivencia

### 6. Hogar conectado
HogarHub contempla un enfoque de smart home práctico y no invasivo:
- controles rápidos
- favoritos
- escenas
- accesos simples desde la app y widgets

---

## Público objetivo

HogarHub está orientado principalmente a:

- **parejas** que quieren repartirse mejor la organización de casa
- **familias con adolescentes** que necesitan visibilidad, responsabilidad y seguimiento
- **pisos compartidos** que quieren coordinar tareas, compra y convivencia
- **usuarios individuales** que quieren organizar su hogar, rutinas, compra y dispositivos

---

## Principios de diseño del producto

La aplicación se está construyendo bajo estas ideas:

- **útil antes que decorativa**
- **premium pero cercana**
- **clara y calmada**
- **no infantil**
- **no excesivamente técnica**
- **rápida para acciones frecuentes**
- **consistente entre móvil y tablet**
- **adaptada tanto a hogares compartidos como a uso individual**

---

## Módulos principales

### Home
Pantalla de resumen general del hogar.

Permite ver:
- tareas pendientes
- tokens
- vales activos
- elementos por revisar o aprobar
- resumen de compra
- actividad reciente
- votaciones pendientes
- acceso rápido a dispositivos conectados si existen

### Tasks
Centro operativo de las tareas del hogar.

Incluye:
- tablero tipo kanban
- tareas pendientes
- tareas recurrentes
- detalle de tarea
- revisión y reapertura
- comentarios e historial

### Shopping
Espacio para gestionar:
- lista de la compra
- despensa
- caducidades
- reposiciones sugeridas
- recetas y faltantes

### House
Centro de coordinación compartida del hogar.

Incluye:
- incidencias y mantenimiento
- calendario
- miembros y carga
- chat
- votaciones
- normas
- dispositivos

### Profile
Área personal del usuario.

Incluye:
- perfil
- tokens
- vales
- widgets
- ajustes
- gestión de casas
- suscripción

---

## Funcionalidades previstas

### Gestión de tareas
- creación de tareas
- asignación de responsable
- estados de tarea
- tiempo estimado
- tokens base
- revisión por otro miembro
- reapertura si la tarea no está bien completada

### Tokens y recompensas
- balance de tokens
- cálculo en función de revisión
- creación de vales configurables
- solicitud y aprobación de vales
- seguimiento de canjes

### Compra y despensa
- añadir productos rápidamente
- marcar productos comprados
- mover productos a despensa
- seguimiento genérico de stock
- reposición sugerida
- ingredientes faltantes para recetas

### Coordinación y convivencia
- miembros del hogar
- carga de trabajo
- votaciones
- normas
- chat
- historial de actividad

### Incidencias y mantenimiento
- crear incidencias
- asignar responsables
- comentar
- cambiar estados
- convertir incidencias en mantenimiento recurrente

### Smart home
- dispositivos favoritos
- controles rápidos
- escenas
- acciones inmediatas desde Home o House

### Widgets
Widgets previstos para:
- mis tareas de hoy
- calendario
- lista de la compra
- resumen del hogar
- dispositivos favoritos

---

## Stack tecnológico previsto

- **Expo**
- **React Native**
- **TypeScript**
- **Expo Router**
- **Zustand**
- **React Hook Form**
- **Zod**
- **Supabase**
- **Expo Notifications**
- **@gorhom/bottom-sheet**
- **react-native-reanimated**
- **react-native-gesture-handler**
- **FlashList**
- **Jest**
- **React Native Testing Library**

---

## Arquitectura del proyecto

El proyecto sigue una arquitectura por **carpetas técnicas**, separando responsabilidades en:

- `src/components`
- `src/screens`
- `src/hooks`
- `src/services`
- `src/styles`
- `src/types`
- `src/store`
- `src/navigation`
- `src/utils`
- `src/lib`
- `src/literals`

### Convenciones importantes
- Todos los textos visibles se centralizan en:
  - `src/literals/Literals.json`
  - `src/literals/LiteralsEn.json`
- Todos los tipos compartidos se centralizan en:
  - `src/types/Types.ts`
- Los estilos se gobiernan desde:
  - `src/styles/tokens/StyleTokens.ts`

---

## Internacionalización

La aplicación está preparada para trabajar al menos en:

- español
- inglés

Todos los textos de interfaz deben leerse desde el servicio de literales y nunca estar hardcodeados en componentes o pantallas.

---

## Accesibilidad

La accesibilidad es un requisito del proyecto, no un añadido opcional.

Cada implementación debe tener en cuenta:
- labels accesibles
- tamaños de toque adecuados
- claridad de estados
- contraste razonable
- lectura correcta por tecnologías asistivas
- comportamiento correcto de bottom sheets y modales

---

## Seguridad

HogarHub se desarrolla con enfoque de seguridad desde el principio.

Principios clave:
- validación de entradas
- cuidado con auth y permisos
- no confiar en restricciones solo del cliente
- no exponer secretos
- separar lógica de acceso a datos en servicios
- pensar siempre en permisos por hogar, rol y contexto

---

## Soporte para tablet

La app debe adaptarse también a tablet.

Esto significa:
- no estirar layouts de móvil sin más
- reorganizar bloques y jerarquías
- aprovechar mejor el espacio
- mantener claridad y comodidad de interacción

---

## Testing

La estrategia de testing prioriza:

- lógica de negocio
- stores
- componentes reutilizables
- componentes críticos
- flujos de pantalla importantes cuando aporten valor

No se busca inflar tests sin sentido, sino proteger el comportamiento real del producto.

---

## Documentación interna

El proyecto incluye documentación organizada en:

- `docs/product`
- `docs/ux`
- `docs/architecture`
- `docs/decisions`

Además, la carpeta `.cursor` contiene:
- reglas del proyecto
- subagentes
- skills
- contexto para trabajo asistido con Cursor

---

## Estado del proyecto

HogarHub se encuentra en fase de construcción de base técnica, producto y arquitectura, con especial foco en:

- definición funcional
- navegación
- UX principal
- sistema de reglas de negocio
- setup técnico del repositorio
- configuración de agentes y documentación para desarrollo asistido

---

## Filosofía de desarrollo

HogarHub no busca ser una app recargada de funciones sin conexión entre sí.

La intención es construir una experiencia donde:
- cada módulo tenga una razón clara de existir
- la información importante aparezca primero
- las acciones frecuentes sean rápidas
- la convivencia se gestione mejor
- el hogar se sienta más organizado y menos caótico

---

## Nombre del proyecto

**HogarHub**

Una base central para coordinar, organizar y cuidar la vida dentro del hogar.