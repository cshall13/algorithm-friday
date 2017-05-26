 # O(1)
 # means the size of the data set is irrelevant. the number of 
 # steps or space will remain constant

 def first_element(the_list):
 	return the_list[0];

 a_list = [1,2,4,45,5456,7234,54567,765,845,635634,3456,345643,33456,23453456];
 b_list = [1];
 c_list = range(1,100000000);

 def first_element_minus_one(the_list):
 	element = the_list[0] - 1;
 	return element;

 # O(N) - grows linerally. IE, the number of steps increase proportionate to however
 # many elements there are. This creates a straight, diagonal line

def loop_through_me(the_list):
	for elem in the_list:
		# do something
		pass;


# O(N^2) - represents an algorithm whose performance is directly proportional
# to the number of elemnts squared. VERY COMMON. loop inside a loop

def oh_squared(the_list):
	for elem in the_list:
		for elem2 in the_list:
			# do something
			pass;

# for every new inside loop, you add a number to the big oh_squared
# 3 nested loops = O(N^3)
# 4 nested loops = O(N^4)

# O(2^N) this represents an algorithm that doubles with each new element. 
# IE you add one new element, it takes twice as long
def fib(num):
	if(num <= 1):
		return num;
	return fib(num - 2) + fib(num - 1);

# print fib(10) //<-------will freeze up computer!!!!!

# ***Sorting algorithms
# -unsorted list 
# -sort 
# -worst,best,avg
# -bubble sort