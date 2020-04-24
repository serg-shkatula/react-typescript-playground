import calculateTransform from "./calculateTransform";
import coefficientsToMatrix from "./coefficientsToMatrix";

export default (src: number[], dst: number[]):string => {
    const coefficients = calculateTransform(src, dst).coeffs
    let matrix = coefficientsToMatrix(coefficients)
    matrix = matrix.map((c) => (Math.round(c * 1000000) / 1000000))

    return `matrix3d(${matrix.join(', ')})`
}