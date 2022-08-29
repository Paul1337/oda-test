Свойство **autoWidth** позволяет выравнивать ширину всех столбцов таблицы, привязывая ее к ширине всего контейнера.

Например:

```javascript _run_line_edit_loadoda_[my-component.js]_h=220_
import '/components/grids/table/table.js';
ODA({
    is: 'my-component',
    template: `
        <label>Привязка по ширине <input type="checkbox" ::value="autoWidth" checked></label> <br>
        <label>Ширина контейнера <input style="width: 25vw;" type="range" max="700" ::value="boxWidth">{{boxWidth}}</label>
        <oda-table :data-set :auto-width show-header col-lines :style="{width: \`\${boxWidth}px\`} "></oda-table>
    `,
    props: {
        columns: [
            {name: 'col1', label: 'Столбец 1'},
            {name: 'col2', label: 'Столбец 2'}
        ],
        dataSet: [
            {col1: "1 Строка", col2: "1"},
            {col1: "2 Строка", col2: "2"},
            {col1: "3 Строка", col2: "3"}
        ],
        autoWidth: true,
        boxWidth: 700,
    }
});
```

По умолчанию свойство **autoWidth** установлено в значение **true**. Если при этом содержимое строк не будет умещаться по ширине столбца, то оно будут автоматически обрезано с добавлением многоточия в самом конце.

В противном случае, когда свойство **autoWidth** установлено в значение **false**, внизу контейнера появится горизонтальная полоса прокрутки, которая позволит просмотреть содержимое всей таблицы, при условии, что оно полностью не помещается в видимую область.

Если все столбцы таблицы умещаются по ширине контейнера, то к таблице добавляется один фиктивный столбец, который заполняет пустую область от последнего столбца, до конца контейнера. По этой причине в свободной области будет продолжаться строка заголовка.