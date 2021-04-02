# LUKE 61 CHARS / 59

# def g():
# 	m = sum(x for x in range(y) if x%3==0 or x%5==0)
# 	return(m)
# 	y=int(input())
# 
# print(g())

def g():
	y=int(input())
	m = sum(x for x in range(y) if x%3==0 or x%5==0)
	return(m)
# def g(y):
# 	m = sum(x for x in range(y) if x%3==0 or x%5==0)
# 	return(m)
	
print(g())