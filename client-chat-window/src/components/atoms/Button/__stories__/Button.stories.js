import Button from "../Button";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "primary-blue", "secondary-blue"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "large", "auto"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "primary",
  redirect: "/",
  variant: "primary",
  size: "small",
  onClick: undefined,
};
