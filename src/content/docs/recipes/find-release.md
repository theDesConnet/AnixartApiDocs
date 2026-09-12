---
title: Поиск и получение релиза
description: Поиск релиза по названию и получение полной карточки по ID.
---

Цепочка: поисковый запрос → `release.id` → полная карточка.

## 1. Поиск

[Открыть `POST /search/releases/{page}` в API Reference](/api/#tag/search/Search_releaseSearch)

```http
POST /search/releases/0
Content-Type: application/json
```

Минимальное тело:

```json
{
  "query": "Naruto"
}
```

Ответ: `ReleaseSearchResponse`. ID релиза берётся из `releases[].id`.

```text
ReleaseSearchResponse
└─ releases[]
   ├─ id
   ├─ titleRu
   ├─ titleOriginal
   └─ image
```

`searchBy` задаёт режим поиска.

## 2. Получение карточки

[Открыть `GET /release/{r_id}` в API Reference](/api/#tag/releases/Release_release)

```http
GET /release/12345
```

Ответ: `ReleaseResponse`. Сам релиз находится в поле `release`.

Для авторизованного запроса передай `token`:

```http
GET /release/12345?token=...
```

В ответе могут быть персональные поля вроде `isFavorite`, `profileListStatus`, `yourVote` и `lastViewEpisode`.

`release.id` затем используется в запросах эпизодов, комментариев и других данных релиза.

Связанные разделы: [Релизы](/guide/releases/), [Поиск](/guide/search/).
