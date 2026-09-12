---
title: Получение эпизода
description: Релиз → озвучка → источник → эпизод.
---

Цепочка идентификаторов:

```text
releaseId
  ↓
Type
  ↓
Source
  ↓
Episode
```

## 1. Озвучки

[Открыть `GET /episode/{releaseId}` в API Reference](/api/#tag/episodes/Episode_types)

```http
GET /episode/{releaseId}
```

`TypesResponse.types[]` содержит доступные варианты озвучки. Для следующего запроса нужен `Type.id`.

```text
type.id
type.name
type.episodesCount
type.isSub
```

## 2. Источники

[Открыть `GET /episode/{releaseId}/{typeId}` в API Reference](/api/#tag/episodes/Episode_sources)

```http
GET /episode/{releaseId}/{typeId}
```

`SourcesResponse.sources[]` содержит источники. Дальше нужен `source.id`.

## 3. Эпизоды

[Открыть `GET /episode/{releaseId}/{typeId}/{sourceId}` в API Reference](/api/#tag/episodes/Episode_episodes)

```http
GET /episode/{releaseId}/{typeId}/{sourceId}
```

В `EpisodeResponse.episodes[]` находятся эпизоды выбранного источника.

```text
position         номер серии
name             название
url              URL ресурса
iframe           признак iframe
isWatched        отметка просмотра
playbackPosition сохранённая позиция
```

Прямой запрос, если `releaseId`, `sourceId` и `position` уже известны:

[Открыть `GET /episode/target/{releaseId}/{sourceId}/{position}` в API Reference](/api/#tag/episodes/Episode_episodeTarget)

```http
GET /episode/target/{releaseId}/{sourceId}/{position}
```

Отметить эпизод просмотренным:

[Открыть `POST /episode/watch/{releaseId}/{sourceId}/{position}` в API Reference](/api/#tag/episodes/Episode_watch_2)

```http
POST /episode/watch/{releaseId}/{sourceId}/{position}
```

`position` здесь означает номер серии, а `playbackPosition` - сохранённую позицию воспроизведения внутри серии.

Связанный раздел: [Эпизоды и озвучки](/guide/episodes/).
