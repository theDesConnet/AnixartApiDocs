---
title: Статьи
description: Чтение, публикация, реакции и предложения статей.
---

Получить статью:

```http
GET /article/{a_id}
```

Статьи конкретного канала:

```http
POST /channel/{c_id}/article/all/{page}
```

## Создание и редактирование

```http
POST /article/create/{c_id}
POST /article/edit/{a_id}
POST /article/delete/{a_id}
```

Создание и редактирование используют `ArticleCreateEditRequest`:

```json
{
  "payload": "...",
  "isSigned": true,
  "repostArticleId": null
}
```

`payload` содержит данные статьи в формате API. Это не обычная строка с Markdown.

## Голоса и репосты

```http
GET  /article/vote/{a_id}/{vote}
POST /article/votes/{a_id}/{page}
GET  /article/reposts/{a_id}/{page}
```

Скрыть статью из ленты:

```http
GET /article/mute/{a_id}
GET /article/unmute/{a_id}
```

## Предложения статей

Для каналов, где они включены:

```http
POST /article/suggestion/create/{b_id}
GET  /article/suggestion/{a_id}
POST /article/suggestion/edit/{a_id}
POST /article/suggestion/publish/{a_id}
POST /article/suggestion/delete/{a_id}
```

Список предложений:

```http
POST /article/suggestion/all/{page}
```

## Изображения и внешние ссылки

Эти методы работают на отдельном сервере `https://editor.anixsekai.com`. Используй токен редактора в заголовке `Authorization: Bearer <token>`. В Reference эта схема называется `EditorBearer`.

| Метод | Маршрут | Параметры | Ответ |
| --- | --- | --- | --- |
| `POST` | `/content/upload` | `multipart/form-data`, бинарное поле `file` | `ArticleUploadFileResponse` |
| `GET` | `/embed/{type}` | `type`: `youtube`, `vk` или `link`; query-параметр `url` | `ArticleEmbedResponse` |

Загрузка возвращает `file` с полями `id`, `url`, `hash`, `width` и `height`. Ответ вставки описывает HTML в `embed`, размеры, изображение и метаданные ссылки. Оба ответа используют числовое поле `success`.
