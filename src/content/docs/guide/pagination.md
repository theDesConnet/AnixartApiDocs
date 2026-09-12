---
title: Пагинация
description: Страницы и pageable-ответы.
---

Пагинация начинается с `0`.

```text
page = 0  первая страница
page = 1  вторая
page = 2  третья
```

Чаще всего `page` находится прямо в path:

```http
GET /release/comment/all/{releaseId}/{page}
```

## Ответ

Базовая pageable-схема содержит:

| Поле | Что там |
| --- | --- |
| `content` | элементы страницы |
| `currentPage` | текущая страница |
| `totalCount` | всего элементов |
| `totalPageCount` | всего страниц |

Reference использует конкретные схемы вроде `PageOfRelease` и `PageOfProfile`, поэтому тип `content` известен заранее.
