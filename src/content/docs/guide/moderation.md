---
title: Жалобы и ограничения
description: Причины жалоб, отправка report и апелляции.
---

Сначала запроси список причин жалобы.

Например для релиза:

```http
GET /report/release/reasons
```

Отправка жалобы:

```http
POST /report/release
Content-Type: application/json
```

`ReportRequest`:

```json
{
  "entityId": 123,
  "reasonId": 1,
  "message": "Дополнительный комментарий"
}
```

Такие же маршруты есть для профилей, каналов, статей, коллекций, эпизодов и комментариев:

```text
/report/profile
/report/channel
/report/article
/report/collection
/report/episode
/report/comment/article
/report/comment/collection
/report/comment/release
```

У каждого типа свой `/reasons`.

## Состояние аккаунта

```http
GET /profile/health/status
```

Ограничения:

```http
GET /profile/health/enforcement/account/all/{page}
GET /profile/health/enforcement/content/all/{page}
GET /profile/health/enforcement/{id}
```

Апелляция:

```http
POST /profile/health/enforcement/{id}/appeal
```

```json
{
  "message": "Текст апелляции"
}
```
