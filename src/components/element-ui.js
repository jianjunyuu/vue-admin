import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
    Aside,
    Breadcrumb,
    BreadcrumbItem,
    Container,
    Header,
    Loading,
    Main,
    Menu,
    MenuItem,
    Pagination,
    Submenu,
    Table,
    TableColumn,
    Tag
} from 'element-ui';
import {IMenu, ITableList} from 'vue-element-components';

Vue
/** vue-element-components 组件库依赖的element-ui组件 */
    .use(Menu)
    .use(MenuItem)
    .use(Submenu)
    .use(Pagination)
    .use(Table)
    .use(TableColumn)
    .use(Loading)

    /** vue-element-components 组件库 */
    .use(IMenu)
    .use(ITableList)

    /** 本地依赖 */
    .use(Container)
    .use(Header)
    .use(Aside)
    .use(Main)
    .use(Breadcrumb)
    .use(BreadcrumbItem)
    .use(Tag);
