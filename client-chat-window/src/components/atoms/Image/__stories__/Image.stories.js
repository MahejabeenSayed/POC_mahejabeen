import Image from "../Image";

export default {
  title: "Image",
  component: Image,
  tags: ["autodocs"],
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Sample image",
  image:
    "https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png",
};
