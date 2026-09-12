---
title: Списки профиля
description: Добавление релиза в список, чтение списка и удаление.
---

Списки профиля используют числовой `status`. Один и тот же статус передаётся при добавлении, чтении и удалении релиза.

## Добавить релиз

[Открыть `GET /profile/list/add/{status}/{r_id}` в API Reference](/api/#tag/library/ProfileList_add)

```http
GET /profile/list/add/{status}/{r_id}?token=...
```

Ответ: `ProfileListResponse`.

## Получить свой список

[Открыть `GET /profile/list/all/{status}/{page}` в API Reference](/api/#tag/library/ProfileList_profileList)

```http
GET /profile/list/all/{status}/0
```

Поддерживаются `sort` и `filter_announce`. Ответ: `PageOfRelease`.

## Получить список другого профиля

[Открыть `GET /profile/list/all/{p_id}/{status}/{page}` в API Reference](/api/#tag/library/ProfileList_profileListByProfile)

```http
GET /profile/list/all/{p_id}/{status}/{page}
```

## Удалить релиз

[Открыть `GET /profile/list/delete/{status}/{r_id}` в API Reference](/api/#tag/library/ProfileList_delete)

```http
GET /profile/list/delete/{status}/{r_id}
```

Передавай тот же `status`, в котором находится релиз.

## Избранное

Избранное использует отдельные методы:

- [`GET /favorite/add/{r_id}`](/api/#tag/library/Favorite_add)
- [`GET /favorite/all/{page}`](/api/#tag/library/Favorite_favorites)
- [`GET /favorite/delete/{r_id}`](/api/#tag/library/Favorite_delete)

`isFavorite` и `profileListStatus` показывают состояние в карточке релиза.

Связанный раздел: [Библиотека](/guide/library/).
