---
title: Коллекции
description: Просмотр, создание и редактирование коллекций.
---

Получить коллекцию:

```http
GET /collection/{id}
```

Релизы внутри:

```http
GET /collection/{id}/releases/{page}
```

Списки:

```http
GET /collection/all/{page}
GET /collection/all/profile/{p_id}/{page}
GET /collection/all/release/{r_id}/{page}
```

## Своя коллекция

Создание:

```http
POST /collectionMy/create
Content-Type: application/json
```

```json
{
  "title": "Название",
  "description": "Описание",
  "isPrivate": false,
  "releases": [123, 456]
}
```

Редактирование:

```http
POST /collectionMy/edit/{collectionId}
```

Изображение загружается отдельно:

```http
POST /collectionMy/editImage/{collectionId}
Content-Type: multipart/form-data
```

Добавить релиз:

```http
GET /collectionMy/release/add/{collectionId}?release_id=123
```

## Избранные коллекции

```http
GET /collectionFavorite/add/{id}
GET /collectionFavorite/delete/{id}
GET /collectionFavorite/all/{page}
```
