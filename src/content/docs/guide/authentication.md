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

## Вход по QR-коду

Все пять запросов используют `POST`, тело `application/x-www-form-urlencoded` и общий ответ `QrAuthResponse`.

| Маршрут | Поля формы | Токен Anixart | Ответ |
| --- | --- | --- | --- |
| `/auth/qr/create` | `device` | не передаётся | `QrAuthResponse` |
| `/auth/qr/open` | `key` | обязателен | `QrAuthResponse` |
| `/auth/qr/confirm` | `key`, `pin` | обязателен | `QrAuthResponse` |
| `/auth/qr/decline` | `key` | обязателен | `QrAuthResponse` |
| `/auth/qr/status` | `key`, `secret` | не передаётся | `QrAuthResponse` |

`create` возвращает `key`, `pin`, `secret`, `expires_in` и `poll_interval`. Для открытия, подтверждения или отклонения запроса используется уже авторизованный профиль; его `token` передаётся в query. PIN передаётся строкой.

`open` возвращает `device`, `country_code`, `attempts_left` и `expires_in`. Поле `status` ответа `status` принимает значения `0` (`Waiting`), `1` (`Scanned`) и `2` (`Confirmed`). Это отдельное поле, не код результата `code`. Общий DTO также содержит nullable-поля `profile` и `profileToken`; после подтверждения авторизации клиент получает сессию из `profileToken.token`. Проверяй `code`, `status` и наличие токена перед его использованием.

Дополнительные коды `QrAuthResult`: `2` — `Expired`, `3` — `Declined`, `4` — `TooManyAttempts`, `5` — `PinInvalid`, `6` — `TooManyRequests`.

Клиент трактует `expires_in` и `poll_interval` в секундах и использует интервал опроса не меньше двух секунд. Поля общего ответа могут быть `null` в зависимости от этапа авторизации.

## Длина кода подтверждения

Интерфейс `CodeInputResponse` описывает поля `code_length` и `code_time_left` в ответах регистрации, повторной отправки кода, восстановления и OAuth-регистрации. Оба поля nullable. Константы клиента задают длину по умолчанию `4` и максимальную длину `5`.

При запросах `/auth/signUp`, `/auth/resend`, `/auth/restore`, `/auth/restore/resend` клиент передаёт заголовок `X-Long-Code: 1`. Он также указан у вариантов **регистрации** через `/auth/google`, `/auth/telegram`, `/auth/vk`, `/auth/yandex`; варианты входа через эти маршруты его не объявляют. В Reference заголовок необязателен, чтобы сохранить оба варианта вызова.

`RestoreVerifyResponse` дополнительно содержит nullable-поле `attempts_left` — оставшееся число попыток ввода кода.
