---
title: Поиск
description: Поиск по релизам, профилям, каналам и пользовательским данным.
---

Поиск почти везде сделан через POST: строка лежит в JSON, а страница находится в path.

Пример для релизов:

```http
POST /search/releases/0
Content-Type: application/json
```

```json
{
  "query": "Naruto"
}
```

## Основные маршруты

```http
POST /search/releases/{page}
POST /search/profiles/{page}
POST /search/channels/{page}
POST /search/articles/{page}
POST /search/collections/{page}
```

Для большинства используется `SearchRequest`:

```json
{
  "query": "строка",
  "searchBy": 0
}
```

У статей и каналов есть отдельные request-схемы с дополнительными полями.

## Поиск внутри своих списков

```http
POST /search/favorites/{page}
POST /search/history/{page}
POST /search/profile/list/{status}/{page}
POST /search/favoriteCollections/{page}
```

## Коллекции профиля

```http
POST /search/profileCollections/{p_id}/{page}
```

У этого маршрута дополнительно есть query-параметр `release_id`.
