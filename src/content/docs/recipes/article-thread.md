---
title: Статья и комментарии
description: Создание статьи и работа с веткой комментариев.
---

## 1. Создать статью

[Открыть `POST /article/create/{c_id}` в API Reference](/api/#tag/articles/Article_create)

```http
POST /article/create/{c_id}
Content-Type: application/json
```

`c_id`: ID канала.

Тело: `ArticleCreateEditRequest`.

```json
{
  "payload": "...",
  "isSigned": true,
  "repostArticleId": null
}
```

`payload` использует формат содержимого статьи Anixart и не является Markdown.

ID созданной статьи находится в `ArticleCreateEditResponse.article.id`.

## 2. Получить статью

[Открыть `GET /article/{a_id}` в API Reference](/api/#tag/articles/Article_article)

```http
GET /article/{a_id}
```

## 3. Добавить комментарий

[Открыть `POST /article/comment/add/{articleId}` в API Reference](/api/#tag/comments/ArticleComment_add)

```http
POST /article/comment/add/{articleId}
Content-Type: application/json
```

```json
{
  "message": "Текст комментария",
  "spoiler": false,
  "parentCommentId": null,
  "replyToProfileId": null
}
```

В `ArticleCommentAddResponse.comment` приходит созданный комментарий.

:::caution
При добавлении комментария сервер может проверять `User-Agent` Anixart. Одного корректного `token` может быть недостаточно.
:::

## 4. Получить ответы

[Открыть `POST /article/comment/replies/{commentId}/{page}` в API Reference](/api/#tag/comments/ArticleComment_replies)

```http
POST /article/comment/replies/{commentId}/0
```

Для ответа на комментарий передай его ID в `parentCommentId`.

## 5. Изменить или удалить

- [`POST /article/comment/edit/{commentId}`](/api/#tag/comments/ArticleComment_edit)
- [`GET /article/comment/delete/{commentId}`](/api/#tag/comments/ArticleComment_delete)

У статьи и комментариев свои result-коды. Проверяй `code` вместе с HTTP status.

Связанные разделы: [Статьи](/guide/articles/), [Комментарии](/guide/comments/), [Коды результатов](/guide/result-codes/).
