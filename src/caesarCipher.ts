const LOWER_A_CHAR_CODE = 97;
const LOWER_Z_CHAR_CODE = 122;

const UPPER_A_CHAR_CODE = 65;
const UPPER_Z_CHAR_CODE = 90;

export function caesarCipher(str: string, shiftFactor: number): string {
    while (shiftFactor < 0) {
        shiftFactor += 26;
    }

    shiftFactor %= 26;

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        if (isAlpha(currentChar)) {
            let newCharCode: number = str.charCodeAt(i) + shiftFactor;

            if (!isAlpha(String.fromCharCode(newCharCode))) {
                newCharCode -= 26;
            }

            str =
                str.slice(0, i) +
                String.fromCharCode(newCharCode) +
                str.slice(i + 1);
        }
    }

    return str;
}

function isAlpha(char: string): boolean {
    if (char.length === 0) {
        throw new Error(
            "The input is an empty string. Please specifiy a character"
        );
    }

    if (char.length > 1) {
        throw new Error("The input must be of length 1");
    }

    const charCode = char.charCodeAt(0);

    return (
        (charCode >= LOWER_A_CHAR_CODE && charCode <= LOWER_Z_CHAR_CODE) ||
        (charCode >= UPPER_A_CHAR_CODE && charCode <= UPPER_Z_CHAR_CODE)
    );
}
