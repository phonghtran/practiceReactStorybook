import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Chat } from './Chat';

export default {
  title: 'Component/Chat',
  component: Chat,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#FAEFE3', padding: '2rem', maxWidth: '407px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
};

const Story = (args) => <Chat {...args} />;

export const Basic = Story.bind({});
Basic.args = {
  message: {
    imageURL: '/assets/avatar.png',
    name: 'Emily Dougrer',
    title: 'Developer',
    message: 'Hi there. 👋 We use Boards to share intial goals and ideas.',
  },
};

Basic.story = {
  parameters: {
    design: {
      type: 'image',
      url: 'https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/7:10.png',
    },
  },
};
