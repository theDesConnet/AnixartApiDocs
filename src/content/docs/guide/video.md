---
title: Видео
description: Видео релиза, категории и избранное.
---

Главные видео релиза:

```http
GET /video/release/{releaseId}
```

Полный список с пагинацией:

```http
GET /video/release/{releaseId}/{page}
```

Видео конкретной категории:

```http
GET /video/release/{releaseId}/category/{categoryId}/{page}
```

Категории:

```http
GET /video/release/categories
```

## Видео профиля

```http
GET /video/profile/{p_id}/{page}
```

## Избранное

```http
GET /releaseVideoFavorite/add/{r_id}
GET /releaseVideoFavorite/delete/{r_id}
GET /releaseVideoFavorite/all/{p_id}/{page}
```

## Апелляция по видео

Создание:

```http
POST /video/appeal/add
Content-Type: application/json
```

Тело: `ReleaseVideoAppealRequest`.

```json
{
  "releaseId": 123,
  "categoryId": 1,
  "title": "Название",
  "url": "https://example.com/video"
}
```

Свои апелляции:

```http
GET /video/appeal/profile/last
GET /video/appeal/profile/{page}
```

Удаление:

```http
POST /video/appeal/delete/{appealId}
```
