# Python function to find a perdec, defective or abundant number
def calculatePerfection(numbers):
    try:
        for number in numbers:
            sum = 0
            for i in range(1, number):
                if(number % i == 0):
                    sum = sum + i
            if (sum > number):
                print("%d is an abundant number\n" %number)
            elif (sum < number):
                print("%d is a defective number\n" %number)
            else:
                print("%d is a perfect number\n" %number)
    except ValueError as err:
        print("%s is not a natural number\n" %err)
