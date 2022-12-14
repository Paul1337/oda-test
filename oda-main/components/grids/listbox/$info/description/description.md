Компонент «**ListBox**» предназначен для вывода списка, из которого пользователь может выбрать как один, так и сразу несколько элементов.

Для использования этого компонента необходимо подключить модуль «**listbox.js**» и добавить в HTML-код пользовательский тэг \<**oda-list-box**>.

Например:

```javascript _run_line_edit_loadoda_[my-component.js]_h=120_
import '/components/grids/listbox/listbox.js';
ODA({
    is: 'my-component',
    template: `
        <oda-list-box :items></oda-list-box>
    `,
    props: {
        items: [
            {label: "Элемент 1", icon: 'icons:favorite'},
            {label: "Элемент 2", icon: 'icons:face'},
            {label: "Элемент 3", icon: 'icons:star'}
        ]
    }
});
```

Список отображаемых в этом компоненте элементов хранится в свойстве **items**. Это свойство представляет собой обычный массив, элементы которого могут иметь любой тип.

Если элементы массива являются объектами, то свойство **label** каждого объекта определяет надпись элемента списка, а свойство **icon** — изображение, которое появится с левой стороны от этой надписи.

``` info_md
В отличие от компонента **list** список элементов **listbox** помещается в отдельный контейнер. Кроме этого, из списка можно одновременно выбрать сразу несколько элементов.
```

Для выбора последующих элементов необходимо удерживать зажатой одну из клавиш: **Shift**, **Ctrl** или **Ctrl + Shift**.

Обратите внимание, что при множественном выборе в фокусе всегда будет оставаться только тот элемент, который был выбран из списка первым.
