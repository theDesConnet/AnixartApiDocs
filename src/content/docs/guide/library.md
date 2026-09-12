---
title: Библиотека
description: Избранное, история, списки профиля и оценки.
---

## Избранное

```http
GET /favorite/all/{page}
GET /favorite/add/{r_id}
GET /favorite/delete/{r_id}
```

У списка есть необязательные `sort` и `filter_announce`.

## История

```http
GET /history/{page}
GET /history/add/{r_id}/{s_id}/{position}
GET /history/delete/{r_id}
```

В `history/add` параметр `position` содержит номер серии.

## Списки профиля

```http
GET /profile/list/all/{status}/{page}
GET /profile/list/add/{status}/{r_id}
GET /profile/list/delete/{status}/{r_id}
```

Чужой публичный список:

```http
GET /profile/list/all/{p_id}/{status}/{page}
```

`status` содержит числовой статус списка. Значения смотри в enum или константах клиента.

## Оценённые и неоценённые

```http
GET /profile/vote/release/voted/{p_id}/{page}
GET /profile/vote/release/unvoted/{page}
GET /profile/vote/release/unvoted/last
```

Сама установка оценки находится в разделе [Релизы](/guide/releases/).
