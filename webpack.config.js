const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development', // Режим разработки (development) или продакшен (production)
    entry: './src/index.js', // Главный файл JavaScript для входа
    output: {
        path: path.resolve(__dirname, 'dist'), // Папка для итоговых файлов
        filename: 'bundle.js', // Итоговый файл JavaScript
    },
    plugins: [
        // Очистка папки dist перед каждой сборкой
        new CleanWebpackPlugin(),
        // Создание HTML для главной страницы
        new HtmlWebpackPlugin({
            template: './src/pages/index.html',
            filename: 'index.html',
        }),
        // Создание HTML для страницы расписания
        new HtmlWebpackPlugin({
            template: './src/pages/rozklad.html',
            filename: 'rozklad.html',
        }),
        // Создание HTML для страницы новостей
        new HtmlWebpackPlugin({
            template: './src/pages/news.html',
            filename: 'news.html',
        }),
        // Создание HTML для страницы фотогалереи
        new HtmlWebpackPlugin({
            template: './src/pages/photo.html',
            filename: 'photo.html',
        }),
        // Копирование всех изображений из src/assets/images в dist/assets/images
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'assets/images' },
            ],
        }),
    ],
    devServer: {
        static: './dist', // Папка для раздачи сервером
        port: 8080, // Порт для локального сервера
        open: true, // Автоматическое открытие браузера при запуске сервера
    },
    module: {
        rules: [
            // Добавьте загрузчики, если понадобится работать с CSS, SCSS или другими файлами
        ],
    },
};
