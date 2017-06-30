import time

def find_routes(rows,columns):
    dictionary = {}
    for i in range (0,rows+1):
        for j in range (0,columns+1):
            current_point = (i,j)
            if j == 0 or i ==0:
                dictionary[current_point] = 1
            else:
                val1 = i-1
                val2 = j-1
                current_val = dictionary[(val1,j)] + dictionary[(i,val2)]
                dictionary[current_point] = current_val
    print dictionary
    return(dictionary[rows,columns])

start = time.time()
n = find_routes(20,20)
elapsed =(time.time() - start)
print "%s found in %s seconds" % (n,elapsed)
