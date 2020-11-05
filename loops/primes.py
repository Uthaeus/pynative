

def primes(start, end):
    rng = range(start, end + 1)
    primes = []

    for x in rng:
        if isPrime(x):
            primes.append(x)

    for c in primes:
        print(c)


def isPrime(n):
    if n > 1:
        for i in range(2, n):
            if n % i == 0:
                return False 
        else:
            return True 

    else:
        return False 


primes(25, 50)