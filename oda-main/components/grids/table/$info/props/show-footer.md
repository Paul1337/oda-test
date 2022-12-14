Свойство **showFooter** позволяет отобразить нижний колонтитул таблицы в виде итоговой строки с дополнительной информацией о ячейках соответствующих столбцов.

Если это свойство уставлено в значение **true**, то будет отображаться нижний колонтитул, на котором выводится по умолчанию общая информация о строках, расположенных в видимой области контейнера, с уточнением номера первой и последней строки из них в квадратных скобках.

Кроме этого у каждого столбца можно задать свойства **summary** с одним из следующих значений:

1. **sum** – сумма значений всех ячеек текущего столбца.
1. **count** – количество ячеек данного столбца.

В этом случае в колонтитуле для соответствующего столбца будет выводится эта дополнительная информация.

Например:

```javascript _run_line_edit_loadoda_[my-component.js]_h=200_
import '/components/grids/tree/tree.js';
ODA({
    is: 'my-component',
    template: `
        <label>Показывать подвал <input type="checkbox" ::value="showFooter" ></label>
        <oda-table :show-footer :data-set show-header :columns row-lines col-lines auto-width></oda-table>
    `,
    props: {
        columns: [
            {name: 'col1', label: 'Столбец 1', summary: 'count'},
            {name: 'col2', label: 'Столбец 2', summary: 'sum'}
        ],
        dataSet: [
            {col1: "1 Строка", col2: "2"},
            {col1: "2 Строка", col2: "2"},
            {col1: "3 Строка", col2: "3"}
        ],
        showFooter: false
    }
});
```

По умолчанию свойство **showFooter** установлено в значение **false**. Поэтому нижний колонтитул изначально не отображается.
