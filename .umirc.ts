import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/home', component: '@/pages/marketplace' },
    { path: '/test', component: '@/components/HeaderSearch/index' },
    { path: '/test1', component: '@/components/home/test1' },
    { path: '/test2', component: '@/components/home/test' },
    { path: '/test3', component: '@/components/home/sidertest' },
    { path: '/testcardlist', component: '@/components/CardList/AxieCardList' },
  ],
  fastRefresh: {},
  locale: {
    antd: true
  },
  plugins: [
  ],
  "theme": {
    "primary-color": "#1DA57A",
  },
});
