

def cubes(n):
    for x in range(1, n + 1):
        cube = x ** 3
        print("Current Number is: {} and the cube is: {}".format(x, cube))

cubes(5)