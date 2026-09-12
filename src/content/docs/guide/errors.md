---
title: Ошибки и ответы
description: HTTP status и поле code.
---

HTTP status и `code` в JSON не одно и то же.

```json
{
  "code": 0
}
```

`0` означает успешный результат API. Остальные значения определяются `CommonResult` и enum'ом конкретного ответа.

## Что проверять

При обработке ответа:

1. проверить HTTP-ответ;
2. проверить `code`, если он есть в response schema.

Например, `SignInResponse` может вернуть `InvalidLogin` или `InvalidPassword`, а у добавления комментария свой набор ошибок.

Не своди все значения `code > 1` к одной ошибке. У разных response DTO они означают разное.

Общие коды перечислены в [Кодах результатов](/guide/result-codes/).
