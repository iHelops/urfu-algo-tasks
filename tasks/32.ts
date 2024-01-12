// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hexString: string) {
    const RHex = hexString.slice(1, 3)
    const GHex = hexString.slice(3, 5)
    const BHex = hexString.slice(5, 7)

    return {
        r: parseInt(RHex, 16),
        g: parseInt(GHex, 16),
        b: parseInt(BHex, 16),
    }
}
