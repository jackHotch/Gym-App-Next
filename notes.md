# Notes for Gym App

## Convertion to Next and Typescript

- Fix the click outside to close for the date calendar
- Keep converting files
- https://stackoverflow.com/questions/75136806/create-daterangepicker-using-two-mui-x-datepicker
- https://mui.com/x/api/date-pickers/pickers-day/
- Make modals that pop out from three dots cover the three dots like in the strong app
- Make the blue color slighly darker, more blue

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
- Let user pick any date range
- Use NextUI for DateRangePicker - https://nextui.org/docs/components/date-range-picker#controlled
- also give some standard options for date range
- allow user to hover over the chart to see the specific entry
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
