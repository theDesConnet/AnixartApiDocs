---
title: Быстрый старт
description: Первый запрос, token и форматы тела.
---

Base URL:

```text
https://api-s.anixsekai.com/
```

Полный список маршрутов находится в [API Reference](/api/).

## Простой запрос

Например, получить релиз:

```http
GET /release/{r_id}
```

`r_id`: ID релиза. Некоторые публичные методы работают без `token`, но с ним ответ может содержать персональные поля.

## Авторизованные методы

Токен передаётся в query:

```text
?token=YOUR_TOKEN
```

Получение токена описано в разделе [Авторизация](/guide/authentication/).

## Тело запроса

Основной формат тела: JSON. Авторизация и часть других методов используют `application/x-www-form-urlencoded`.

`Content-Type` указан в Reference у каждого запроса.

## Схемы

У каждой операции в Reference указаны:

- path/query-параметры;
- request body;
- response schema;
- enum'ы и result-коды.
