import React from "react"
import { MovieCardSelected } from "../components"
import { movies } from "./stub"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card/Movie card selected",
  component: MovieCardSelected,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    test: "test",
  },
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MovieCardSelected {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  movie: movies[0],
}
