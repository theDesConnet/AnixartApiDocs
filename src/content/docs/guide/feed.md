---
title: Лента и рекомендации
description: Лента, последние статьи и блоки Discover.
---

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

Discover:

```http
POST /discover/interesting
POST /discover/comments
POST /discover/discussing
POST /discover/watching/{page}
POST /discover/recommendations/{page}
```

У рекомендаций есть необязательный `previous_page`.

Состав этих подборок задаёт сервер.
