
lyst = [2,6,8,2,3,9,7,0,1,3]

lyst2  = [1,2,3,4,5,6,7,8]

def bubbleSort(lyst):
  switched = False
  times_through = 0
  for i in range(len(lyst) - 1):
       for j in range(len(lyst) - (times_through+1)):
          if lyst[j] > lyst[j+1]:
               switched = True
               first_element = lyst[j]
               second_element = lyst[j+1]
               lyst[j] = second_element
               lyst[j+1] = first_element
       times_through += 1
       if switched == False:
           return lyst
  return lyst

print bubbleSort(lyst)