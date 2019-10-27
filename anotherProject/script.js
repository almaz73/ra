let template = `
    <div>
        <div class='dd' v-for='data in datas'>{{data}}</div>
    </div>
`


function init () {
    console.log('%c ### ','background:purple', 'el=');
    new Vue({
        el: '#my-vue-modul',
        template: template,
        data() {
            return {
                datas:["www",'2222', '33333',44, '232323']
            }
        },
        computed: {
            daysInMonth: function () {
                let days = (33 - new Date(this.year, this.month - 1, 33).getDate());
                return days
            },
            untill: function () {
                let val = this.page * this.rowsInPage;
                if (val > this.totalRows) val = this.totalRows;
                return val
            }
        },
        methods: {
            dblclick: function (el) {
                alert(2)
            },
            click: function (el, index) {
              console.log('%c ### ','background:purple', 'el=', el);
            },

        },
        mounted() {
        }
    });

}