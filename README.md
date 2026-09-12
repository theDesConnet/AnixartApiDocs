<p align="center">
  <img src="public/favicon.svg" width="96" height="96" alt="Anixart API">
</p>

<h1 align="center">AnixartApiDocs</h1>

<p align="center">
  Неофициальная документация Anixart API актуальная под <b>Anixart v10.0</b> (BUILD <code>26090418</code>).
</p>

В репозитории находятся OpenAPI-спецификация, API Reference и гайды по основным разделам API.

> Проект не связан с Anixart и не является официальной документацией сервиса.

## Документация

Сайт построен на [Astro](https://astro.build/) и [Starlight](https://starlight.astro.build/).  
API Reference отображается через [Scalar](https://scalar.com/).

Документация включает:

- авторизацию;
- пагинацию, ошибки и коды результатов;
- релизы, эпизоды и видео;
- статьи, комментарии и коллекции;
- поиск, ленту и рекомендации;
- профили, друзей и каналы;
- библиотеку и уведомления;
- настройки аккаунта;
- импорт и экспорт;
- примеры использования;
- SDK и библиотеки.

## Структура проекта

```text
.
├── openapi/
│   ├── openapi.yaml
│   ├── paths/
│   └── components/
├── public/
│   └── openapi.yaml
├── scripts/
│   └── bundle-openapi.mjs
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── guide/
│   │       └── recipes/
│   └── pages/
│       └── api.astro
├── astro.config.mjs
├── package.json
└── docker-compose.yml
```

`openapi/` содержит исходники спецификации. Маршруты и схемы разделены по файлам.

`public/openapi.yaml` генерируется автоматически и используется Scalar.

## Локальный запуск

Требуется Node.js 22+.

```bash
git clone https://github.com/theDesConnet/AnixartApiDocs.git
cd AnixartApiDocs

npm install
npm run dev
```

После запуска:

```text
Документация:  http://localhost:4321/
API Reference: http://localhost:4321/api/
OpenAPI:       http://localhost:4321/openapi.yaml
```

## OpenAPI

Редактировать нужно файлы внутри `openapi/`.

После изменений спецификацию можно собрать вручную:

```bash
npm run openapi:bundle
```

Результат записывается в:

```text
public/openapi.yaml
```

При `npm run dev`, `npm start` и `npm run build` сборка OpenAPI запускается автоматически.

`public/openapi.yaml` вручную редактировать не нужно.

## Сборка

```bash
npm run build
```

Готовый сайт появится в `dist/`.

Для локальной проверки сборки:

```bash
npm run preview
```

## Docker

```bash
docker compose up -d --build
```

По умолчанию сайт будет доступен на:

```text
http://localhost:8080/
```

## Работа с документацией

Страницы документации находятся в:

```text
src/content/docs/
```

Гайды:

```text
src/content/docs/guide/
```

Примеры использования:

```text
src/content/docs/recipes/
```

После добавления новой страницы её нужно добавить в `sidebar` в `astro.config.mjs`.

## Участие в проекте

Если нашёл ошибку в документации или OpenAPI, открой issue или отправь pull request.

Перед PR проверь сборку:

```bash
npm install
npm run build
```

Если менялся OpenAPI:

```bash
npm run openapi:bundle
```

## Лицензия

Исходный код сайта распространяется под [GNU AGPL-3.0](LICENSE).

Документация и OpenAPI-спецификация распространяются под [CC BY-SA 4.0](LICENSE-DOCS).

CC BY-SA 4.0 применяется к:

- `README.md`;
- `src/content/docs/`;
- `openapi/`;
- `public/openapi.yaml`.
