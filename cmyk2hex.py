#!/usr/bin/env python3
import sys


def cmyk_to_hex(c, m, y, k):
    r = round(255 * (1 - c / 100) * (1 - k / 100))
    g = round(255 * (1 - m / 100) * (1 - k / 100))
    b = round(255 * (1 - y / 100) * (1 - k / 100))
    return f"#{r:02x}{g:02x}{b:02x}"


def main():
    if len(sys.argv) != 5:
        print("Usage: cmyk2hex.py C M Y K  (values 0-100)", file=sys.stderr)
        sys.exit(1)

    try:
        values = [float(a) for a in sys.argv[1:]]
    except ValueError:
        print("Error: all values must be numbers", file=sys.stderr)
        sys.exit(1)

    if any(v < 0 or v > 100 for v in values):
        print("Error: all values must be between 0 and 100", file=sys.stderr)
        sys.exit(1)

    print(cmyk_to_hex(*values))


if __name__ == "__main__":
    main()
