// src/utils/csvParser.js

export function parseCSV(str) {
    const arr = [];
    let quote = false; // 'true' means we're inside a quoted field

    // Iterate over each character, keeping track of current row and column
    for (let row = 0, col = 0, c = 0; c < str.length; c++) {
        let cc = str[c], nc = str[c + 1]; // Current character, next character
        arr[row] = arr[row] || []; // Create a new row if necessary
        arr[row][col] = arr[row][col] || ''; // Create a new column (start with empty string) if necessary

        // Handle escaped quotes
        if (cc === '"' && quote && nc === '"') {
            arr[row][col] += cc; 
            c++; 
            continue; 
        }

        // Begin/end quoted field
        if (cc === '"') { 
            quote = !quote; 
            continue; 
        }

        // Move to the next column if it's a comma and not in a quoted field
        if (cc === ',' && !quote) { 
            col++; 
            continue; 
        }

        // Handle new lines
        if (cc === '\r' && nc === '\n' && !quote) { 
            row++; col = 0; c++; 
            continue; 
        }
        if ((cc === '\n' || cc === '\r') && !quote) { 
            row++; col = 0; 
            continue; 
        }

        // Append the current character to the current column
        arr[row][col] += cc;
    }

    // Replace empty values with 'null'
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '') {
                arr[i][j] = 'null'; // Replace empty values with 'null'
            }
        }
    }

    return arr; // Return the 2D array
}
