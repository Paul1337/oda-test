Свойство **expanding** позволяет определить разворачиваются ли узлы дерева в данный момент или нет.

Процесс развертывания узлов носит асинхронный характер и может занимать значительное время. В начале этого процесса свойство **expanding** устанавливается в значение **true**, сигнализируя о том, что процесс развертывания запущен. После того как узлы дерева будут развернуты, свойство **expanding** автоматически установится в значение **false**, свидетельствуя о том, что процесс развертывания узлов завершился.

Аналогичным образом это свойство работает и в момент свертывания узлов, позволяя узнать, что этот процесс начался, но еще не завершился.

Например:

```javascript _run_line_edit_loadoda_[my-component.js]_h=140_
import '/components/grids/tree/tree.js';
ODA({
    is: 'my-component',
    template: `
        <label>{{text}}<input type="checkbox" ::value="expanded" ></label> <br>
        <label>Свойство expanding: <input type="checkbox" ::value="$refs.tree.expanding" ></label> <br>
        <oda-tree ref="tree" :data-set></oda-tree>
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
        text: 'Развернуть узлы: ',
        expanded: {
            default: false,
            set(n) {
                this.text = n ? 'Развернуть узлы: ' : 'Свернуть узлы: ';
                n ? this.$refs.tree.expandAll() : this.$refs.tree.collapseAll();
            }
        }
    }
});
```

Если узлов в дереве мало, то заметить изменение значения этого свойства во время свертывания или развертывания узлов практически невозможно.

Изменение этого свойства в ручном режиме ни к каким действиям не приведет. Она задается автоматически при свертывании или развертывании узлов дерева.
