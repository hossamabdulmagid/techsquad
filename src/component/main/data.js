export const dataOptions = [
    {
        value: "x",
        label: "Kylian mbappe",
        image:"https://bit.ly/kent-c-dodds",
        Dec: {

            Attacking: 0.65,
            Passing: 0.55,
            Technical: 0.76,
            Creativity: 0.60,
            Defencive: 0.40,
            
        },
        Jan: {
            Attacking: 0.55,
            Passing: 0.45,
            Technical: 0.77,
            Creativity: 0.56,
            Defencive: 0.45,
            
        },
        Feb: {

            Attacking: 0.70,
            Passing: 0.66,
            Technical: 0.71,
            Creativity: 0.67,
            Defencive: 0.50,
            
        },

        Mar: {

            Attacking: 0.67,
            Passing: 0.70,
            Technical: 0.80,
            Creativity: 0.80,
            Defencive: 0.48,
            
        },

        Apr: {

            Attacking: 0.72,
            Passing: 0.80,
            Technical: 0.76,
            Creativity: 0.78,
            Defencive: 0.60,
            
        },
        meta: { color: 'rgb(69, 188, 75)' }
      
    },
    {
        value: "y",

        label: "Antonine Griezmans",
        image:"https://bit.ly/kent-c-dodds",
        Dec: {

            Attacking: 0.80,
            Passing: 0.89,
            Technical: 0.90,
            Creativity: 0.60,
            Defencive: 0.60,
        },
        Jan: {

            Attacking: 0.85,
            Passing: 0.79,
            Technical: 0.81,
            Creativity: 0.56,
            Defencive: 0.76,
        },
        Feb: {

            Attacking: 0.89,
            Passing: 0.74,
            Technical: 0.71,
            Creativity: 0.67,
            Defencive: 0.50,
        },

        Mar: {

            Attacking: 0.88,
            Passing: 0.70,
            Technical: 0.80,
            Creativity: 0.77,
            Defencive: 0.67,
        },

        Apr: {

            Attacking: 0.90,
            Passing: 0.80,
            Technical: 0.76,
            Creativity: 0.78,
            Defencive: 0.70,
        },

        meta: { color: 'rgb(79, 85, 242)' }
    },
];

export const stateOptions = [
    { value: 'Jan', label: 'January'},
    { value: 'Feb', label: 'February' },
    { value: 'Mar', label: 'March' },
    { value: 'Apr', label: 'April' },
    { value: 'Dec', label: 'December' },
    { value: 'avg', label: 'Avarage' },
];

export const groupedOptions = [
    {
        label: 'Colours',
        options: dataOptions,
    },
];
