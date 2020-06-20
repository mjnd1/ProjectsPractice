import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  // 消息提示
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  Submenu,
  // 面包屑
  Breadcrumb,
  BreadcrumbItem,
  // 卡片
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  // 开关按钮
  Switch,
  Tooltip,
  // 分页
  Pagination,
  // 对话框
  Dialog,
  // 弹出框
  MessageBox,
  // 选择框
  Select,
  Option,
  // 标签
  Tag,
  // 树形控件
  Tree,
  Cascader,
  Alert,
  Tabs,
  TabPane,
  Steps,
  Step,
  CheckboxGroup,
  Checkbox,
  Upload
} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Steps)
Vue.use(Step)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Upload)
// Vue.use(Timeline)
// Vue.use(TimelineItem)
// 全局挂载到vue上面，并且通过$message访问
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
