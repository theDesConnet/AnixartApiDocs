---
title: Уведомления
description: Лента уведомлений и пользовательские настройки.
---

Общий список:

```http
GET /notification/all/{page}
```

Количество новых:

```http
GET /notification/count
```

Отметить прочитанными:

```http
GET /notification/read
```

Удалить все:

```http
GET /notification/delete/all
```

## Отдельные типы

```http
GET /notification/articles/{page}
GET /notification/article/comments/{page}
GET /notification/releaseComments/{page}
GET /notification/collectionComments/{page}
GET /notification/episodes/{page}
GET /notification/friends/{page}
GET /notification/related/release/{page}
```

Для части типов есть отдельный endpoint удаления конкретного уведомления.

## Настройки

Текущие настройки:

```http
GET /profile/preference/notification/my
```

По статусам профиля:

```http
POST /profile/preference/notification/status/edit
```

По озвучкам:

```http
POST /profile/preference/notification/type/edit
```

По озвучкам конкретного релиза:

```http
POST /profile/preference/notification/release/type/edit
```

У каждого метода свой request DTO. Тело указано в Reference.
