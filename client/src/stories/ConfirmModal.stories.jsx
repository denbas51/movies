import React from "react"
import { ConfirmModal } from "../components"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ConfirmModal component",
  component: ConfirmModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ConfirmModal {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  open: true,
  title: "My favourite movies",
  url: 'http://localhost:3000/recommend?title="my movies"&ids=232,434',
  onClose: () => {},
}
