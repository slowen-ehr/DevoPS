# Python Program to find Perfect Number

def CalculatePerfection(number):
    sum = 0
    for i in range(1, number):
        if(number % i == 0):
            sum = sum + i
    return sum

number = int(input(" Please Enter any Number: "))
sum = CalculatePerfection(number)
if (sum > number):
    print(" %d is an abundant Number" %number)
elif (sum < number):
    print(" %d is a defective Number" %number)
else:
    print(" %d is a perfect Number" %number)

