# Notes for Gym App

- https://stackoverflow.com/questions/75136806/create-daterangepicker-using-two-mui-x-datepicker
- https://mui.com/x/api/date-pickers/pickers-day/
- Make modals that pop out from three dots cover the three dots like in the strong app
- Make the blue color slighly darker, more blue

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

- List and chart stack vertically when the page width is too small
  - First thought, put chart under list
  - Or put it above like in MyFitnessPal
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
  - Get the entire list of weights from api
  - filter based on the range picked by the user
  - give that range to a function which will get the data needed for the chart
    - The function creates an array of weights for the data
      - uses the dates to create the labels for the x axis
      - either use each date as a label for the x axis or create labels at consistent intervals

## Progress

## Database

- Give each exercise a muscle group (Chest, Legs, Arms...)
