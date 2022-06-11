npm i -g typescript - глобально подтягивает TypeScript

tsc - запуск компилятора

tsc.cmd - запуск компилятора powershell

tsc - v (tsc.cmd - v) - проверка версионности

tsc --init (tsc.cmd --init) - инициализирует файл конфига ts.config.json

tsc -showConfig (tsc.cmd -showConfig) - выводит текущие настройки конфига

---

Конфиг поддерживает наследование.

Условно можно разделить конфиг на <b>root-опции</b> и <b>опции-компиляции</b>.

1. <b>Root-options</b>: extends, files, exclude, include. Отвечают за подключение и наследование конфигов, файлы которые компилируются и которые должны быть исключены из компиляции

2. <b>Compiler-options</b>: условно делятся на general и checks.

<b>Checks types</b> удобно размещать в отдельном файле и наследовать.

За счет наследования конфиги удобно комбинировать.

<i>info</i>:

https://habr.com/ru/post/542234/

https://habr.com/ru/post/557738/
