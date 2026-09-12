---
title: Настройки аккаунта
description: Профиль, приватность, почта, пароль и привязки.
---

Текущие настройки профиля:

```http
GET /profile/preference/my
```

## Аватар и статус

```http
POST /profile/preference/avatar/edit
GET  /profile/preference/avatar/delete
POST /profile/preference/status/edit
```

Аватар загружается как `multipart/form-data`.

Статус:

```json
{
  "status": "текст"
}
```

## Социальные ссылки

```http
GET  /profile/preference/social
POST /profile/preference/social/edit
```

Тело может содержать `vkPage`, `tgPage`, `discordPage`, `instPage`, `ttPage`.

## Приватность

```http
POST /profile/preference/privacy/stats/edit
POST /profile/preference/privacy/social/edit
POST /profile/preference/privacy/counts/edit
POST /profile/preference/privacy/friendRequests/edit
```

## Логин, пароль, почта

```http
POST /profile/preference/login/info
POST /profile/preference/login/change
POST /profile/preference/password/change

POST /profile/preference/email/change
POST /profile/preference/email/resend
GET  /profile/preference/email/verify
```

Смена почты проходит в несколько шагов и использует `code` и `hash`.

## Внешние аккаунты

Для Google, Telegram, VK и Yandex есть bind/unbind. Поля запроса указаны в Reference.

## Удаление аккаунта

```http
POST /profile/deletion/request
GET  /profile/deletion/status
POST /profile/deletion/cancel
```
