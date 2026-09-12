---
title: Друзья и блок-лист
description: Заявки в друзья, рекомендации и чёрный список.
---

Список друзей профиля:

```http
GET /profile/friend/all/{id}/{page}
```

## Заявки

Отправить:

```http
GET /profile/friend/request/send/{id}
```

Удалить заявку:

```http
GET /profile/friend/request/remove/{id}
```

Входящие:

```http
GET /profile/friend/requests/in/{page}
GET /profile/friend/requests/in/last?count=10
```

Исходящие:

```http
GET /profile/friend/requests/out/{page}
GET /profile/friend/requests/out/last?count=10
```

Рекомендации:

```http
GET /profile/friend/recommendations
```

Если рекомендация не нужна:

```http
GET /profile/friend/request/hide/{id}
```

## Чёрный список

```http
GET /profile/blocklist/all/{page}
GET /profile/blocklist/add/{id}
GET /profile/blocklist/remove/{id}
```

Для заявок и блок-листа нужен `token`.
