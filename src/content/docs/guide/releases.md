---
title: Релизы
description: Карточка релиза, фильтр, оценки и расписание.
---

Карточка релиза:

```http
GET /release/{r_id}
```

`r_id`: ID релиза. Параметр `extended_mode` необязательный.

## Фильтр

Для выборки релизов есть отдельный POST:

```http
POST /filter/{page}
Content-Type: application/json
```

`FilterRequest` можно заполнять частично:

```json
{
  "startYear": 2020,
  "endYear": 2026,
  "genres": ["Комедия"],
  "genresMode": 1,
  "sort": 3
}
```

`genresMode`:

| Значение | Режим |
| ---: | --- |
| `0` | все выбранные жанры |
| `1` | любой из выбранных |
| `2` | исключить выбранные |

Значения `sort` перечислены в enum Reference. Например, `3` означает сортировку по популярности.

## Оценка

```http
GET /release/vote/add/{r_id}/{vote}
GET /release/vote/delete/{r_id}
```

Оценка релиза и голоса у комментариев или статей используют разные endpoint'ы.

## Связанные релизы

```http
GET /related/{relatedId}/{page}
```

Случайный релиз:

```http
GET /release/random
GET /release/random/favorite
GET /release/random/profile/list/{p_id}/{status}
```

## Расписание и площадки

```http
GET /schedule
GET /release/streaming/platform/{releaseId}
```

Схемы ответов находятся в [API Reference](/api/).
