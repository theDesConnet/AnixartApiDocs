---
title: Импорт и экспорт
description: Перенос списков релизов.
---

Экспорт:

```http
POST /export/bookmarks
Content-Type: application/json
```

`BookmarksExportRequest` содержит статусы для экспорта:

```json
{
  "bookmarksExportProfileLists": [1, 2, 3]
}
```

## Импорт

```http
POST /import/bookmarks
Content-Type: application/json
```

`BookmarksImportRequest` разбивает ID релизов по спискам:

```json
{
  "watching": [101, 102],
  "plans": [201],
  "completed": [301],
  "dropped": [],
  "holdOn": [],
  "selectedImporterName": "importer"
}
```

Это ID релизов, а не полные объекты `Release`.

## Статус

```http
POST /import/status
```

`POST /import/bookmarks` запускает импорт, а `/import/status` возвращает его текущее состояние.
