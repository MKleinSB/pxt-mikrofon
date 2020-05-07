/**
 * Fügt der Eingabe einen einfach auszulesenden Mikrofonblock bei.
 */
namespace input {   // frech in input einklinken
    /**
     * Lautstärke in 0-100%
     */

    //% blockId="loudness"
    //% block="Lautstärke"

    export function loudness(): number {
        let value = 0
        let max = 0
        let min = 1023
        for (let index = 0; index < 32; index++) {
            value = pins.analogReadPin(50)
            if (value > max) {
                max = value
            } else if (value < min) {
                min = value
            }
        }
        value = (max - min) * 977 / 10000
        return value
    }
}
