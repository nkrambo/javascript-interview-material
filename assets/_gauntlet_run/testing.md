
## Testing

### Linting

The first line of defense should be to lint your code to adhere to a standard across your team. We can use
eslint for this and extend the Airbnb config. In addition, we can configure a pre-commit hook which will ensure nothing gets committed without first passing the lint.

### Advantages of Testing

- Simple, elegant, modular code.
- Help find defects and bugs earlier.
- The tests can serve as documentation and make the code much easier to understand.
- Easier to maintain and refactor code.
- Speeds up development in the long-term.
- Encourage developers to think from an end user point-of-view.
- Gives confidence you haven't broken anything, when you refactor or add new code.
- Testing before deployment gives you quick feedback.

### Disadvantages of Testing

- Big time investment up front.
- Additional complexity.
- Continuous tweaking.

### Tools

- [Enzyme](https://github.com/airbnb/enzyme) - Testing utilities for React
- [Coveralls](https://coveralls.io/) - Code coverage reporting
- [Jest](https://facebook.github.io/jest/) - Javascript testing framework
- [Sinon](http://sinonjs.org/) - Standalone test spies, stubs and mocks for Javascript.
- [JSDOM](https://github.com/tmpvar/jsdom) - Javascript implementation of the DOM for use with node.js
- [eslint](http://eslint.org/) - Linting utility

### Unit Testing

This is testing the smallest testable parts of an application, usually individual functions, classes or components, like in React. Usually tests are independent from each other and written in isolation. The goal of unit testing is to isolate each part of the program and show that the individual parts are correct. A unit test provides a strict, written contract that the piece of code must satisfy. This contract may include mock apis, stubs and any other inputs that should produce expected outputs.

We normally cover as much of our code as possible and generally use framework to automatically and periodically run our suite of unit tests to check for results.

A suite of unit tests does not equal integration testing.

#### Downsides of Unit Tests

Unit tests do not test their contracts, that is, the inputs. Unit testing by definition only tests the functionality of the units themselves. Therefore, it will not catch integration errors or broader system-level errors, such as functions performed across multiple units. Unit testing should be done in conjunction with integration testing.

#### Example Unit Test

```javascript
import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';

const children = (<h1>Test</h1>);
const href = 'http://google.com';
const renderComponent = (props = {}) => mount(
  <Button href={href} {...props}>
    {children}
  </Button>
);

describe('<Button />', () => {
  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
```

### Integration Testing

Integration testing takes individual software modules, combines them and tests them as a group. In contrast to unit tests, that is, it takes several of these units and tests them together as a whole subsystem as part of the larger application. For example, the authentication process for an application will implemented across several modules, each with their own units tests. In integration testing, we would test all of these units together, to test authentication. The purpose of integration testing is to verify functional, performance, and reliability requirements placed on major design items.

Integration tests occurs after unit testing and applies tests defined in an integration test plan. Integration testing tries to replicate the application to production environment as much as possible. That is, it will normally use a real test database and some type of real client, like a browser, perhaps a headless browser like phantom.js or JSDOM, for speed.

#### Downsides of Integration Tests

One of the downsides of integration tests is that they cannot simulate errors and they don't tell you where the problem is, if you encounter one. In addition, they are very expensive, as in, they run very slow compared to unit tests.

#### Example Integration Test

```javascript
import 'expect.js';
import 'mocha-steps';
import {browserHistory, getCurrentLocation} from 'react-router';

import getAppRootInstance from 'app/root';

describe('Signing up works', () => {

  step('Set page to signup', () => {
    // We do this before initializing the app, which simulates the user
    // entering this URL into the address bar.
    browserHistory.replace('/signup');
  });

  let appRoot;
  step('Initialize app', () => {
    // Assume this function initializes an instance of the app and returns
    // it to you. We can then make assertions about that instance
    return getAppRootInstance().then((root) => appRoot = root);
  });

  step('Assert submit button is disabled', () => {
    // We've found making assertions about the props of well-tested low-level
    // components is usually fine. However, we consider it bad practice to make
    // assertions about higher-level components - instead, make assertions
    // about the lower-level things that they render.
    const signupButton = appRoot.find('#signupButton');
    expect(signupButton.props().disabled).toBe(true);
  });

  step('Fill in email and password', () => {
    const emailInput = appRoot.find('#emailInput');
    const passwordInput = appRoot.find('#passwordInput');

    emailInput.simulate('change', {target: {value: 'peter@classdojo.com'}});
    passwordInput.simulate('change', {target: {value: 'hunter2'}});
  });

  step('Click the submit button', () => {
    const signupButton = appRoot.find('#signupButton');

    expect(signupButton.props().disabled).toBe(false);
    signupButton.simulate('click');
  })

  step('Loading state should be shown', () => {
    // At this time, the signup request has been submitted, but has not
    // returned yet. We can make assertions about the loading state.
    const loadingIndicator = appRoot.find('#loadingIndicator');

    expect(loadingIndicator.exists()).toBe(true);
  });

  step('Wait for signup request to succeed', () => {
    // This returns a promise, need to return it to mocha. Once it resolves,
    // the signup request will have finished.
    return waitForApiCallsToFinish();
  });

  step('Assert we are on the welcome page and can see the tour', () => {
    // The signup request has finished, and all state changes and rerenders
    // that result from this are completed. We can make assertions about the
    // success state.
    const currentRoute = getCurrentLocation().pathname;
    expect(currentRoute).toBe('/welcome');

    const tour = appRoot.find('#tour');
    expect(tour.exists()).toBe(true);
  });
});
```

### References

- [Fun Fun Function - Testing](https://www.youtube.com/watch?v=vqAaMVoKz1c)
- [Fun Fun Function - Mocking](https://www.youtube.com/watch?v=fgqh-OZjpYY)
- [Wiki - Unit Testing](https://en.wikipedia.org/wiki/Unit_testing)
- [Wiki - Integration Testing](https://en.wikipedia.org/wiki/Integration_testing)

