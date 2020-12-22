import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Bestsellers } from './Bestsellers';

export default {
  title: 'Component/Bestsellers',
  component: Bestsellers,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#FAEFE3', padding: '2rem', maxWidth: '407px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
};

const Story = (args) => <Bestsellers {...args} />;

export const Basic = Story.bind({});
Basic.args = {
  label: 'Bestsellers',
  products: [
    {
      imageURL: '/assets/image-2.png',
      imageAlt: 'photo of shoe',
      name: 'Nike Air Max 270',
      brand: 'Nike',
      price: '$195.80',
      selected: true,
    },
    {
      imageURL: '/assets/image-1.png',
      imageAlt: 'photo of shoe',
      name: 'Nike Air Max 90',
      brand: 'Nike',
      price: '$195.80',
      selected: false,
    },
    {
      imageURL: '/assets/image.png',
      imageAlt: 'photo of shoe',
      name: 'Nike Air Max Plus',
      brand: 'Nike',
      price: '$195.80',
      selected: false,
    },
  ],
};

Basic.story = {
  parameters: {
    design: {
      type: 'image',
      url: 'https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/40:2.png',
    },
  },
};
