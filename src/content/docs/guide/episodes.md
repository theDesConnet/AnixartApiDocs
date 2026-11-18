---
title: Эпизоды и озвучки
description: Как пройти от релиза до конкретного эпизода.
---

Ответ `TypeResponse` содержит `popular_type_ids` — список ID популярных озвучек. Локальная модель `Episode` также хранит `playbackDuration`; наличие и имя этого поля в JSON сервера не подтверждены, поэтому оно отмечено отдельно в `x-client-fields` схемы.

У эпизодов есть три уровня: **озвучка → источник → эпизод**.

## 1. Получить озвучки

```http
GET /episode/{releaseId}
```

Ответ: `TypesResponse`.

Общий список озвучек:

```http
GET /type/all
```

## 2. Получить источники

```http
GET /episode/{releaseId}/{typeId}
```

`typeId` берётся из списка озвучек.

## 3. Получить эпизоды

```http
GET /episode/{releaseId}/{typeId}/{sourceId}
```

Есть необязательный `sort`.

Прямой запрос конкретного эпизода:

```http
GET /episode/target/{releaseId}/{sourceId}/{position}
```

`position` - номер серии.

Чтобы скачать эпизод, передай `download=true`:

```http
GET /episode/target/{releaseId}/{sourceId}/{position}?download=true
```

В `EpisodeTargetResponse` приходят `episode` и ограничение скорости `download_speed_limit`. Код `2` (`DownloadRestricted`) означает запрет загрузки, `3` (`DownloadSourceRestricted`) — запрет загрузки из выбранного источника. У `Source` есть ограничение скорости `download_speed_limit` и флаг `is_download_disabled`.

## Просмотр

Чтобы отметить просмотр указанной серии:

```http
POST /episode/watch/{releaseId}/{sourceId}/{position}
```

Снять отметку:

```http
POST /episode/unwatch/{releaseId}/{sourceId}/{position}
```

Есть варианты без `position`, если операция относится сразу ко всему источнику.

Получить отметки просмотра для нескольких релизов:

```http
GET /episode/watched?release_ids=123,456&token=YOUR_TOKEN
```

В `release_ids` передай ID релизов через запятую. В ответе `EpisodeWatchedResponse.sources` будут источники: `release_id`, `source_id` и номера просмотренных серий в `positions`. Поле `sources` может быть `null`.

## Закреплённая озвучка

```http
GET /type/pin/{releaseId}/{typeId}
GET /type/unpin/{releaseId}/{typeId}
```

Ещё у озвучек есть методы для скрытия виджета:

```http
GET /type/widget/hide/{typeId}
GET /type/widget/unhide/{typeId}
```

Для методов, завязанных на состояние профиля, передавай `token`.
