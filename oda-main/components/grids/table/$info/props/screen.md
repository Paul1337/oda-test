Свойство **screen** позволяет узнать, какие строки таблицы находятся на данный момент в видимой области контейнера.

Данное свойство является объектом, у которого заданы 3 поля:

1. **from** — индекс первой строки, которая отображается в видимой области контейнера.
1. **length** — количество строк, которые помещаются в видимую область контейнера.
1. **post** — объект, в котором хранятся все отсортированные и отфильтрованные строки.
    + **sort** — список отсортированных строк в виде объектов, с указания порядка сортировки.
    + **filter** — список отфильтрованных строк в виде объектов, с указания фильтра.

Если отсортированных или отфильтрованных узлов в дереве нет, то третий параметр **post** остается пустым объектом.

Свойство **screen** используется для выбора из списка **items** только тех узлов, которые будут отображаться в видимой области контейнера при условии, что включен режим «**ленивой**» обработки данных с помощью свойства **lazy**.

Это список помещается в массив **rows**. При обычной обработке данных в нем находятся все элементы массива **items**. Поэтому свойство **screen** фактически не используется.

В режиме «**ленивой**» обработки в массиве **rows**, кроме строк из видимой области контейнера, помещаются и их родительские узлы, которых сами в видимую область не попали, но необходимы для правильного отображения вложенных узлов.

В любом случае свойство **screen** создается и всегда содержит объективные данные об отображаемых строках таблицы.

Например:

```javascript _run_line_edit_loadoda_[my-component.js]_h=280_
import '/components/grids/table/table.js';
ODA({
    is: 'my-component',
    template: `
        <label>Ленивая обработка <input type="checkbox" ::value="lazy" ></label>
        <div>Индекс первой видимой строки в контейнере: {{$refs.table.screen.from}}</div>
        <div>Количество строк в видимой области: {{$refs.table.screen.length}}</div>
        <div>Общее количество развернутых строк: {{$refs.table.items.length}}</div>
        <div>Общее количество обрабатываемых строк: {{$refs.table.rows.length}}</div>
        <div>Количество отсортированных строк: {{$refs.table.sort.length}}</div>
        <div>Количество отфильтрованных строк: {{$refs.table.filter.length}}</div>
        <oda-table ref="table" :data-set :columns :lazy allow-sort show-header show-filter row-lines col-lines auto-width style="max-height: 160px" show-footer></oda-table>
    `,
    props: {
        columns: [
            {name: 'col1', label: 'Столбец 1'},
            {name: 'col2', label: 'Столбец 2', treeMode: true}
        ],
        dataSet: [
            {col1: "1 строка", col2:"1 узел"},
            {col1: "2 строка", col2:"2 узел",
                items:[
                    {col2: "2.1 узел"},
                    {col2: "2.2 узел",
                    items:[
                        {col2:"2.2.1 узел"},
                        {col2:"2.2.2 узел"},
                        {col2:"2.2.3 узел"},
                    ]},
                    {col2:"2.3 узел"}
                ]},
        ],
        lazy: false
    }
});
```

По умолчанию свойство **lazy** установлено в значение **false**, т.е. изначально обрабатываются все строки контейнера из массива **items** и свойство **screen** носит лишь информационный характер, который изменяется динамически в следующих случаях:

1. При изменении прокрутки в контейнере.
1. При изменении размера иконки у узлов дерева.
1. При изменении размера контейнера.
1. При фильтрации данных.
1. При сортировке данных.
1. При изменении массива столбцов **columns**.