# Notes for Gym App

- https://stackoverflow.com/questions/75136806/create-daterangepicker-using-two-mui-x-datepicker
- https://mui.com/x/api/date-pickers/pickers-day/
- Make modals that pop out from three dots cover the three dots like in the strong app
- Make the blue color slighly darker, more blue
- Change the img by the brand name in the navbar to a lottie file that animates on hover

## Authentication

- make `/` a home page that say something like "welcome to app..."
- make a new folder `/auth`, inside create 2 routes for `/login` and `/registration` with a `layout.tsx`
  - this `layout.tsx` will have a special header for the authentication pages
- then move the current home page to `/[username]/dashboard` and have all the other pages follow that, ex: `/[username]/dashboard/weight`
  - this `/dashboard` route will have a `layout.tsx` file which will have the normal navbar

## Split

- Shows all past splits
- Allow users to set one as active
- Allow users to create a new split
  - Make an entire split creator
    - Kind of like the form for creating a workout
      - Chose what to do on each day
      - Chose what exercises to do
      - Chose target reps and sets
      - add notes for the exercise

## Record

- Create a modal that pops up when the user tries to leave the page when they are in the middle of creating a workout, says something like "Warning - If you leave your current workout will not be saved"

### Set.tsx

- Instead of passing in value, changed to value2, I think that was an error in react that somehow still worked

## Weight

- Mobile view
  - First thought: Create two headers, List and Chart, user clicks on them to show the respective pages
    - Maybe when the header is focused the it gets bigger and has a normal font weight and when the header is unfocused it is smaller and slightly greyed out
    - The page it self could slide from left to right when you click on the header
  - Second though: List and chart stack vertically when the page width is too small
    - First thought, put chart under list
    - Or put it above like in MyFitnessPal
- Figure out whether or not to have a header in desktop view
- Add loading skeletons

### WeightList.jsx

- Add arrow in corner of modal to point towards the three dots
- Add scrollbar back and make it look nice

### Weight Chart

- Create chart
- Use dates without years or extra zeros on the x axis
- Let user pick any date range
  - Create a select menu and two DatePickers
  - Select menu has standard options including "Custom"
  - When custom is not selected the DatePickers are disabled
  - When the custom are selected the DatePickers are enabled and the user can select any date range they want
- also give some standard options for date range
- To create chart with dynamic data
  - Create the start and end dates for each predefined date range
  - Use those to make the api call and use those to grab the entries need from the database
  - either use each date as a label for the x axis or create labels at consistent intervals

## Progress

## APIs

### Weight

- Create an API to select rows based on a given date range

## Database

- Give each exercise a muscle group (Chest, Legs, Arms...)
- Refactor date column in the weight table to use DATE instead of TIMESTAMP
  - should be in the format YYYY-MM-DD
