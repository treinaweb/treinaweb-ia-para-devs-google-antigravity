def add(a: float, b: float) -> float:
    """
    Adds two numbers and returns the result.

    Args:
        a (float): The first number.
        b (float): The second number.

    Returns:
        float: The sum of `a` and `b`.
    """
    return a + b


def subtract(a: float, b: float) -> float:
    """
    Subtracts the second number from the first and returns the result.

    Args:
        a (float): The number to be subtracted from.
        b (float): The number to subtract.

    Returns:
        float: The difference between `a` and `b`.
    """
    return a - b


def multiply(a: float, b: float) -> float:
    """
    Multiplies two numbers and returns the result.

    Args:
        a (float): The first number.
        b (float): The second number.

    Returns:
        float: The product of `a` and `b`.
    """
    return a * b


def divide(a: float, b: float) -> float:
    """
    Divides the first number by the second and returns the result.

    Args:
        a (float): The dividend.
        b (float): The divisor. Must not be zero.

    Returns:
        float: The quotient of `a` divided by `b`.

    Raises:
        ValueError: If `b` is zero.
    """
    if b == 0:
        raise ValueError("Cannot divide by zero.")
    return a / b
