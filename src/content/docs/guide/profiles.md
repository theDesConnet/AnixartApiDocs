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
GET /profile/{id}/badge/list
GET /profile/{id}/badge/list/{categoryId}/{page}
GET /profile/preference/badge/edit/{id}
GET /profile/preference/badge/remove
```

Список разделов возвращает `profile`, `recent`, `sections`, `showcased` и `total_count`. Параметр `recent` передаётся строкой; его формат в Retrofit не уточнён. Для страницы категории используются `categoryId` и `page` (с `0`). Выбор значка возвращает `ProfileBadgeResponse` с полем `badge`.

`GET /profile/preference/badge/all/{page}` отсутствует в клиенте 10.5 и отмечен в Reference как устаревший. Доступность старого маршрута на сервере не проверялась.

## Витрина значков

```http
POST /profile/preference/badge/showcase/pin/{id}
POST /profile/preference/badge/showcase/unpin/{id}
POST /profile/preference/badge/showcase/reorder
```

Для изменения порядка передай JSON `{"ids": [123, 456]}`. Ответ `ProfileBadgeShowcaseResponse` содержит код результата: `2` — `INVALID_BADGE`, `3` — `LIMIT_REACHED`.

`Profile` и `Release` содержат `badge_count` и `badges_preview`. Модель `Badge` включает категорию, редкость, описание, условия получения, изображения и признаки владения, выбора и размещения на витрине.

## Достижения

```http
GET /achievement/preview/{code}
GET /achievement/get/{code}?badge_id={badge_id}&token={token}
```

Предпросмотр не принимает токен и возвращает `achievement` с названием и значком. Получение достижения принимает код, идентификатор значка и токен; ответ `AchievementResponse` содержит `code`.

Дополнительные коды: `2` — `ALREADY_GRANTED`, `3` — `ACHIEVEMENT_NOT_FOUND`, `4` — `PROFILE_NOT_FOUND`, `5` — `GRANT_LIMIT_REACHED`, `6` — `BADGE_CHANGED`.

## История логина

```http
GET /profile/login/history/all/{id}/{page}
```

## Роли

```http
GET /role/all/{page}/{role_id}
```

`role_id` бери из данных API, не хардкодь неизвестные значения.
