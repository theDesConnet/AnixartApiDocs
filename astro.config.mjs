import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  integrations: [
    starlight({
      title: 'Anixart API',
      description: 'Неофициальная документация Anixart API актуальная под Anixart v10.0 (BUILD 26090418).',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'Anixart API',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
      pagination: true,
      sidebar: [
        {
          label: 'Начало работы',
          items: [
            { slug: 'index', label: 'Обзор' },
            { slug: 'guide/getting-started', label: 'Быстрый старт' },
            { slug: 'guide/authentication', label: 'Авторизация' },
            { slug: 'guide/sdk', label: 'SDK и библиотеки' },
          ],
        },
        {
          label: 'Основы API',
          items: [
            { slug: 'guide/pagination', label: 'Пагинация' },
            { slug: 'guide/errors', label: 'Ошибки и ответы' },
            { slug: 'guide/result-codes', label: 'Коды результатов' },
            { slug: 'guide/conventions', label: 'Особенности API' },
          ],
        },
        {
          label: 'Примеры использования',
          items: [
            { slug: 'recipes/find-release', label: 'Поиск и получение релиза' },
            { slug: 'recipes/watch-release', label: 'Получение эпизода' },
            { slug: 'recipes/viewing-state', label: 'История и отметки просмотра' },
            { slug: 'recipes/profile-lists', label: 'Списки профиля' },
            { slug: 'recipes/article-thread', label: 'Статья и комментарии' },
            { slug: 'recipes/home-screen', label: 'Лента и рекомендации' },
          ],
        },
        {
          label: 'Контент',
          items: [
            { slug: 'guide/releases', label: 'Релизы' },
            { slug: 'guide/episodes', label: 'Эпизоды и озвучки' },
            { slug: 'guide/video', label: 'Видео' },
            { slug: 'guide/articles', label: 'Статьи' },
            { slug: 'guide/comments', label: 'Комментарии' },
            { slug: 'guide/collections', label: 'Коллекции' },
            { slug: 'guide/search', label: 'Поиск' },
            { slug: 'guide/feed', label: 'Лента и рекомендации' },
          ],
        },
        {
          label: 'Профиль и сообщество',
          items: [
            { slug: 'guide/profiles', label: 'Профили' },
            { slug: 'guide/friends', label: 'Друзья и блок-лист' },
            { slug: 'guide/channels', label: 'Каналы' },
            { slug: 'guide/library', label: 'Библиотека' },
            { slug: 'guide/notifications', label: 'Уведомления' },
            { slug: 'guide/account-settings', label: 'Настройки аккаунта' },
          ],
        },
        {
          label: 'Служебное',
          items: [
            { slug: 'guide/moderation', label: 'Жалобы и ограничения' },
            { slug: 'guide/import-export', label: 'Импорт и экспорт' },
          ],
        },
        {
          label: 'Справочник',
          items: [
            {
              label: 'API Reference',
              link: '/api/',
              badge: { text: 'Scalar', variant: 'note' },
            },
            {
              label: 'OpenAPI YAML',
              link: '/openapi.yaml',
            },
            {
              label: 'Исходники документации',
              link: 'https://github.com/theDesConnet/AnixartApiDocs',
            },
          ],
        },
      ],
    }),
  ],
})
