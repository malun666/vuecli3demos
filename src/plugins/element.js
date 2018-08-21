import Vue from 'vue'
import { Button, Slider, Dialog, Input, Select, Form, FormItem, Option } from 'element-ui'

Vue.use(Button); // 就是把Button按钮注册成全局组件
// Vue.component('slide', Slider)
Vue.use(Slider);

Vue.use(Dialog);

Vue.use(Input);
Vue.use(Select)
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Option);
