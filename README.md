# README
## Enviroments
- NodeJS version: v12.19.0
- React Native: 0.65.1
- Yarn: 1.22.0

## Installation & Run
1. Inside the project
2. `$yarn install` to install all packages
3. `$cd ios` then `$pod install`
4. `yarn android` | `yarn ios` to run app.

## Highlight packages
- `redux` `redux-persist` `redux-saga` `reselect`: Manage global app state
- `numeral`: A library for formatting and manipulating numbers
- `@react-navigation`: App navigation
- `i18next`: A internationalization, translation library
- `prettier` `eslint`: Format code style

## Important custom components
1. `Text in text.component.tsx`
2. `TextInput in text-input.component.tsx`
3. `Button in button.component.tsx`
4. `Header in header.component.tsx` 
These component is created to increase reusability and uniformity. Besides, the custom font family is used in these components.
**Please use these instead of `Text` | `TextInput` | `Button` of React Native.**

## User stories
- The DebitCard tab shows infomation of debit card (card number, available balance, owner name...) and some actions like `Get a new card` | `Weekly spending limit`...
- User can hide or show card number easily
- Focus on `Weekly spending limit` action:
1. User can toggle `Weekly spending limit` directly in DebitCard screen. The processing bar of debite card weekly spending limit will be showed or hide whenever `Weekly spending limit` toggle
2. A SpendingLimit screen will be provided to help user to update spending limit in a week. When user updates the limit value successfully, `Weekly spending limit` will be turn on and the data info of debit card will be updated also. (user can't input negative number of the limit)
