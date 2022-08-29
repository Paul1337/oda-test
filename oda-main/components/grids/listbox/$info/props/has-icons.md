Свойство **hasIcons** позволяет определить существование иконки хотя бы у одного элемента списка.

Значение этого свойства определяется автоматически при изменении:

1. Списка элементов **items**.
1. Сортировки списка элементов с помощью свойства **orderBy**.
1. Параметра фильтрации в свойстве **filter**.

Если при этих изменениях элементы списка будут объектами и хотя бы у одного из них будет задано свойство **icon**, то свойство **hasIcons** примет значение **true**. В противном случае оно будет иметь значение **false**.

Например:

```javascript _run_line_edit_loadoda_[my-component.js]_h=160_
import '/components/grids/listbox/listbox.js';
ODA({
    is: 'my-component',
    template: `
        <label>Наличие иконок: <input type="checkbox" ::checked="$refs.listbox.hasIcons"></label> <br>
        <button @tap="onTap">{{text}}</button>
        <oda-list-box ref="listbox" :items :order-by></oda-list-box>
    `,
    props: {
        items: [
            {label: 'Элемент 1', icon: 'icons:star'},
            {label: 'Элемент 2'},
            {label: 'Элемент 3'},
        ],
        text: 'Удалить иконку',
        orderBy: 'ascending',
    },
    onTap() {
        let n = !this.$refs.listbox.hideIcons;
        this.orderBy = n ? 'descending' : 'ascending';
        this.text = (n ? 'Добавить' : 'Удалить') + ' иконку';
        n ? delete this.items[0].icon : this.items[0].icon = 'icons:star';
    }
});
```

В данном примере при нажатии на кнопку **button** удаляется или добавляется свойство **icon** у первого объекта в массиве **items**. При пересортировки списка свойство **hasIcons** пересчитывается автоматически, и если ни у одного объекта из списка нет свойства **icon**, то область, необходимая для отображения иконок с левой стороны от надписи элементов, уже не выводится.

Это свойство можно изменить вручную. В этом случае у элементов без иконок не будет задан дополнительный отступ. Но, при изменении списка элемента, его сортировки или  фильтрации, значение свойства **hasIcons** будет пересчитано автоматически.