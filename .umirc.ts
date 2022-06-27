import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/home', component: '@/pages/marketplace' },
    { path: '/test', component: '@/components/HeaderSearch/index' },
    { path: '/test1', component: '@/components/Filter/Purity/PurityGame' },
    { path: '/tt', component: '@/components/TestCode/testcode' },
    // { path: '/test3', component: '@/components/home/sidertest' },
    { path: '/testLand', component: '@/components/home/land' },
    
    { path: '/testcardlist', component: '@/components/CardList/AxieCardList' },
    { path: '/item', component: '@/pages/item' },
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
