import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';

global.Vue = Vue;

const MessageComponent = {
    template: '<p>{{ msg }}</p>',
    props: ['msg']
}

describe('MessageComponent', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(MessageComponent, {
            propsData: { msg }
        })
        expect(wrapper.text()).toMatch(msg)
    })
})