---
title: Авторизация
description: Вход и передача token.
---

Для пользовательских методов нужен `token`. После входа он лежит в `profileToken.token`.

## Вход

```http
POST /auth/signIn
Content-Type: application/x-www-form-urlencoded
```

Поля:

```text
login
password
```

Пример через `curl`:

```bash
curl -X POST 'https://api-s.anixsekai.com/auth/signIn' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'login=USERNAME' \
  --data-urlencode 'password=PASSWORD'
```

При успешном входе `SignInResponse` содержит профиль и `profileToken`.

## Токен

В следующих запросах передавай его как query-параметр:

```http
GET /profile/{id}?token=YOUR_TOKEN
```

В OpenAPI он называется `AnixartToken`. Если метод допускает запрос и с токеном, и без него, Scalar показывает авторизацию как optional.

## Ошибки входа

У `SignInResponse.code` есть общие коды и два кода самого входа:

| `code` | Значение |
| ---: | --- |
| `0` | `Ok` |
| `2` | `InvalidLogin` |
| `3` | `InvalidPassword` |

Остальные общие значения см. в [Кодах результатов](/guide/result-codes/).
