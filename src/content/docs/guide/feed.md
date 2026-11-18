---
title: Лента и рекомендации
description: Лента, последние статьи и блоки Discover.
---

Модель блока рекомендаций `Interesting` содержит поле `image_animation` — URL анимации изображения.

Обычная лента:

```http
GET /feed/all/{page}
```

Есть два необязательных фильтра:

```text
channel_id
date
```

Последняя статья:

```http
GET /feed/latest
```

Последние статьи постранично:

```http
GET /feed/latest/all/{page}
```

## Discover

Подборки для главного экрана:

```http
GET /discover/hub?recommendations_previous_page=-1&collections_previous_page=-1
```

В `DiscoverHubResponse` приходят подборки `interesting`, `watching`, `discussing`, `comments`, `recommendations` и `collections`. В каждом поле — массив или `null`.

В первом запросе передай `-1` в обоих параметрах. Затем передавай `recommendations_page` и `collections_page` из предыдущего ответа. У рекомендаций и коллекций свои номера страниц; количество страниц коллекций находится в `collections_page_count`. Для персональных подборок передай `token`.

Отдельные постраничные подборки:

```http
POST /discover/watching/{page}
POST /discover/recommendations/{page}
```

У рекомендаций есть необязательный `previous_page`.

Состав этих подборок задаёт сервер.

`POST /discover/interesting`, `POST /discover/comments` и `POST /discover/discussing` устарели. Эти подборки теперь доступны через `GET /discover/hub`.
