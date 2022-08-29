Свойство **focusedRow** предназначено для хранения указателя на текущий узел дерева, который находится на данный момент в фокусе.

Для того чтобы узел дерева мог получить фокус, первоначально необходимо установить свойство **allowFocus** в значение **true**.

Например:

```javascript _run_line_edit_loadoda_[my-component.js]_h=140_
import '/components/grids/tree/tree.js';
ODA({
    is: 'my-component',
    template: `
        <label>Разрешение фокуса<input type="checkbox" ::value="allowFocus" checked></label> <br>
        <label>Узел в фокусе: <input ::value="focusedRow.name"></label>
        <oda-tree :data-set ::focused-row :allow-focus></oda-tree>
    `,
    props: {
        dataSet: [
            {name: "1 строка"},
            {name:"2 строка",
                items:[
                    {name:"2.1 строка"},
                    {name:"2.2 строка",
                    items:[
                        {name:"2.2.1 строка"},
                        {name:"2.2.2 строка"},
                        {name:"2.2.3 строка"},
                    ]},
                    {name:"2.3 строка"}
                ]
            },
            {name:"3 строка"},
        ],
        allowFocus: true,
        focusedRow: {name: 'Щелкните по элементу'}
    }
});
```

При щелчке левой или правой кнопки мыши по соответствующему узлу дерева ссылка на объект этого узла будет записана в свойство **focusedRow**.

Используя эту ссылку, можно узнать не только какой узел находится сейчас в фокусе, но и изменить его значение.

Это свойство можно использовать как для чтения, так и для записи. Например, если записать в него значение элемента из массива **items**, то соответствующий узел в структуре дерева получит фокус автоматически, как показано в примере [**«Изменение фокуса»**]().

При любом изменении свойства **focusedRow** происходит событие **focused-row-changed**. Его можно обработать так, как показано в примере [**«Событие focused-row-changed»**]().

Фактически это свойство аналогично свойству **focusedNode**. Любое изменение свойства **focusedRow** приводит к изменению свойства **focusedNode**, и наоборот.