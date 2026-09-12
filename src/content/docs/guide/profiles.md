---
title: Профили
description: Профиль, социальные ссылки, значки и роли.
---

Текущий профиль:

```http
GET /profile/info
```

Профиль по ID:

```http
GET /profile/{id}
```

В `ProfileResponse` есть `profile` и `isMyProfile`.

## Социальные ссылки

```http
GET /profile/social/{id}
```

Свои ссылки редактируются через настройки аккаунта:

```http
POST /profile/preference/social/edit
```

## Значки

```http
GET /profile/preference/badge/all/{page}
GET /profile/preference/badge/edit/{id}
GET /profile/preference/badge/remove
```

## История логина

```http
GET /profile/login/history/all/{id}/{page}
```

## Роли

```http
GET /role/all/{page}/{role_id}
```

`role_id` бери из данных API, не хардкодь неизвестные значения.
