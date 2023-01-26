const readlineSync = require('readline-sync');

let matrix = [[1,1,1], [3,2,1], [2,1,2]];


// Function to input a matrix
function inputMatrix(matrix) {
for (let i = 0; i < matrix.length; i++) {
for (let j = 0; j < matrix[i].length; j++) {
    matrix[i][j] = Number(readlineSync.question(`Enter value for matrix[${i}][${j}]:`));
}
}
return matrix;
}

// Function to subtract one row from another
function subtractRow(matrix, row1, row2, scalar) {
for (let i = 0; i < matrix[row1].length; i++) {
matrix[row1][i] -= matrix[row2][i] * scalar;
}
return matrix;
}

// Function to add one row to another
function addRow(matrix, row1, row2, scalar) {
for (let i = 0; i < matrix[row1].length; i++) {
matrix[row1][i] += matrix[row2][i] * scalar;
}
return matrix;
}

// Function to multiply one row by another
function multiplyRow(matrix, row1, row2, scalar) {
    for (let i = 0; i < matrix[row1].length; i++) {
        matrix[row1][i] *= matrix[row2][i] * scalar;
    }
    return matrix;
}


// Function to divide one row by another
function divideRow(matrix, row1, row2, scalar) {
    for (let i = 0; i < matrix[row1].length; i++) {
        matrix[row1][i] /= matrix[row2][i] * scalar;
    }
    return matrix;
}

// Function to multiply a row by a scalar
function scalarMultiply(matrix, row, scalar) {
    for (let i = 0; i < matrix[row].length; i++) {
        matrix[row][i] *= scalar;
    }
    return matrix;
}

// Function to print the matrix
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
}

// Main program loop
while (true) {
    let choice = Number(readlineSync.question("Enter a choice:\n1. Input matrix\n2. Subtract row\n3. Add row\n4. Multiply row\n5. Divide row\n6. Scalar multiply row\n7. Print matrix\n8. Exit \n: "));
    let scalar = 1
    switch (choice) {
        case 1:
            matrix = inputMatrix(matrix);
            break;
        case 2:
            row1 = Number(readlineSync.question("Enter the index of the first row (0-indexed):"));
            row2 = Number(readlineSync.question("Enter the index of the second row (0-indexed):"));
            scalar = Number(readlineSync.question("Enter the scalar:"));
            matrix = subtractRow(matrix, row1, row2, scalar);
            break;
            case 3:
                row1 = Number(readlineSync.question("Enter the index of the first row (0-indexed):"));
                row2 = Number(readlineSync.question("Enter the index of the second row (0-indexed):"));
                scalar = Number(readlineSync.question("Enter the scalar:"));
                matrix = addRow(matrix, row1, row2, scalar);
                break;
            case 4:
                row1 = Number(readlineSync.question("Enter the index of the first row (0-indexed):"));
                row2 = Number(readlineSync.question("Enter the index of the second row (0-indexed):"));
                scalar = Number(readlineSync.question("Enter the scalar:"));
                matrix = multiplyRow(matrix, row1, row2, scalar);
                break;
            case 5:
                row1 = Number(readlineSync.question("Enter the index of the first row (0-indexed):"));
                row2 = Number(readlineSync.question("Enter the index of the second row (0-indexed):"));
                scalar = Number(readlineSync.question("Enter the scalar:"));
                matrix = divideRow(matrix, row1, row2, scalar);
                break;
            case 6:
                let row = Number(readlineSync.question("Enter the index of the row (0-indexed):"));
                scalar = Number(readlineSync.question("Enter the scalar:"));
                matrix = scalarMultiply(matrix, row, scalar);
                break;
            case 7:
                printMatrix(matrix);
                break;
            case 8:
                console.log("Exiting program...");
                process.exit();
            default:
                console.log("Invalid choice. Please enter a valid choice.");
                break;
            }
        }
  
    