import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Select from '@/components/Select';
import SlideDown from '@/components/SlideDown';
import Card from '@/components/Card';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/select', name: 'select', component: Select },
        { path: '/slidedown', name: 'slidedown', component: SlideDown },
        { path: '/card', name: 'card', component: Card },
    ]
})
