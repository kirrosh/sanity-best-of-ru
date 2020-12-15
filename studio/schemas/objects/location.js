export default {
  title: 'Координаты',
  name: 'location',
  type: 'object',
  fields: [
    {
      title: 'Ширина',
      name: 'latitude',
      type: 'number'

      // Here the user will be prompted to write any string to describe the resource type.
      // There is a way to limit this to a number of preset strings and provide a pull-down
      // or radio buttons to select resource. This is left as an exercise for the reader! See
      // the reference docs!

    },
    {
      title: 'Долгота',
      name: 'longitude',
      type: 'number'
    }
  ]
}
