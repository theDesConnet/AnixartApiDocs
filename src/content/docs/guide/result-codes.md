---
title: Коды результатов
description: CommonResult и ошибки конкретных операций.
---

`code` хранит внутренний код результата. Он не равен HTTP status.

## CommonResult

Общие значения:

| `code` | Enum | Значение |
| ---: | --- | --- |
| `0` | `Ok` | запрос обработан успешно |
| `1` | `UnexpectedError` | общая ошибка |
| `401` | `Unauthorized` | нет действующей сессии |
| `402` | `InvalidUserAgent` | клиент отклонён сервером |
| `403` | `PermBan` | постоянная блокировка |

## Коды конкретного ответа

Некоторые response DTO добавляют свой `*Result`.

Для входа это `SignInResult`:

| `code` | Enum |
| ---: | --- |
| `2` | `InvalidLogin` |
| `3` | `InvalidPassword` |

В OpenAPI поле описано как объединение:

```text
CommonResult | SignInResult
```

У каждой операции может быть свой `*Result`. Для `CommentAddResponse` это `CommentAddResult`, для создания и редактирования статьи используется `ArticleCreateEditResult`.

Все значения перечислены в схеме нужного response в [API Reference](/api/).

:::caution
`code: 403` в JSON и HTTP `403 Forbidden` относятся к разным уровням ошибки. Проверяй их отдельно.
:::
