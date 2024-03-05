import Image from '../Image';

export default {
  title: 'Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['normal', 'bordered'],
    },
  },
};

const Template = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: "bordered",
  image: "http://localhost:9000/images/products/laptop/101/lp1.jpg",
}
