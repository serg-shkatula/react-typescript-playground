export default (coefficients):number[] => [
    coefficients[0], coefficients[3], 0, coefficients[6],
    coefficients[1], coefficients[4], 0, coefficients[7],
    0,               0,               1, 0,
    coefficients[2], coefficients[5], 0, coefficients[8],
]