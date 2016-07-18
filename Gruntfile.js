module.exports = function(grunt) {   // exports - модуль который экспортирует настройки
  grunt.initConfig({      // запускаем конфиг на выполнение
    pkg: grunt.file.readJSON('package.json'),  // говорим, считай данные с файла package.json

    less: {    // описываем опции для таски grunt-contrib-less (папка с лесс файлами лежит в апп для примера компиляции)
      dev: {
        files: {
          '.temp/css/styles.css': 'app/less/styles.less'  // описали куда скомпилировать ксс файл из какого лесс файла
        }
      }
    },
    includeSource: {           // заходит в  temp/index.html и выполняет инструкции описанные в ключе include:
      dev:{
        files: {
          '.temp/index.html': 'index.html'
        }
      }
    },
    clean: {                     // очищает содержимое папок
      dev: ['.temp/**/*']
    },
    copy: {                // копирует файлы из src в dest
      dev: {
        files: [
          { expand: true, src: ['app/**/*.js'], dest: '.temp' },  // expand находит скрытые файлы
          { expand: true, src: ['app/**/*.html'], dest: '.temp' },  // expand находит скрытые файлы
          { expand: true, src: ['css/**/*.css'], dest: '.temp' }  // expand находит скрытые файлы
        ]
      }
    }
  });

  require('load-grunt-tasks')(grunt); // запускаем модуль load-grunt-tasks автоматического загрузчика для grunt тасков
  grunt.registerTask('dev', ['clean:dev', 'less:dev', 'copy:dev', 'includeSource:dev']); // регистрируем таску, которая будет запускаться по умолчанию в консоли при вызове grunt dev, or grunt production


};
