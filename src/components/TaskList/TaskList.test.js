import { render } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

// 👇 Our stories imported here
import * as TaskListStories from "./index.stories";

/*
    @storybook/testing-react is a great addon that allows you 
    to reuse your Storybook stories in your unit tests. By reusing
    your stories in your tests, you have a catalog of component 
    scenarios ready to be tested. Also, all args, decorators, 
    and other information from your story will be composed by 
    this library. As you just saw, all you have to do in your 
    tests is select which story to render. 
*/

// 👇 composeStories will process all information related to the component (e.g., args)
const { WithPinnedTasks } = composeStories(TaskListStories);

it("renders pinned tasks at the start of the list", () => {
  const { container } = render(<WithPinnedTasks />);

  expect(
    container.querySelector(
      '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
    )
  ).not.toBe(null);
});

/*
Note that we’ve been able to reuse the WithPinnedTasks 
story in our unit test; in this way we can continue to
leverage an existing resource (the examples that represent 
interesting configurations of a component) in many ways.

Notice as well that this test is quite brittle. 
It's possible that as the project matures, and the 
exact implementation of the Task changes --perhaps using
a different classname or a textarea rather than an 
input--the test will fail, and need to be updated. 
This is not necessarily a problem, but rather an indication
to be careful about liberally using unit tests for UI. 
They're not easy to maintain. Instead rely on manual, 
snapshot, and visual regression (see testing chapter) 
tests where possible.
*/

