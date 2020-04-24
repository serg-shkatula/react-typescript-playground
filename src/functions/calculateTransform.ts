import * as PerspT from 'perspective-transform'

//Calculate the transformation function
export default (source: number[], destination: number[]) => {
    return PerspT(source, destination)
}