---
title: Комментарии
description: Комментарии к релизам, статьям и коллекциям.
---

У комментариев три почти одинаковых набора маршрутов:

```text
/article/comment/...
/release/comment/...
/collection/comment/...
```

Меняется объект, к которому привязан комментарий.

:::caution[User-Agent]
Часть действий с комментариями проверяет `User-Agent` клиента. Добавление комментария и голосование за него могут не пройти с обычным `curl`, браузерным или стандартным HTTP `User-Agent`, даже если `token` и тело запроса верны.

Для таких запросов используй `User-Agent` мобильного клиента Anixart. Его формат может зависеть от версии приложения.
:::

## Добавление

Для статьи:

```http
POST /article/comment/add/{articleId}
```

Для релиза:

```http
POST /release/comment/add/{releaseId}
```

Тело одинаковое: `CommentAddRequest`.

```json
{
  "message": "Текст комментария",
  "spoiler": false,
  "parentCommentId": null,
  "replyToProfileId": null
}
```

`parentCommentId` нужен для ветки ответов. `replyToProfileId` указывает профиль, которому адресован ответ.

## Список и ответы

```http
GET  /release/comment/all/{releaseId}/{page}
POST /release/comment/replies/{commentId}/{page}
```

Аналогичные маршруты есть у статей и коллекций.

## Редактирование

```http
POST /release/comment/edit/{commentId}
```

```json
{
  "message": "Новый текст",
  "spoiler": true
}
```

Удаление в этом API сделано через GET:

```http
GET /release/comment/delete/{commentId}
```

## Голоса

```http
GET /release/comment/vote/{commentId}/{vote}
GET /release/comment/votes/{commentId}/{page}
```

У добавления, редактирования и удаления свои response DTO и result-коды.
