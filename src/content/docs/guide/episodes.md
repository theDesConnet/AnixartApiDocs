---
title: Эпизоды и озвучки
description: Как пройти от релиза до конкретного эпизода.
---

У эпизодов есть три уровня: **озвучка → источник → эпизод**.

## 1. Получить озвучки

```http
GET /episode/{releaseId}
```

Ответ: `TypesResponse`.

Общий список озвучек:

```http
GET /type/all
```

## 2. Получить источники

```http
GET /episode/{releaseId}/{typeId}
```

`typeId` берётся из списка озвучек.

## 3. Получить эпизоды

```http
GET /episode/{releaseId}/{typeId}/{sourceId}
```

Есть необязательный `sort`.

Прямой запрос конкретного эпизода:

```http
GET /episode/target/{releaseId}/{sourceId}/{position}
```

`position` - номер серии.

## Просмотр

Чтобы отметить просмотр указанной серии:

```http
POST /episode/watch/{releaseId}/{sourceId}/{position}
```

Снять отметку:

```http
POST /episode/unwatch/{releaseId}/{sourceId}/{position}
```

Есть варианты без `position`, если операция относится сразу ко всему источнику.

## Закреплённая озвучка

```http
GET /type/pin/{releaseId}/{typeId}
GET /type/unpin/{releaseId}/{typeId}
```

Ещё у озвучек есть методы для скрытия виджета:

```http
GET /type/widget/hide/{typeId}
GET /type/widget/unhide/{typeId}
```

Для методов, завязанных на состояние профиля, передавай `token`.
