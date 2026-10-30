---
title: Каналы
description: Каналы, подписки, статьи и права участников.
---

В модели `Channel` доступны `avatar_animation` и `cover_animation`. Поля значка сериализуются с префиксом канала: `channel_badge_id`, `channel_badge_name`, `channel_badge_type`, `channel_badge_url`.

Карточка канала:

```http
GET /channel/{c_id}
```

Список каналов:

```http
POST /channel/all/{page}
```

Фильтр: `ChannelsFilterRequest`. Например:

```json
{
  "isBlog": false,
  "isSubscribed": true,
  "sort": 1
}
```

## Подписка

```http
POST /channel/subscribe/{c_id}
POST /channel/unsubscribe/{c_id}
GET  /channel/subscription/all/{page}
GET  /channel/subscription/count
```

Mute сделан отдельно:

```http
POST /channel/mute/{c_id}
POST /channel/unmute/{c_id}
GET  /channel/mute/all/{page}
```

## Создание

```http
POST /channel/create
Content-Type: application/json
```

`ChannelCreateEditRequest` содержит название, описание и настройки канала:

```json
{
  "title": "Название",
  "description": "Описание",
  "isCommentingEnabled": true,
  "isArticleSuggestionEnabled": false
}
```

Редактирование:

```http
POST /channel/edit/{c_id}
```

Аватар и обложка загружаются отдельными multipart-запросами.

## Удаление канала

```http
POST /channel/delete/{c_id}?token={token}
```

Тело запроса не требуется. `ChannelDeleteResponse` содержит код результата: `2` — `CHANNEL_NOT_FOUND`, `3` — `CHANNEL_NOT_OWNED`.

## Права и блокировки

```http
POST /channel/{c_id}/permission/all/{page}
POST /channel/{c_id}/permission/manage
GET  /channel/{c_id}/block/all/{page}
POST /channel/{c_id}/block/manage
```
