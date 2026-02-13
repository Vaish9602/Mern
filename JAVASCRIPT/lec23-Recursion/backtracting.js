// find a subset of the given array
function findSubsets(arr) {
    let result = [];

    function backtrack(index, current) {
        // Base case: reached end of array
        if (index === arr.length) {
            result.push([...current]); // store a copy
            return;
        }

        // Choice 1: Include current element
        current.push(arr[index]);
        backtrack(index + 1, current);

        // Backtrack
        current.pop();

        // Choice 2: Exclude current element
        backtrack(index + 1, current);
    }

    backtrack(0, []);
    return result;
}

// Example
console.log(findSubsets([1, 2, 3]));
