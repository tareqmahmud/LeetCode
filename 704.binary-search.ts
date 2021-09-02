function search(nums: number[], target: number): number {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while (true) {
        // At first check is rightIndex bigger then left index
        // then no value is found
        if (leftIndex > rightIndex) {
            return -1;
        }

        // Otherwise at first find out the mid by,
        // (leftIndex + rightIndex) / 2 -> Make it floor
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);

        // Then check is three conditions
        // 1. If target value is equal to midIndex value then we got the result
        // 2. if target value is greater to midIndex value then move to the right and leftIndex = midIndex + 1
        // 3. if target value is less than to midIndex value then move to the left and rightIndex = midIndex - 1
        if (target === nums[midIndex]) {
            return midIndex;
        } else if (target > nums[midIndex]) {
            leftIndex = midIndex + 1;
        } else if (target < nums[midIndex]) {
            rightIndex = midIndex - 1;
        }
    }
}
