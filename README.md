# tree-sitter-plplus

Грамматика [tree-sitter](https://tree-sitter.github.io) для языка **PL/Plus**
платформы ЦФТ.

Файлы языка: `.plp` — тела методов, `.tbp` — описания классов,
`.vw` — запросы представлений.

## Зачем отдельным репозиторием

Zed подключает грамматику по адресу репозитория и точному коммиту — он клонирует
её при установке расширения. Внутри монорепозитория этого сделать нельзя,
поэтому грамматика вынесена сюда.

```toml
[grammars.plplus]
repository = "https://github.com/nbeibitov/tree-sitter-plplus"
rev = "..."
```

## Где ведётся разработка

**Источник правды — монорепозиторий** `nbeibitov/vscode-plplus`, каталог
`packages/grammar`: там грамматика собирается, там же на неё завязаны языковой
сервер и тесты. Этот репозиторий — зеркало, которое обновляется после
перегенерации парсера.

Порядок обновления:

```bash
# в монорепозитории, после правки grammar.js
tree-sitter generate
tree-sitter build-wasm

# затем сюда
cp grammar.js tree-sitter.json          <путь>/tree-sitter-plplus/
cp src/{grammar.json,node-types.json,parser.c} <путь>/tree-sitter-plplus/src/
cp queries/highlights.scm               <путь>/tree-sitter-plplus/queries/
git commit -am "Перегенерация парсера" && git push
```

Затем зафиксировать новый коммит в `extension.toml` расширения для Zed.

Собранные артефакты — `parser.dll`, `tree-sitter-plplus.wasm` — здесь не
хранятся: Zed компилирует парсер сам, а монорепозиторий держит свои копии.
`src/parser.c` сгенерирован и лежит в репозитории намеренно — без него
потребителю пришлось бы ставить tree-sitter, чтобы просто собрать парсер.

## Запросы

`queries/highlights.scm` — подсветка в терминах tree-sitter. Для Zed действует
отдельный набор запросов со своим словарём захватов, он живёт в расширении
(`nbeibitov/zed-pl+`), а не здесь.
