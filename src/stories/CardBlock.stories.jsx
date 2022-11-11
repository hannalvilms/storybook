import React from 'react';
import { CardBlock } from './CardBlock';

export default {
    title: 'Example/CardBlock',
    component: CardBlock
};

const Template = (args) => <CardBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'CardBlock',
    bgColor: true,
    columns: 4
};