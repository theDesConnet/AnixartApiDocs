---
title: Лента и рекомендации
description: Подборки для главного экрана и лента статей.
---

Подборки для главного экрана можно получить одним запросом к Discover. Для ленты статей есть отдельные методы Feed.

## Главный экран

[Открыть `GET /discover/hub` в API Reference](/api/#tag/feed/Discover_hub)

```http
GET /discover/hub?recommendations_previous_page=-1&collections_previous_page=-1
```

В ответе `DiscoverHubResponse` приходят подборки:

| Поле | Содержимое |
| --- | --- |
| `interesting` | Блоки «Интересное» |
| `watching` | Релизы, которые сейчас смотрят |
| `discussing` | Обсуждаемые релизы |
| `comments` | Комментарии к релизам |
| `recommendations` | Рекомендованные релизы |
| `collections` | Коллекции |

Каждая подборка — массив или `null`.

## Следующая страница

В первом запросе оба параметра равны `-1`. Для следующего запроса возьми номера страниц из ответа:

| Поле ответа | Параметр следующего запроса |
| --- | --- |
| `recommendations_page` | `recommendations_previous_page` |
| `collections_page` | `collections_previous_page` |

У рекомендаций и коллекций своя пагинация. Количество страниц коллекций приходит в `collections_page_count`.

## Сейчас смотрят

[Открыть `POST /discover/watching/{page}` в API Reference](/api/#tag/feed/Discover_watching)

```http
POST /discover/watching/0
```

Ответ: `PageOfRelease`.

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

Для персональных подборок нужен `token`. Методы `POST /discover/interesting`, `POST /discover/comments` и `POST /discover/discussing` устарели — вместо них используй `GET /discover/hub`.

Связанный раздел: [Лента и рекомендации](/guide/feed/).
