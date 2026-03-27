def linear_search(arr, target):
    """
    Perform a linear search on a list.

    Args:
        arr (list): The list to search through.
        target (any): The value to search for.

    Returns:
        int: The index of the target if found, otherwise -1.
    """
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1


def binary_search(arr, target):
    """
    Perform a binary search on a sorted list.

    Args:
        arr (list): The sorted list to search through.
        target (any): The value to search for.

    Returns:
        int: The index of the target if found, otherwise -1.
    """
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = arr[mid]
        if guess == target:
            return mid
        if guess > target:
            high = mid - 1
        else:
            low = mid + 1
    return -1


def bubble_sort(arr):
    """
    Perform a bubble sort on a list.

    Args:
        arr (list): The list to sort.

    Returns:
        list: The sorted list.
    """
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr


def quick_sort(arr):
    """
    Perform a quick sort on a list.

    Args:
        arr (list): The list to sort.

    Returns:
        list: The sorted list.
    """
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]
        less = [i for i in arr[1:] if i <= pivot]
        greater = [i for i in arr[1:] if i > pivot]
        return quick_sort(less) + [pivot] + quick_sort(greater)
