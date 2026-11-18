---
title: История и отметки просмотра
description: Отметки просмотренных эпизодов и история релизов.
---

История просмотров и `isWatched` обновляются разными методами.

## Отметить эпизоды просмотренными

[Открыть `POST /episode/watch/{releaseId}/{sourceId}/{position}` в API Reference](/api/#tag/episodes/Episode_watch_2)

```http
POST /episode/watch/{releaseId}/{sourceId}/{position}
```

Снять отметку:

[Открыть `POST /episode/unwatch/{releaseId}/{sourceId}/{position}` в API Reference](/api/#tag/episodes/Episode_unwatch_2)

```http
POST /episode/unwatch/{releaseId}/{sourceId}/{position}
```

Есть варианты без `position`:

- [`POST /episode/watch/{releaseId}/{sourceId}`](/api/#tag/episodes/Episode_watch)
- [`POST /episode/unwatch/{releaseId}/{sourceId}`](/api/#tag/episodes/Episode_unwatch)

## Добавить запись в историю

[Открыть `GET /history/add/{r_id}/{s_id}/{position}` в API Reference](/api/#tag/library/History_add)

```http
GET /history/add/{r_id}/{s_id}/{position}
```

```text
r_id      ID релиза
s_id      ID источника
position  номер серии
```

## Получить историю

Проверить, какие серии просмотрены у нескольких релизов:

```http
GET /episode/watched?release_ids=123,456&token=YOUR_TOKEN
```

В `EpisodeWatchedResponse.sources` приходят `release_id`, `source_id` и номера просмотренных серий в `positions`. Если `sources` равен `null`, списка отметок нет.

Получить историю релизов:

[Открыть `GET /history/{page}` в API Reference](/api/#tag/library/History_history)

```http
GET /history/0
```

Ответ: `PageOfRelease`.

## Удалить запись

[Открыть `GET /history/delete/{r_id}` в API Reference](/api/#tag/library/History_delete)

```http
GET /history/delete/{r_id}
```

В полной карточке релиза также есть поля `lastViewEpisode`, `lastViewEpisodeName`, `lastViewEpisodeTypeName` и `lastViewTimestamp`.

`position` - номер серии. `Episode.playbackPosition` - сохранённая позиция воспроизведения внутри серии.
