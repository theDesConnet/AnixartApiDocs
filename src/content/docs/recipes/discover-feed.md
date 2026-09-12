---
title: Лента и рекомендации
description: Несколько независимых подборок контента из Discover и Feed.
---

Discover и Feed возвращают независимые подборки.

## Интересное

[Открыть `POST /discover/interesting` в API Reference](/api/#tag/feed/Discover_interesting)

```http
POST /discover/interesting
```

Ответ: `PageOfInteresting`.

## Сейчас смотрят

[Открыть `POST /discover/watching/{page}` в API Reference](/api/#tag/feed/Discover_watching)

```http
POST /discover/watching/0
```

Ответ: `PageOfRelease`.

## Обсуждают

[Открыть `POST /discover/discussing` в API Reference](/api/#tag/feed/Discover_discussing)

```http
POST /discover/discussing
```

Возвращает страницу релизов.

## Рекомендации

[Открыть `POST /discover/recommendations/{page}` в API Reference](/api/#tag/feed/Discover_recommendations)

```http
POST /discover/recommendations/0
```

`previous_page` можно передать вместе с текущей страницей:

```http
POST /discover/recommendations/1?previous_page=0
```

## Последние статьи

[Открыть `GET /feed/latest/all/{page}` в API Reference](/api/#tag/feed/Feed_latestArticles)

```http
GET /feed/latest/all/0
```

Ответ: `PageOfArticle`.

Обычная лента статей:

[Открыть `GET /feed/all/{page}` в API Reference](/api/#tag/feed/Feed_feed)

```http
GET /feed/all/0
```

У этого метода есть необязательные `channel_id` и `date`.

Номера страниц у разных подборок не связаны между собой. Для персонализированных данных передавай `token`, если он есть.

Связанный раздел: [Лента и рекомендации](/guide/feed/).
