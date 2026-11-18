---
title: Коллекции
description: Просмотр, создание и редактирование коллекций.
---

Модель `Collection` содержит поле `cover_animation` — URL анимации обложки.

У коллекции есть счётчики `release_count` и `watched_count`, признак наличия выбранного релиза `has_release` и список превью `releases_preview`. В каждом превью — `id` и `image`. Эти поля могут быть `null`.

## Главная страница коллекций

```http
GET /collection/hub
```

В `CollectionHubResponse` приходят свои коллекции (`my`), их количество (`my_count`), рекомендации (`recommended`) и подборка недели (`weekly`). Вместо списка может прийти `null`. Чтобы получить свои коллекции, передай `token`.

## Просмотр коллекций

Получить коллекцию:

```http
GET /collection/{id}
```

Релизы внутри:

```http
GET /collection/{id}/releases/{page}
```

Списки:

```http
GET /collection/all/{page}
GET /collection/all/profile/{p_id}/{page}
GET /collection/all/release/{r_id}/{page}
```

В списке коллекций профиля можно передать `sort` и `release_id` — сортировку и фильтр по релизу. В списке коллекций с релизом есть `sort` и фильтр по друзьям `friends`. Страницы начинаются с `0`.

Свои коллекции для выбранного релиза:

```http
GET /collectionMy/all/release/{r_id}/{page}
```

Ответ — `PageOfCollection`, коллекции лежат в `content`. Передавай `token` своего профиля.

## Своя коллекция

Создание:

```http
POST /collectionMy/create
Content-Type: application/json
```

```json
{
  "title": "Название",
  "description": "Описание",
  "isPrivate": false,
  "releases": [123, 456]
}
```

Редактирование:

```http
POST /collectionMy/edit/{collectionId}
```

Изображение загружается отдельно:

```http
POST /collectionMy/editImage/{collectionId}
Content-Type: multipart/form-data
```

Добавить релиз:

```http
GET /collectionMy/release/add/{collectionId}?release_id=123
```

Удалить релиз:

```http
GET /collectionMy/release/remove/{collectionId}?release_id=123
```

Оба метода возвращают `code` и обновлённую `collection`. При ошибке `collection` может быть `null`.

Дополнительные коды удаления: `2` — коллекция не найдена, `3` — принадлежит другому профилю, `4` — неверный релиз, `5` — релиза нет в коллекции, `6` — коллекция удалена, `7` — нельзя удалить последний релиз.

## Избранные коллекции

```http
GET /collectionFavorite/add/{id}
GET /collectionFavorite/delete/{id}
GET /collectionFavorite/all/{page}
```
